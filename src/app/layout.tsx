import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MoxMultisport',
  description:
    'Multiple sport bicyle shop, Trialon, Road, Mountain, Gravel, Cyclocross,',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
