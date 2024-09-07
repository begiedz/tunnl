import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tunnl | Sign in',
  description: 'Tunnl messaging application.',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className,
          'flex h-dvh w-dvw items-center justify-center bg-slate-200')
        }
      >
        <header className="absolute left-5 top-5 z-0">
          <h1 className="text-4xl font-bold">
            Tunnl<sup className="text-xl font-normal">™</sup>
          </h1>
        </header>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
