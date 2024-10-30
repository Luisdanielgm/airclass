'use client'

import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from '@/components/layout/Sidebar'
import { LoadingProvider } from '@/components/providers/LoadingProvider'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LoadingProvider>
          <Sidebar />
          <main className="md:ml-64">
            {children}
          </main>
        </LoadingProvider>
      </body>
    </html>
  )
}
