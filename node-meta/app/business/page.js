// 📖 BUSINESS PAGE - Showcase of all business sectors

'use client'

import Link from 'next/link'
import styles from './business.module.css'

export default function BusinessPage() {
  // 📊 Business sectors data
  const businessSectors = [
    {
      id: 'garments',
      icon: '👔',
      title: 'Garments & Apparel',
      tagline: 'Fashion Excellence in Every Stitch',
      description: 'Leading manufacturer and exporter of high-quality garments and apparel. We combine traditional craftsmanship with modern technology to deliver products that meet international standards.',
      features: [
        'Premium quality fabrics and materials',
        'Sustainable manufacturing practices',
        'International export capabilities',
        'Custom design and production',
      ],
      stats: { value: '10M+', label: 'Units Annually' }
    },
    {
      id: 'manufacturing',
      icon: '⚙️',
      title: 'Manufacturing',
      tagline: 'Precision Engineering for Tomorrow',
      description: 'Advanced industrial manufacturing solutions powered by cutting-edge technology. We specialize in producing high-precision components and products for various industries worldwide.',
      features: [
        'State-of-the-art production facilities',
        'ISO certified quality systems',
        'Advanced automation technology',
        'End-to-end manufacturing solutions',
      ],
      stats: { value: '50K+', label: 'Components/Month' }
    },
    {
      id: 'pharmaceutical',
      icon: '💊',
      title: 'Pharmaceutical',
      tagline: 'Healthcare Innovation for Better Lives',
      description: 'Committed to improving global health through innovative pharmaceutical products. Our research-driven approach ensures safe, effective medications that make a real difference.',
      features: [
        'WHO-GMP certified facilities',
        'Research & development center',
        'Quality assured medications',
        'Nationwide distribution network',
      ],
      stats: { value: '100+', label: 'Product Lines' }
    },
    {
      id: 'realestate',
      icon: '🏢',
      title: 'Real Estate & Development',
      tagline: 'Building Communities, Shaping Futures',
      description: 'Creating exceptional residential and commercial spaces that enhance quality of life. From luxury apartments to modern office complexes, we build with vision and excellence.',
      features: [
        'Premium property development',
        'Sustainable building practices',
        'Strategic location selection',
        'Complete property management',
      ],
      stats: { value: '25+', label: 'Projects Completed' }
    },
    {
      id: 'it-software',
      icon: '💻',
      title: 'IT & Software',
      tagline: 'Digital Solutions for Modern Business',
      description: 'Empowering businesses with innovative technology solutions. From custom software development to IT consulting, we help organizations transform digitally and stay competitive.',
      features: [
        'Custom software development',
        'Cloud solutions & infrastructure',
        'Cybersecurity services',
        '24/7 technical support',
      ],
      stats: { value: '500+', label: 'Clients Worldwide' }
    },
    {
      id: 'media',
      icon: '📺',
      title: 'Media & TV Channel',
      tagline: 'Entertainment That Inspires',
      description: 'Broadcasting quality content that entertains, educates, and inspires. Our media ventures deliver compelling programming that reaches millions of viewers across the region.',
      features: [
        'HD broadcast capabilities',
        'Original content production',
        'Multi-platform distribution',
        'Award-winning programming',
      ],
      stats: { value: '5M+', label: 'Daily Viewers' }
    },
    {
      id: 'trade',
      icon: '🌐',
      title: 'International Trade',
      tagline: 'Connecting Markets, Creating Opportunities',
      description: 'Facilitating global commerce through strategic partnerships and efficient logistics. We bridge markets across continents, ensuring seamless international trade operations.',
      features: [
        'Global trading network',
        'Import/export expertise',
        'Customs & compliance handling',
        'Supply chain optimization',
      ],
      stats: { value: '40+', label: 'Countries Served' }
    },
    {
      id: 'brand',
      icon: '🎨',
      title: 'Brand Development',
      tagline: 'Creating Brands That Resonate',
      description: 'Strategic brand building and product development that captures attention and builds loyalty. We transform ideas into powerful brands that stand out in competitive markets.',
      features: [
        'Brand strategy & positioning',
        'Product design & development',
        'Marketing & campaigns',
        'Brand identity creation',
      ],
      stats: { value: '200+', label: 'Brands Launched' }
    }
  ]

  return (
    <div className={styles.businessPage}>
      {/* 🎯 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Business Ventures</h1>
          <p className={styles.heroSubtitle}>
            Eight Dynamic Industries, One Unified Vision of Excellence
          </p>
          <div className={styles.heroDivider}></div>
          <p className={styles.heroDescription}>
            Discover how Aline Global Ltd is transforming industries through innovation,
            quality, and sustainable business practices across the globe.
          </p>
        </div>
      </section>

      {/* 📊 BUSINESS OVERVIEW GRID */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Diverse Portfolio of Excellence</h2>
          <p className={styles.sectionSubtitle}>
            From manufacturing to media, technology to trade - we operate at the forefront of multiple industries
          </p>

          <div className={styles.quickGrid}>
            {businessSectors.map((business, index) => (
              <a
                key={index}
                href={`#${business.id}`}
                className={styles.quickCard}
              >
                <div className={styles.quickIcon}>{business.icon}</div>
                <h3 className={styles.quickTitle}>{business.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 🏢 DETAILED BUSINESS SECTIONS */}
      {businessSectors.map((business, index) => (
        <section
          key={index}
          id={business.id}
          className={index % 2 === 0 ? styles.businessSectionPurple : styles.businessSectionWhite}
        >
          <div className={styles.container}>
            <div className={styles.businessContent}>
              <div className={styles.businessInfo}>
                <div className={styles.businessIcon}>{business.icon}</div>
                <h2 className={styles.businessTitle}>{business.title}</h2>
                <p className={styles.businessTagline}>{business.tagline}</p>
                <p className={styles.businessDescription}>{business.description}</p>

                <div className={styles.featuresList}>
                  <h3 className={styles.featuresTitle}>Key Offerings:</h3>
                  <ul className={styles.features}>
                    {business.features.map((feature, idx) => (
                      <li key={idx} className={styles.feature}>
                        <span className={styles.featureIcon}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.businessStats}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>{business.stats.value}</div>
                  <div className={styles.statLabel}>{business.stats.label}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 🎯 WHY CHOOSE US */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Why Choose Aline Global Businesses</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🏆</div>
              <h3 className={styles.benefitTitle}>Proven Excellence</h3>
              <p className={styles.benefitText}>
                Decades of experience delivering world-class products and services across diverse industries.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌍</div>
              <h3 className={styles.benefitTitle}>Global Reach</h3>
              <p className={styles.benefitText}>
                International presence with operations and partnerships spanning multiple continents.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⚡</div>
              <h3 className={styles.benefitTitle}>Innovation Driven</h3>
              <p className={styles.benefitText}>
                Continuous investment in technology and R&D to stay ahead of industry trends.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>✅</div>
              <h3 className={styles.benefitTitle}>Quality Assured</h3>
              <p className={styles.benefitText}>
                International certifications and rigorous quality control across all business units.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🌱</div>
              <h3 className={styles.benefitTitle}>Sustainable Practices</h3>
              <p className={styles.benefitText}>
                Committed to environmental responsibility and ethical business operations.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🤝</div>
              <h3 className={styles.benefitTitle}>Trusted Partner</h3>
              <p className={styles.benefitText}>
                Building long-term relationships based on reliability, integrity, and mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Let's Build Something Great Together</h2>
            <p className={styles.ctaText}>
              Interested in partnering with us or learning more about our business ventures?
              We're here to explore opportunities and create value together.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#contact" className={styles.ctaButton}>
                Contact Us
              </a>
              <Link href="/" className={styles.ctaButtonSecondary}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
