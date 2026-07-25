import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { QueryProvider } from '@/providers/query-provider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    template: '%s | SarkariMate',
  },
  description:
    'SarkariMate helps students find latest government jobs, admit cards, results, answer keys, syllabus and official exam updates in one place.',
  metadataBase: new URL('https://sarkarimate.com'),
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    description:
      'Find latest government job notifications, admit cards, results, answer keys, syllabus and exam updates.',
    url: 'https://sarkarimate.com',
    siteName: 'SarkariMate',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    description:
      'Latest government job notifications, admit cards, results, answer keys, syllabus and exam updates.',
    images: ['/twitter-image'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <QueryProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </QueryProvider>
      </body>
    </html>
  );
}
