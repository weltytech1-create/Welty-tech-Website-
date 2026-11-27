import type { NextConfig } from "next";
import {
  STRICT_TRANSPORT_SECURITY_HEADER,
  buildBaseSecurityHeaders,
} from "./src/lib/security-headers";

const isDev = process.env.NODE_ENV === "development";

const PUBLIC_CROSS_ORIGIN_SOURCES = [
  "/opengraph-image",
  "/icon.svg",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/assets/:path*",
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: {
    turbopackPluginRuntimeStrategy: "forceWorkerThreads",
    sri: {
      algorithm: "sha256",
    },
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    const baseHeaders = buildBaseSecurityHeaders({
      isDev,
      upgradeInsecureRequests: false,
    });
    const httpsHeaders = [
      ...buildBaseSecurityHeaders({
        isDev,
        upgradeInsecureRequests: true,
      }),
      STRICT_TRANSPORT_SECURITY_HEADER,
    ];

    return [
      {
        source: "/:path*",
        headers: baseHeaders,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "https",
          },
        ],
        headers: httpsHeaders,
      },
      ...PUBLIC_CROSS_ORIGIN_SOURCES.map((source) => ({
        source,
        headers: [
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
        ],
      })),
    ];
  },
};

export default nextConfig;
