// 📖 ROOT LAYOUT - This file wraps around all pages on your website
// Think of it as the "frame" that's always there (like headers, footers)

import './globals.css' // Import our global styles
import Footer from './components/Footer'

// Metadata for SEO (Search Engine Optimization)
export const metadata = {
  title: 'Node Meta - IT Services & Solutions',
  description: 'Node Meta provides comprehensive IT and BPO services',
}

// This is the main layout component
// {children} means "whatever page content goes here"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* This is where your page content will appear */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
