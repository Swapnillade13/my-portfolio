import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swapnil Lade Portfolio',
  description: 'Created with next.js',
  keywords: 'swapnil lade, portfolio, next.js, web developer',
  authors: [{ name: 'Swapnil Lade', url: 'https://swapnillade.com' }],
  creator: 'Swapnil Lade',
  generator: 'app-router',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
