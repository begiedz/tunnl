import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tunnl',
  description: 'Tunnl messenger.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen w-screen items-center justify-center`}>
        <div className="flex h-[95%] w-[95%] justify-between gap-4">{children}</div>
      </body>
    </html>
  );
}
