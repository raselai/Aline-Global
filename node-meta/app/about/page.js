// 📖 ABOUT US PAGE - Detailed company information

'use client' // 🔧 Using client features for interactive elements

import Link from 'next/link'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* 🎯 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Aline Global Ltd</h1>
          <p className={styles.heroSubtitle}>
            Building a Smarter, More Connected Future Through Innovation and Excellence
          </p>
          <div className={styles.heroDivider}></div>
        </div>
      </section>

      {/* 📖 COMPANY OVERVIEW */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>Who We Are</h2>
              <p className={styles.paragraph}>
                <strong>Aline Global Ltd</strong> is a dynamic multinational enterprise with a diverse portfolio spanning eight major industries. From our humble beginnings, we have grown into one of the world's most visionary and innovative conglomerates, operating across continents and transforming industries.
              </p>
              <p className={styles.paragraph}>
                Our business operations encompass <strong>Garments & Apparel</strong>, <strong>Manufacturing</strong>, <strong>Pharmaceuticals</strong>, <strong>Real Estate</strong>, <strong>Information Technology</strong>, <strong>Media & Communications</strong>, <strong>International Trade</strong>, and <strong>Brand Development</strong>.
              </p>
              <p className={styles.paragraph}>
                With a commitment to innovation, integrity, and global collaboration, we continue to set new benchmarks in excellence and sustainability across all our ventures.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>8</div>
                <div className={styles.statLabel}>Industries</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>5</div>
                <div className={styles.statLabel}>Companies</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>150+</div>
                <div className={styles.statLabel}>Employees</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Shareholders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 MISSION & VISION */}
      <section className={styles.missionVisionSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Mission & Vision</h2>
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionBox}>
              <div className={styles.iconBox}>🎯</div>
              <h3 className={styles.boxTitle}>Our Mission</h3>
              <p className={styles.boxText}>
                To deliver exceptional value to our stakeholders by driving innovation, fostering sustainable growth, and maintaining the highest standards of integrity across all our business operations globally.
              </p>
            </div>
            <div className={styles.visionBox}>
              <div className={styles.iconBox}>🌟</div>
              <h3 className={styles.boxTitle}>Our Vision</h3>
              <p className={styles.boxText}>
                To be the world's most respected and innovative multinational conglomerate, recognized for transforming industries, enriching communities, and building a smarter, more connected future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 CORE VALUES */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueText}>
                Pioneering solutions for tomorrow through cutting-edge research, creative thinking, and continuous improvement.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Integrity</h3>
              <p className={styles.valueText}>
                Building trust through transparency, ethical practices, and unwavering commitment to doing what's right.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌍</div>
              <h3 className={styles.valueTitle}>Global Collaboration</h3>
              <p className={styles.valueText}>
                Connecting continents, creating value through partnerships, and fostering meaningful relationships worldwide.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3 className={styles.valueTitle}>Excellence</h3>
              <p className={styles.valueText}>
                Striving for the highest standards in everything we do, delivering quality that exceeds expectations.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌱</div>
              <h3 className={styles.valueTitle}>Sustainability</h3>
              <p className={styles.valueText}>
                Committed to environmental stewardship and creating long-term value for future generations.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>👥</div>
              <h3 className={styles.valueTitle}>People First</h3>
              <p className={styles.valueText}>
                Empowering our team members, investing in their growth, and fostering an inclusive workplace culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✨ WHY CHOOSE US */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Why Choose Aline Global</h2>
          <div className={styles.whyChooseGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>01</div>
              <h3 className={styles.featureTitle}>Diverse Portfolio</h3>
              <p className={styles.featureText}>
                Eight major industries under one umbrella, offering comprehensive solutions and unmatched expertise across sectors.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>02</div>
              <h3 className={styles.featureTitle}>Global Reach</h3>
              <p className={styles.featureText}>
                International presence with operations spanning multiple continents, bringing local expertise with global standards.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>03</div>
              <h3 className={styles.featureTitle}>Innovation Driven</h3>
              <p className={styles.featureText}>
                Constantly investing in R&D and emerging technologies to stay ahead of industry trends and deliver cutting-edge solutions.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>04</div>
              <h3 className={styles.featureTitle}>Proven Track Record</h3>
              <p className={styles.featureText}>
                Years of successful operations, satisfied clients, and consistent growth across all our business verticals.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>05</div>
              <h3 className={styles.featureTitle}>Sustainable Practices</h3>
              <p className={styles.featureText}>
                Committed to environmental responsibility and sustainable business practices that benefit communities and the planet.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>06</div>
              <h3 className={styles.featureTitle}>Exceptional Team</h3>
              <p className={styles.featureText}>
                Industry experts and dedicated professionals working together to deliver excellence in every project and partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏆 OUR JOURNEY */}
      <section className={styles.journeySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Our Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>Foundation</h3>
                <p className={styles.timelineText}>
                  Established with a vision to create a diversified multinational enterprise focused on innovation and excellence.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>Expansion</h3>
                <p className={styles.timelineText}>
                  Expanded operations across multiple industries including garments, manufacturing, pharmaceuticals, and IT.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>Global Growth</h3>
                <p className={styles.timelineText}>
                  Established international presence and partnerships, operating across continents with a growing portfolio.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineYear}>Today</h3>
                <p className={styles.timelineText}>
                  A leading multinational conglomerate with 8 industries, 5 companies, and a commitment to sustainable innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Partner With Us?</h2>
            <p className={styles.ctaText}>
              Join hands with Aline Global Ltd and be part of our journey towards innovation, excellence, and sustainable growth.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/" className={styles.ctaButton}>
                Back to Home
              </Link>
              <Link href="#contact" className={styles.ctaButtonSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
