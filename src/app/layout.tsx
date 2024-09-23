import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debatiendo',
  description: 'Un blog',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
