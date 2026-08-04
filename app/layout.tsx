import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bravixo - Field Activation Marketing',
  description: 'Connect with real customers in real places through innovative field activation campaigns',
  keywords: 'field activation, marketing, brand activation, experiential marketing',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Bravixo Marketing',
  themeColor: '#D4AF37',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
