import type { Metadata } from 'next'
import './globals.css'
import {Navbar, Footer} from '@/components'

export const metadata: Metadata = {
  title: 'Car Hub', // this is the tab name
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative"><Navbar />{children}<Footer /></body> 
    </html>
  )
}

// We add footer and header here.
// Navbar will be above the children, footer will be belove the children
