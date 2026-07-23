import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://faizantech.com'),
  title: 'FaizanTech — AI Automation Agency',
  description:
    'We build production-grade AI systems that replace manual work, accelerate product delivery, and scale your operations — without the fluff, without the wait.',
  openGraph: {
    title: 'FaizanTech — AI Automation Agency',
    description:
      'We build production-grade AI systems that replace manual work, accelerate product delivery, and scale your operations.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
