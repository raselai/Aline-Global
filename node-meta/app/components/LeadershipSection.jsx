'use client'

import styles from './LeadershipSection.module.css'

// 👥 LEADERSHIP TEAM DATA
// 📝 Real team members of Aline Global Ltd
const leaders = [
  {
    name: 'Md. Mamunar Rashid',
    role: 'Managing Director & Chief Executive',
    blurb:
      'Leading Aline Global Ltd with a vision of innovation, integrity, and sustainable growth across multiple sectors and global markets.',
    image: '/Team/Director.jpg', // 🖼️ Photo available
  },
  {
    name: 'Syed M A Jinnah',
    role: 'Director of Media Wing',
    blurb:
      'Overseeing media operations and communications strategy, building powerful brand narratives and broadcasting excellence.',
    image: null, // 🖼️ Photo to be added later
  },
  {
    name: 'Md. Waheduzzaman',
    role: 'Director of Global Collaboration',
    blurb:
      'Driving international partnerships and strategic collaborations to expand Aline Global\'s presence across continents.',
    image: null, // 🖼️ Photo to be added later
  },
  {
    name: 'Md Apu Molla',
    role: 'Director of Finance',
    blurb:
      'Managing financial strategy, governance, and sustainable growth initiatives across all business sectors.',
    image: null, // 🖼️ Photo to be added later
  },
]

export default function LeadershipSection() {
  return (
    <section className={styles.leadershipSection} id="leadership" aria-labelledby="leadership-title">
      <div className={styles.sectionHeader}>
        <h2 id="leadership-title" className={styles.title}>Leadership</h2>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.grid}>
        {leaders.map((leader, index) => (
          <article key={leader.name + index} className={styles.card}>
            {/* 🖼️ Circular Photo */}
            <div className={styles.photoCircle}>
              {leader.image ? (
                // ✅ Show real photo if available
                <img
                  src={leader.image}
                  alt={leader.name}
                  className={styles.photoImage}
                />
              ) : (
                // 📦 Show placeholder icon if no photo yet
                <div className={styles.photoPlaceholder}>
                  <svg viewBox="0 0 24 24" className={styles.placeholderIcon}>
                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
                  </svg>
                </div>
              )}
            </div>

            {/* 📝 Name and Role */}
            <div className={styles.cardContent}>
              <h3 className={styles.leaderName}>{leader.name}</h3>
              <p className={styles.leaderRole}>{leader.role}</p>
              <p className={styles.leaderCompany}>ALINE GLOBAL LTD</p>
            </div>

            {/* 📖 Description (hidden by default, shows on hover/expand) */}
            <div className={styles.cardDescription}>
              <p className={styles.descriptionText}>{leader.blurb}</p>
              <button type="button" className={styles.knowMoreBtn}>
                <span className={styles.btnIcon}>⊙</span>
                Know More
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


