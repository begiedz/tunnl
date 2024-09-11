import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/context/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tunnl',
  description: 'Tunnl messenger.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={cn([
            inter.className,
            'flex h-dvh w-dvw items-center justify-center bg-slate-200',
          ])}
        >
          <div className="flex h-[97%] w-[97%] justify-between gap-4">
            {children}
          </div>
          <Toaster />
        </body>
      </html>
    </AuthProvider>
  )
}
