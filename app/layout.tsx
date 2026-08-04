import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bravixo - Growth & Field Activation Agency',
  description: 'Marketing Beyond Screens. Real-world customer engagement through field activation, product demonstrations, and strategic growth campaigns.',
  keywords: 'field activation, brand activation, rural marketing, experiential marketing, growth campaigns',
  authors: [{ name: 'Bravixo' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bravixo.com',
    title: 'Bravixo - Growth & Field Activation Agency',
    description: 'Marketing Beyond Screens. Real-world customer engagement through field activation, product demonstrations, and strategic growth campaigns.',
    images: [
      {
        url: 'https://bravixo.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0B0B0B" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white dark:bg-primary text-primary dark:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
