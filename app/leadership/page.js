// 👥 LEADERSHIP PAGE - Executive team showcase
// 📖 Dedicated page highlighting Aline Global Ltd's leadership team

'use client' // 🔧 Using client features for interactive elements

import { useState } from 'react'
import Link from 'next/link'
import styles from './leadership.module.css'

// 👥 LEADERSHIP TEAM DATA (matching LeadershipSection component)
const leaders = [
  {
    name: 'Md. Mamunar Rashid',
    role: 'Managing Director & Chief Executive',
    blurb:
      'Leading Aline Global Ltd with a vision of innovation, integrity, and sustainable growth across multiple sectors and global markets.',
    fullBio:
      'With over two decades of experience in multinational business operations, Md. Mamunar Rashid has been the driving force behind Aline Global Ltd\'s transformation into a diversified conglomerate. His strategic vision encompasses sustainable growth, innovation-driven expansion, and building meaningful partnerships across continents. Under his leadership, the company has successfully ventured into eight major industries, creating value for stakeholders while maintaining the highest standards of corporate governance and social responsibility.',
    image: '/Team/Director.jpg',
    email: 'md@alineglobal.com',
    linkedin: '#',
  },
  {
    name: 'Syed M A Jinnah',
    role: 'Director of Media Wing',
    blurb:
      'Overseeing media operations and communications strategy, building powerful brand narratives and broadcasting excellence.',
    fullBio:
      'Syed M A Jinnah brings extensive experience in media management, brand development, and strategic communications. As Director of Media Wing, he oversees all media operations, ensuring that Aline Global\'s brand message resonates across diverse audiences. His expertise in content creation, broadcasting, and digital media has been instrumental in establishing the company\'s strong media presence and reputation for excellence in communications.',
    image: null,
    email: 'jinnah@alineglobal.com',
    linkedin: '#',
  },
  {
    name: 'Md. Waheduzzaman',
    role: 'Director of Global Collaboration',
    blurb:
      'Driving international partnerships and strategic collaborations to expand Aline Global\'s presence across continents.',
    fullBio:
      'As Director of Global Collaboration, Md. Waheduzzaman spearheads Aline Global\'s international expansion initiatives and strategic partnerships. His deep understanding of global markets, cultural nuances, and international business practices has enabled the company to establish a strong presence across 35+ countries. He is responsible for identifying growth opportunities, fostering cross-border collaborations, and ensuring that the company\'s global operations align with its vision of building a more connected future.',
    image: null,
    email: 'wahed@alineglobal.com',
    linkedin: '#',
  },
  {
    name: 'Md Apu Molla',
    role: 'Director of Finance',
    blurb:
      'Managing financial strategy, governance, and sustainable growth initiatives across all business sectors.',
    fullBio:
      'Md Apu Molla serves as the Director of Finance, overseeing the financial strategy and operations of Aline Global Ltd. With a strong background in corporate finance, risk management, and strategic planning, he ensures the company maintains robust financial health while pursuing ambitious growth objectives. His expertise in financial governance, investment management, and stakeholder value creation has been crucial in supporting the company\'s diversified business model across multiple sectors.',
    image: null,
    email: 'apu@alineglobal.com',
    linkedin: '#',
  },
]

export default function LeadershipPage() {
  // 🎯 State to track which leader's full bio is expanded
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <div className={styles.leadershipPage}>
      {/* 🎯 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Leadership</h1>
          <p className={styles.heroSubtitle}>
            Meet the visionary leaders driving innovation and excellence across Aline Global Ltd
          </p>
          <div className={styles.heroDivider}></div>
        </div>
      </section>

      {/* 📖 INTRODUCTION SECTION */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>Leadership Excellence</h2>
            <p className={styles.introParagraph}>
              At <strong>Aline Global Ltd</strong>, our leadership team brings together decades of combined experience across diverse industries and global markets. United by a shared vision of innovation, integrity, and sustainable growth, our executives guide the company's strategic direction and operational excellence.
            </p>
            <p className={styles.introParagraph}>
              From manufacturing to media, pharmaceuticals to real estate, our leaders drive transformative change while maintaining the highest standards of corporate governance and stakeholder value creation.
            </p>
          </div>
        </div>
      </section>

      {/* 👥 LEADERSHIP TEAM CARDS */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.leadershipGrid}>
            {leaders.map((leader, index) => (
              <article key={index} className={styles.leaderCard}>
                {/* 📸 Photo Section */}
                <div className={styles.photoSection}>
                  <div className={styles.photoCircle}>
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className={styles.photoImage}
                      />
                    ) : (
                      <div className={styles.photoPlaceholder}>
                        <svg viewBox="0 0 24 24" className={styles.placeholderIcon}>
                          <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* 📝 Content Section */}
                <div className={styles.contentSection}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <p className={styles.leaderRole}>{leader.role}</p>

                  {/* 📖 Short Bio */}
                  <p className={styles.shortBio}>{leader.blurb}</p>

                  {/* 📖 Expandable Full Bio */}
                  <div className={`${styles.fullBioContainer} ${expandedIndex === index ? styles.expanded : ''}`}>
                    <p className={styles.fullBio}>{leader.fullBio}</p>
                  </div>

                  {/* 🔘 Read More/Less Button */}
                  <button
                    className={styles.readMoreBtn}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {expandedIndex === index ? '− Read Less' : '+ Read More'}
                  </button>

                  {/* 📧 Contact Info */}
                  <div className={styles.contactInfo}>
                    <a href={`mailto:${leader.email}`} className={styles.contactLink}>
                      <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Email
                    </a>
                    <a href={leader.linkedin} className={styles.contactLink}>
                      <svg viewBox="0 0 24 24" className={styles.contactIcon}>
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 💼 GOVERNANCE SECTION */}
      <section className={styles.governanceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Corporate Governance</h2>
          <div className={styles.governanceGrid}>
            <div className={styles.governanceCard}>
              <div className={styles.governanceIcon}>⚖️</div>
              <h3 className={styles.governanceTitle}>Ethics & Compliance</h3>
              <p className={styles.governanceText}>
                We maintain the highest standards of ethical conduct and regulatory compliance across all operations.
              </p>
            </div>
            <div className={styles.governanceCard}>
              <div className={styles.governanceIcon}>🎯</div>
              <h3 className={styles.governanceTitle}>Strategic Direction</h3>
              <p className={styles.governanceText}>
                Our leadership team provides clear strategic vision and direction for sustainable long-term growth.
              </p>
            </div>
            <div className={styles.governanceCard}>
              <div className={styles.governanceIcon}>🤝</div>
              <h3 className={styles.governanceTitle}>Stakeholder Value</h3>
              <p className={styles.governanceText}>
                Committed to creating value for all stakeholders through transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 CONTACT CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Connect With Our Team</h2>
          <p className={styles.ctaText}>
            Have questions or interested in partnering with Aline Global Ltd?
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
