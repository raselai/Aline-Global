// 📖 HOMEPAGE - This is the main landing page (what visitors see first)

'use client' // 🔧 This tells Next.js we're using browser features (like clicks, state)

import { useState, useEffect } from 'react' // 🪝 React hooks for state and side effects
import Link from 'next/link' // 🔗 Next.js Link component for navigation
import styles from './page.module.css'
import LeadershipSection from './components/LeadershipSection'

export default function Home() {
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

  return (
    <div className={styles.container}>

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
            {/* Section Title - Above everything */}
            <h2 className={styles.mdTitle}>Managing Director's Message</h2>

            {/* 📐 Flexbox container for message (left) and photo (right) */}
            <div className={styles.mdContentWrapper}>
              {/* Left Side - MD Message Content */}
              <div className={styles.mdContent}>
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

              {/* Right Side - Director's Photo */}
              <div className={styles.mdPhotoContainer}>
                <div className={styles.mdPhotoFrame}>
                  <img
                    src="/Team/Director.jpg"
                    alt="Managing Director"
                    className={styles.mdPhoto}
                  />
                  {/* ✨ Decorative corner accents */}
                  <div className={styles.photoCornerTL}></div>
                  <div className={styles.photoCornerTR}></div>
                  <div className={styles.photoCornerBL}></div>
                  <div className={styles.photoCornerBR}></div>
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

        {/* 🌍 GLOBAL PRESENCE SECTION */}
        <section className={styles.globalPresenceSection}>
          <div className={styles.globalPresenceContainer}>
            {/* Left Side - Text Content */}
            <div className={styles.globalPresenceLeft}>
              <h2 className={styles.globalPresenceTitle}>GLOBAL PRESENCE</h2>

              <div className={styles.globalStats}>
                <div className={styles.globalStatItem}>
                  <div className={styles.globalStatNumber}>35+</div>
                  <div className={styles.globalStatLabel}>Countries</div>
                </div>

                <div className={styles.globalStatItem}>
                  <div className={styles.globalStatNumber}>120+</div>
                  <div className={styles.globalStatLabel}>Offices Worldwide</div>
                </div>
              </div>
            </div>

            {/* Right Side - World Map */}
            <div className={styles.globalPresenceRight}>
              <div className={styles.mapContainer}>
                <img src="/map.png" alt="World Map" className={styles.worldMapImage} />

                {/* 35 Location Pins distributed across the world */}
                {/* North America - 8 pins */}
                <div className={styles.mapPin} style={{left: '15%', top: '35%'}}><div className={styles.pinPulse}></div></div> {/* Vancouver */}
                <div className={styles.mapPin} style={{left: '18%', top: '40%'}}><div className={styles.pinPulse}></div></div> {/* Seattle */}
                <div className={styles.mapPin} style={{left: '21%', top: '38%'}}><div className={styles.pinPulse}></div></div> {/* New York */}
                <div className={styles.mapPin} style={{left: '19%', top: '42%'}}><div className={styles.pinPulse}></div></div> {/* Chicago */}
                <div className={styles.mapPin} style={{left: '17%', top: '46%'}}><div className={styles.pinPulse}></div></div> {/* Los Angeles */}
                <div className={styles.mapPin} style={{left: '21%', top: '48%'}}><div className={styles.pinPulse}></div></div> {/* Houston */}
                <div className={styles.mapPin} style={{left: '23%', top: '50%'}}><div className={styles.pinPulse}></div></div> {/* Miami */}
                <div className={styles.mapPin} style={{left: '20%', top: '54%'}}><div className={styles.pinPulse}></div></div> {/* Mexico City */}

                {/* South America - 4 pins */}
                <div className={styles.mapPin} style={{left: '28%', top: '62%'}}><div className={styles.pinPulse}></div></div> {/* Bogotá */}
                <div className={styles.mapPin} style={{left: '32%', top: '68%'}}><div className={styles.pinPulse}></div></div> {/* São Paulo */}
                <div className={styles.mapPin} style={{left: '33%', top: '66%'}}><div className={styles.pinPulse}></div></div> {/* Rio */}
                <div className={styles.mapPin} style={{left: '30%', top: '75%'}}><div className={styles.pinPulse}></div></div> {/* Buenos Aires */}

                {/* Europe - 10 pins */}
                <div className={styles.mapPin} style={{left: '48%', top: '32%'}}><div className={styles.pinPulse}></div></div> {/* London */}
                <div className={styles.mapPin} style={{left: '49%', top: '34%'}}><div className={styles.pinPulse}></div></div> {/* Paris */}
                <div className={styles.mapPin} style={{left: '50%', top: '33%'}}><div className={styles.pinPulse}></div></div> {/* Amsterdam */}
                <div className={styles.mapPin} style={{left: '51%', top: '32%'}}><div className={styles.pinPulse}></div></div> {/* Berlin */}
                <div className={styles.mapPin} style={{left: '52%', top: '34%'}}><div className={styles.pinPulse}></div></div> {/* Munich */}
                <div className={styles.mapPin} style={{left: '53%', top: '31%'}}><div className={styles.pinPulse}></div></div> {/* Warsaw */}
                <div className={styles.mapPin} style={{left: '47%', top: '38%'}}><div className={styles.pinPulse}></div></div> {/* Madrid */}
                <div className={styles.mapPin} style={{left: '49%', top: '39%'}}><div className={styles.pinPulse}></div></div> {/* Barcelona */}
                <div className={styles.mapPin} style={{left: '51%', top: '38%'}}><div className={styles.pinPulse}></div></div> {/* Rome */}
                <div className={styles.mapPin} style={{left: '58%', top: '28%'}}><div className={styles.pinPulse}></div></div> {/* Moscow */}

                {/* Africa - 5 pins */}
                <div className={styles.mapPin} style={{left: '52%', top: '48%'}}><div className={styles.pinPulse}></div></div> {/* Cairo */}
                <div className={styles.mapPin} style={{left: '48%', top: '55%'}}><div className={styles.pinPulse}></div></div> {/* Lagos */}
                <div className={styles.mapPin} style={{left: '54%', top: '58%'}}><div className={styles.pinPulse}></div></div> {/* Nairobi */}
                <div className={styles.mapPin} style={{left: '51%', top: '74%'}}><div className={styles.pinPulse}></div></div> {/* Johannesburg */}
                <div className={styles.mapPin} style={{left: '50%', top: '78%'}}><div className={styles.pinPulse}></div></div> {/* Cape Town */}

                {/* Middle East - 3 pins */}
                <div className={styles.mapPin} style={{left: '56%', top: '45%'}}><div className={styles.pinPulse}></div></div> {/* Dubai */}
                <div className={styles.mapPin} style={{left: '57%', top: '47%'}}><div className={styles.pinPulse}></div></div> {/* Riyadh */}
                <div className={styles.mapPin} style={{left: '59%', top: '44%'}}><div className={styles.pinPulse}></div></div> {/* Tehran */}

                {/* Asia - 10 pins */}
                <div className={styles.mapPin} style={{left: '62%', top: '38%'}}><div className={styles.pinPulse}></div></div> {/* Delhi */}
                <div className={styles.mapPin} style={{left: '61%', top: '42%'}}><div className={styles.pinPulse}></div></div> {/* Mumbai */}
                <div className={styles.mapPin} style={{left: '65%', top: '44%'}}><div className={styles.pinPulse}></div></div> {/* Bangalore */}
                <div className={styles.mapPin} style={{left: '70%', top: '32%'}}><div className={styles.pinPulse}></div></div> {/* Beijing */}
                <div className={styles.mapPin} style={{left: '72%', top: '36%'}}><div className={styles.pinPulse}></div></div> {/* Shanghai */}
                <div className={styles.mapPin} style={{left: '71%', top: '45%'}}><div className={styles.pinPulse}></div></div> {/* Hong Kong */}
                <div className={styles.mapPin} style={{left: '78%', top: '38%'}}><div className={styles.pinPulse}></div></div> {/* Tokyo */}
                <div className={styles.mapPin} style={{left: '77%', top: '42%'}}><div className={styles.pinPulse}></div></div> {/* Osaka */}
                <div className={styles.mapPin} style={{left: '68%', top: '52%'}}><div className={styles.pinPulse}></div></div> {/* Singapore */}
                <div className={styles.mapPin} style={{left: '75%', top: '48%'}}><div className={styles.pinPulse}></div></div> {/* Manila */}

                {/* Oceania - 3 pins */}
                <div className={styles.mapPin} style={{left: '83%', top: '73%'}}><div className={styles.pinPulse}></div></div> {/* Sydney */}
                <div className={styles.mapPin} style={{left: '82%', top: '75%'}}><div className={styles.pinPulse}></div></div> {/* Melbourne */}
                <div className={styles.mapPin} style={{left: '88%', top: '78%'}}><div className={styles.pinPulse}></div></div> {/* Auckland */}
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
              {/* Subsidiary Company Logos */}
              <div className={styles.logoBox}>
                <img src="/Logos/1-Logo_Garments-&-Apparel.png" alt="Garments & Apparel" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/1-Logo_Manufacture.png" alt="Manufacture" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Aline_Ad_markeintg.png" alt="Ad & Marketing" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Aline-Pharmaceutical-Co.-Ltd..png" alt="Pharmaceutical" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/International_trade.png" alt="International Trade" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Logo_IT.png" alt="IT" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Logo_Real_estate.png" alt="Real Estate" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Media-&-TV-Channel.png" alt="Media & TV Channel" className={styles.logoImage} />
              </div>

              {/* Duplicate for seamless loop */}
              <div className={styles.logoBox}>
                <img src="/Logos/1-Logo_Garments-&-Apparel.png" alt="Garments & Apparel" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/1-Logo_Manufacture.png" alt="Manufacture" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Aline_Ad_markeintg.png" alt="Ad & Marketing" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Aline-Pharmaceutical-Co.-Ltd..png" alt="Pharmaceutical" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/International_trade.png" alt="International Trade" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Logo_IT.png" alt="IT" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Logo_Real_estate.png" alt="Real Estate" className={styles.logoImage} />
              </div>
              <div className={styles.logoBox}>
                <img src="/Logos/Media-&-TV-Channel.png" alt="Media & TV Channel" className={styles.logoImage} />
              </div>
            </div>
          </div>
        </section>

        {/* 👥 LEADERSHIP SECTION - placed under Subsidiary Companies */}
        <LeadershipSection />

      </main>

    </div>
  )
}
