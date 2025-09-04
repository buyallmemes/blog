import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://buyallmemes.com'
    : 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: 'BuyAllMemes Blog',
    template: '%s - BuyAllMemes Blog',
  },
  description:
    'Thoughts on software engineering, development practices, and technology by Mark Fenderov',
  keywords: [
    'software engineering',
    'development',
    'programming',
    'technology',
    'blog',
    'tutorials',
  ],
  authors: [
    {
      name: 'Mark Fenderov',
      url: 'https://www.linkedin.com/in/mark-fenderov/',
    },
  ],
  creator: 'Mark Fenderov',
  publisher: 'Mark Fenderov',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'BuyAllMemes Blog',
    description:
      'Thoughts on software engineering, development practices, and technology',
    siteName: 'BuyAllMemes Blog',
  },
  twitter: {
    card: 'summary',
    title: 'BuyAllMemes Blog',
    description:
      'Thoughts on software engineering, development practices, and technology',
    creator: '@markfenderov',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {trackingId && <GoogleAnalytics trackingId={trackingId} />}
        {children}
      </body>
    </html>
  );
}
