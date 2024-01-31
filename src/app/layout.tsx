import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
    <>
      <html lang="en">
        <body className={inter.className}>
          <div className="max-w-7xl mx-auto ">{children}</div>
        </body>
      </html>
    </>
  );
}
