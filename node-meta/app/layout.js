// 📖 ROOT LAYOUT - This file wraps around all pages on your website
// Think of it as the "frame" that's always there (like headers, footers)

import './globals.css' // Import our global styles
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Metadata for SEO (Search Engine Optimization)
export const metadata = {
  title: 'Aline Group',
  description: 'Aline Group provides comprehensive IT and BPO services',
}

// This is the main layout component
// {children} means "whatever page content goes here"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 🧭 Navigation appears on all pages */}
        <Navbar />
        {/* This is where your page content will appear */}
        {children}
        {/* 🦶 Footer appears on all pages */}
        <Footer />
      </body>
    </html>
  )
}
