import type { Metadata } from 'next';
import './globals.css';
import ParticleBackground from '@/components/ParticleBackground';

export const metadata: Metadata = {
  metadataBase: new URL('https://welty.in'),
  title: 'Welty Tech | Enterprise SaaS, Web Engineering, Dashboards & AI Workflows',
  description:
    'Welty Tech architects high-concurrency SaaS platforms, modern web experiences, real-time telemetry dashboards, and autonomous agentic AI workflows. Built with Next.js 16.3 and React 19.',
  keywords: [
    'Welty Tech',
    'SaaS Engineering',
    'Web Development',
    'Dashboard Design',
    'AI Automation',
    'AI Workflows',
    'Next.js 16.3',
    'Enterprise Cloud'
  ],
  authors: [{ name: 'Welty Tech' }],
  openGraph: {
    title: 'Welty Tech | Enterprise SaaS, Web Engineering, Dashboards & AI Workflows',
    description:
      'Where organic innovation meets intelligent SaaS & AI workflows. Enterprise digital systems engineered for exponential scale.',
    images: ['/images/welty-hero-3d.jpg'],
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
