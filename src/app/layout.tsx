import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../../components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next_js Ui → Website',
  description: 'Create Next_js App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background:"rgb(250, 250, 250,0.53)"}}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
