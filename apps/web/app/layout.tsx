import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ClarityAnalytics } from '@/components/clarity-analytics';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { OrganizationSchema, WebsiteSchema } from '@/components/structured-data';
import { QueryProvider } from '@/providers/query-provider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sarkarimate.com'),

  title: {
    default: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    template: '%s | SarkariMate',
  },

  description:
    'SarkariMate helps students find the latest government jobs, admit cards, results, answer keys, syllabus and official exam updates in one place.',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: '/assets/images/favicon-rounded.png',
        type: 'image/png',
      },
    ],
    shortcut: '/assets/images/favicon-rounded.png',
    apple: '/assets/images/favicon-rounded.png',
  },

  openGraph: {
    title: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    description:
      'Find the latest government job notifications, admit cards, results, answer keys, syllabus and official exam updates.',

    url: 'https://sarkarimate.com',
    siteName: 'SarkariMate',
    type: 'website',

    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SarkariMate',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    description:
      'Latest government job notifications, admit cards, results, answer keys, syllabus and official exam updates.',

    images: ['/twitter-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />

        <link rel="preconnect" href="https://api.sarkarimate.com" />
      </head>

      <body suppressHydrationWarning>
        <QueryProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </QueryProvider>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />

        <ClarityAnalytics />
      </body>
    </html>
  );
}
