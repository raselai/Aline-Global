// 📖 HOMEPAGE - This is the main landing page (what visitors see first)

'use client' // 🔧 This tells Next.js we're using browser features (like clicks, state)

import { useState, useEffect } from 'react' // 🪝 React hooks for state and side effects
import styles from './page.module.css'
import LeadershipSection from './components/LeadershipSection'

export default function Home() {
  // 📱 State to track if mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false) // Starts as 'false' (closed)

  // 🎬 State to track if intro animation is showing
  const [showIntro, setShowIntro] = useState(true) // Starts as 'true' (show intro first)

  // 🎞️ State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0)

  // 📊 Define all 7 business sectors with images
  const businessSectors = [
    {
      title: 'Garments & Apparel',
      subtitle: 'Quality fashion and textile manufacturing',
      image: '/Hero Section/Garments & Apparel.jpg'
    },
    {
      title: 'Manufacturing',
      subtitle: 'Advanced industrial production solutions',
      image: '/Hero Section/Manufacturing.jpg'
    },
    {
      title: 'Pharmaceutical',
      subtitle: 'Healthcare and medical innovations',
      image: '/Hero Section/Pharmaceutical.jpg'
    },
    {
      title: 'Real Estate & Development',
      subtitle: 'Building the future of urban living',
      image: '/Hero Section/Real Estate & Development.jpg'
    },
    {
      title: 'IT & Software',
      subtitle: 'Cutting-edge technology solutions',
      image: '/Hero Section/IT & Software.jpg'
    },
    {
      title: 'Media & TV Channel',
      subtitle: 'Broadcasting excellence and entertainment',
      image: '/Hero Section/Media & TV Channel.jpg'
    },
    {
      title: 'Aline Brand Development',
      subtitle: 'Creating powerful brand identities',
      image: '/Hero Section/Brand Development.jpg'
    }
  ]

  // ⏰ Hide intro after 3 seconds and start slideshow
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false) // Hide intro after 3 seconds
    }, 3000)

    return () => clearTimeout(introTimer) // Cleanup timer
  }, [])

  // 🔄 Auto-advance slideshow every 5 seconds
  useEffect(() => {
    if (!showIntro) { // Only start slideshow after intro
      const slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % businessSectors.length) // Loop back to 0 after last slide
      }, 5000)

      return () => clearInterval(slideTimer) // Cleanup timer
    }
  }, [showIntro, businessSectors.length])

  // 🍔 Function to toggle menu when hamburger is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen) // If open, close it. If closed, open it.
  }
  return (
    <div className={styles.container}>

      {/* 📖 NAVIGATION BAR - Top menu bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          {/* Logo/Company Name */}
          <div className={styles.logo}>
            <h2>Aline Global Ltd</h2>
          </div>

          {/* 🍔 HAMBURGER BUTTON - Only visible on mobile */}
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {/* Three horizontal lines that make up the hamburger icon */}
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation menu items */}
          {/* 📱 The menu will show/hide on mobile based on menuOpen state */}
          <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuActive : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>

            {/* 📖 BUSINESS DROPDOWN - This menu item has a submenu */}
            <li className={styles.dropdown}>
              <a href="#business">Business</a>

              {/* Dropdown submenu - appears on hover */}
              <ul className={styles.dropdownMenu}>
                <li><a href="#garments">Garments & Apparel</a></li>
                <li><a href="#manufacturing">Manufacturing</a></li>
                <li><a href="#pharmaceutical">Pharmaceutical</a></li>
                <li><a href="#realestate">Real Estate & Development</a></li>
                <li><a href="#software">IT & Software</a></li>
                <li><a href="#media-tv">Media & TV Channel</a></li>
                <li><a href="#aline">Aline Brand & Product Development</a></li>
              </ul>
            </li>

            <li><a href="#media">Media</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>
      </nav>

      {/* 🎬 HERO SECTION - Animated intro + Business slideshow */}
      <section className={styles.hero}>

        {/* 🎭 INTRO ANIMATION - Shows "Aline Global Ltd" for 3 seconds */}
        {showIntro && (
          <div className={styles.introAnimation}>
            <h1 className={styles.introTitle}>Aline Global Ltd</h1>
            <div className={styles.introSubtitle}>Excellence Across Industries</div>
          </div>
        )}

        {/* 🎞️ SLIDESHOW - Shows 7 business sectors */}
        {!showIntro && (
          <div className={styles.slideshow}>
            {businessSectors.map((sector, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ''}`}
                style={{ backgroundImage: `url('${sector.image}')` }}
              >
                {/* 🎨 Dark overlay for text readability */}
                <div className={styles.slideOverlay}></div>

                <div className={styles.slideContent}>
                  <h1 className={styles.slideTitle}>{sector.title}</h1>
                  <p className={styles.slideSubtitle}>{sector.subtitle}</p>
                </div>
              </div>
            ))}

            {/* 📍 Slide indicators (dots) */}
            <div className={styles.slideIndicators}>
              {businessSectors.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 📖 Main content area */}
      <main className={styles.main}>

        {/* 🏢 ABOUT US SECTION */}
        <section className={styles.aboutSection}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <div className={styles.sectionDivider}></div>
          </div>

          {/* About Content */}
          <div className={styles.aboutContent}>
            {/* Main Description */}
            <div className={styles.aboutDescription}>
              <p className={styles.aboutText}>
                With a <strong>diverse global portfolio</strong> spanning eight major industries and a rapidly expanding international footprint, <strong>Aline Global Ltd</strong> stands as one of the world's most dynamic and visionary multinational enterprises.
              </p>
              <p className={styles.aboutText}>
                Our business operations encompass <strong>Garments & Apparel</strong>, <strong>Manufacturing</strong>, <strong>Pharmaceuticals</strong>, <strong>Real Estate</strong>, <strong>Information Technology</strong>, <strong>Media & Communications</strong>, and <strong>International Trade</strong>.
              </p>
              <p className={styles.aboutText}>
                Driven by innovation, integrity, and global collaboration, Aline Global continues to set new benchmarks in excellence and sustainability — building a smarter, more connected future through diversified growth and strategic investments across continents.
              </p>
            </div>

            {/* Industry Cards Grid */}
            <div className={styles.industriesGrid}>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🏭</div>
                <h3 className={styles.industryName}>Garments & Apparel</h3>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>⚙️</div>
                <h3 className={styles.industryName}>Manufacturing</h3>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>💊</div>
                <h3 className={styles.industryName}>Pharmaceutical</h3>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🏢</div>
                <h3 className={styles.industryName}>Real Estate</h3>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>💻</div>
                <h3 className={styles.industryName}>IT & Software</h3>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>📺</div>
                <h3 className={styles.industryName}>Media & TV</h3>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🌐</div>
                <h3 className={styles.industryName}>International Trade</h3>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🎨</div>
                <h3 className={styles.industryName}>Brand Development</h3>
              </div>
            </div>

            {/* Core Values */}
            <div className={styles.coreValues}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💡</div>
                <h4 className={styles.valueTitle}>Innovation</h4>
                <p className={styles.valueText}>Pioneering solutions for tomorrow</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h4 className={styles.valueTitle}>Integrity</h4>
                <p className={styles.valueText}>Building trust through transparency</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🌍</div>
                <h4 className={styles.valueTitle}>Global Collaboration</h4>
                <p className={styles.valueText}>Connecting continents, creating value</p>
              </div>
            </div>
          </div>
        </section>

        {/* 💼 MANAGING DIRECTOR'S MESSAGE SECTION */}
        <section className={styles.mdSection}>
          <div className={styles.mdContainer}>
            {/* MD Message Content */}
            <div className={styles.mdContent}>
              <h2 className={styles.mdTitle}>Managing Director's Message</h2>

              <div className={styles.mdMessage}>
                <p className={styles.mdText}>
                  Over the years, Aline Global Ltd has evolved into a diversified multinational enterprise with a strong presence across multiple sectors and global markets. Our journey has been defined by innovation, integrity, and sustainable growth — transforming challenges into opportunities and ideas into impactful realities.
                </p>
                <p className={styles.mdText}>
                  We take pride in building businesses that are leaders in their respective industries — from manufacturing and technology to healthcare, real estate, media, and international trade. Our vision is clear: to be a dynamic global conglomerate driven by excellence, collaboration, and innovation for a smarter, more sustainable future.
                </p>
                <div className={styles.mdSignature}>
                  <p>— MD, Aline Global Ltd</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>5</div>
                <div className={styles.statLabel}>Companies</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>150</div>
                <div className={styles.statLabel}>Employees</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500</div>
                <div className={styles.statLabel}>Shareholders</div>
              </div>
            </div>
          </div>
        </section>

        {/* 🏢 SUBSIDIARY COMPANIES SECTION */}
        <section className={styles.subsidiarySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Subsidiary Companies</h2>
            <div className={styles.sectionDivider}></div>
          </div>

          {/* Logo Slider - Animates from right to left */}
          <div className={styles.logoSlider}>
            <div className={styles.logoTrack}>
              {/* Placeholder logo boxes - replace with actual logo images */}
              <div className={styles.logoBox}>Company Logo 1</div>
              <div className={styles.logoBox}>Company Logo 2</div>
              <div className={styles.logoBox}>Company Logo 3</div>
              <div className={styles.logoBox}>Company Logo 4</div>
              <div className={styles.logoBox}>Company Logo 5</div>
              <div className={styles.logoBox}>Company Logo 6</div>
              <div className={styles.logoBox}>Company Logo 7</div>
              <div className={styles.logoBox}>Company Logo 8</div>

              {/* Duplicate for seamless loop */}
              <div className={styles.logoBox}>Company Logo 1</div>
              <div className={styles.logoBox}>Company Logo 2</div>
              <div className={styles.logoBox}>Company Logo 3</div>
              <div className={styles.logoBox}>Company Logo 4</div>
              <div className={styles.logoBox}>Company Logo 5</div>
              <div className={styles.logoBox}>Company Logo 6</div>
              <div className={styles.logoBox}>Company Logo 7</div>
              <div className={styles.logoBox}>Company Logo 8</div>
            </div>
          </div>
        </section>

        {/* 👥 LEADERSHIP SECTION - placed under Subsidiary Companies */}
        <LeadershipSection />

      </main>

    </div>
  )
}
