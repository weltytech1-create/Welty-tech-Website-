export interface CspOptions {
  isDev: boolean;
  upgradeInsecureRequests: boolean;
}

/**
 * Builds the Content-Security-Policy header aligned with Next.js App Router,
 * Tailwind CSS, Framer Motion, Formspree submissions, and Vercel telemetry.
 */
export function buildContentSecurityPolicy({
  isDev,
  upgradeInsecureRequests,
}: CspOptions): string {
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    ...(isDev ? ["'unsafe-eval'"] : []),
    "https://va.vercel-scripts.com",
  ].join(" ");

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    "media-src 'self'",
    "connect-src 'self' https://formspree.io https://vitals.vercel-insights.com https://va.vercel-scripts.com",
    "form-action 'self' https://formspree.io",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "manifest-src 'self'",
    "worker-src 'self'",
    ...(upgradeInsecureRequests ? ["upgrade-insecure-requests"] : []),
  ];

  return directives.join("; ");
}

export interface SecurityHeaderEntry {
  key: string;
  value: string;
}

export const STRICT_TRANSPORT_SECURITY_HEADER: SecurityHeaderEntry = {
  key: "Strict-Transport-Security",
  value: "max-age=63072000; includeSubDomains; preload",
};

/**
 * Baseline security headers applied to every response across the site.
 */
export function buildBaseSecurityHeaders(
  options: CspOptions
): SecurityHeaderEntry[] {
  return [
    {
      key: "Content-Security-Policy",
      value: buildContentSecurityPolicy(options),
    },
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
    {
      key: "Permissions-Policy",
      value:
        "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), serial=(), hid=(), browsing-topics=(), interest-cohort=()",
    },
    {
      key: "X-Permitted-Cross-Domain-Policies",
      value: "none",
    },
    {
      key: "X-DNS-Prefetch-Control",
      value: "off",
    },
    {
      key: "Cross-Origin-Opener-Policy",
      value: "same-origin",
    },
    {
      key: "Cross-Origin-Resource-Policy",
      value: "same-origin",
    },
  ];
}
