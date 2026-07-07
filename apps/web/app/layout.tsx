import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    template: '%s | SarkariMate',
  },
  description:
    'SarkariMate helps students find latest government jobs, admit cards, results, answer keys, syllabus and official exam updates in one place.',
  metadataBase: new URL('https://sarkarimate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    description:
      'Find latest government job notifications, admit cards, results, answer keys, syllabus and exam updates.',
    url: 'https://sarkarimate.com',
    siteName: 'SarkariMate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SarkariMate - Latest Government Jobs, Results and Admit Cards',
    description:
      'Latest government job notifications, admit cards, results, answer keys, syllabus and exam updates.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
