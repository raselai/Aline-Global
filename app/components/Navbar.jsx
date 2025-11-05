// 🧭 NAVIGATION BAR COMPONENT - Sticky navigation for all pages

'use client' // 🔧 Using client features for hamburger menu

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  // 📱 State to track if mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        {/* 🏢 Company Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/Logos/Group-Logo.png" alt="Aline Global Logo" className={styles.logoImage} />
        </Link>

        {/* 🍔 Hamburger Menu Button (Mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation menu items */}
        <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuActive : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>

          {/* 📖 BUSINESS DROPDOWN */}
          <li className={styles.dropdown}>
            <Link href="/business">Business</Link>
            {/* Dropdown submenu */}
            <ul className={styles.dropdownMenu}>
              <li><Link href="/business#garments">Garments & Apparel</Link></li>
              <li><Link href="/business#manufacturing">Manufacturing</Link></li>
              <li><Link href="/business#pharmaceutical">Pharmaceutical</Link></li>
              <li><Link href="/business#realestate">Real Estate</Link></li>
              <li><Link href="/business#it-software">IT & Software</Link></li>
              <li><Link href="/business#media">Media & TV</Link></li>
              <li><Link href="/business#trade">International Trade</Link></li>
              <li><Link href="/business#brand">Brand Development</Link></li>
            </ul>
          </li>

          <li><a href="#leadership">Leadership</a></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
