import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Header from '@/components/header';
// import Banner from '@/components/banner';

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
          <div className="bg-pink-100 mx-auto ">
            <div className="bg-slate-700 border-1 border-slate-500 mx-auto justify-center item-center max-w-7xl">
              <div className="max-w-7xl mx-auto ">
                {/* <Banner /> */}
                <Header />
                {/* <Navigation /> */}
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
