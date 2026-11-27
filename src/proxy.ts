import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  STRICT_TRANSPORT_SECURITY_HEADER,
  buildBaseSecurityHeaders,
} from "@/lib/security-headers";

const ALLOWED_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

const BLOCKED_HIDDEN_PATH_REGEX = /(^|\/)\.(?!well-known(?:\/|$))/i;
const BLOCKED_PROBE_EXT_REGEX =
  /\.(?:php\d*|phtml|phar|asp|aspx|jsp|jspx|cgi|pl|py|rb|sh|bash|sql|sqlite|db|bak|backup|old|orig|save|swp|swo|log|ini|conf|config|yml|yaml|toml|lock)$/i;
const BLOCKED_SCANNER_PREFIX_REGEX =
  /^\/(?:wp-admin|wp-login|wp-content|wp-includes|xmlrpc|phpmyadmin|pma|admin|administrator|server-status|server-info|actuator|cgi-bin|vendor|node_modules)(?:\/|$)/i;
const PUBLIC_CROSS_ORIGIN_EXACT = new Set([
  "/opengraph-image",
  "/icon.svg",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
]);

function isHttpsRequest(request: NextRequest): boolean {
  const forwardedProto = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase();
  return forwardedProto === "https" || request.nextUrl.protocol === "https:";
}

function applySecurityHeaders(
  response: NextResponse,
  request: NextRequest
): NextResponse {
  const isDev = process.env.NODE_ENV === "development";
  const isHttps = isHttpsRequest(request);
  const headers = buildBaseSecurityHeaders({
    isDev,
    upgradeInsecureRequests: isHttps,
  });

  for (const { key, value } of headers) {
    response.headers.set(key, value);
  }

  if (isHttps) {
    response.headers.set(
      STRICT_TRANSPORT_SECURITY_HEADER.key,
      STRICT_TRANSPORT_SECURITY_HEADER.value
    );
  }

  const pathname = request.nextUrl.pathname;
  if (
    PUBLIC_CROSS_ORIGIN_EXACT.has(pathname) ||
    pathname.startsWith("/assets/")
  ) {
    response.headers.set("Cross-Origin-Resource-Policy", "cross-origin");
  }

  return response;
}

function rejectRequest(
  request: NextRequest,
  status: number,
  message: string,
  extraHeaders?: Record<string, string>
): NextResponse {
  const response = new NextResponse(message, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      ...extraHeaders,
    },
  });
  return applySecurityHeaders(response, request);
}

export function proxy(request: NextRequest) {
  if (!ALLOWED_METHODS.has(request.method.toUpperCase())) {
    return rejectRequest(request, 405, "Method Not Allowed", {
      Allow: "GET, HEAD, OPTIONS",
    });
  }

  if (request.url.length > 2048 || request.nextUrl.pathname.length > 512) {
    return rejectRequest(request, 414, "URI Too Long");
  }

  const rawPathname = request.nextUrl.pathname;
  let decodedPathname: string;
  try {
    decodedPathname = decodeURIComponent(rawPathname);
  } catch {
    return rejectRequest(request, 400, "Bad Request");
  }

  if (
    rawPathname.includes("\0") ||
    decodedPathname.includes("\0") ||
    rawPathname.includes("\\") ||
    decodedPathname.includes("\\") ||
    /(?:^|\/)\.\.(?:\/|$)/.test(decodedPathname)
  ) {
    return rejectRequest(request, 400, "Bad Request");
  }

  if (
    BLOCKED_HIDDEN_PATH_REGEX.test(decodedPathname) ||
    BLOCKED_PROBE_EXT_REGEX.test(decodedPathname) ||
    BLOCKED_SCANNER_PREFIX_REGEX.test(decodedPathname)
  ) {
    return rejectRequest(request, 404, "Not Found");
  }

  return applySecurityHeaders(NextResponse.next(), request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_vercel).*)"],
};
