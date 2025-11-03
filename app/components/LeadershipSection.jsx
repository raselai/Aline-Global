'use client'

import styles from './LeadershipSection.module.css'

const leaders = [
  {
    name: 'Dr Sanjiv Goenka',
    role: 'Chairman',
    blurb:
      "Dr. Sanjiv Goenka is the Chairman of RP-Sanjiv Goenka Group. He has been ranked among India's most powerful business leaders.",
  },
  {
    name: 'Shashwat Goenka',
    role: 'Vice Chairman',
    blurb:
      "Mr. Shashwat Goenka is the Vice Chairman of the RP-Sanjiv Goenka Group and serves on multiple boards across the group.",
  },
  {
    name: 'Rajarshi Banerjee',
    role: 'Group Chief Financial Officer',
    blurb:
      'Rajarshi leads group finance and strategy, ensuring robust governance and sustainable growth across businesses.',
  },
  {
    name: 'Prateek Aggarwal',
    role: 'President - Value Creation',
    blurb:
      'Prateek drives value creation initiatives and high-impact programs across the portfolio.',
  },
  {
    name: 'Dilip Pattanayak',
    role: 'President - Group HR',
    blurb:
      'Dilip oversees people strategy, talent development and organizational excellence across the group.',
  },
  {
    name: 'Abhishek Malhotra',
    role: 'President - Strategy',
    blurb:
      'Abhishek focuses on group strategy and business transformation to unlock long-term growth.',
  },
]

export default function LeadershipSection() {
  return (
    <section className={styles.leadershipSection} aria-labelledby="leadership-title">
      <div className={styles.sectionHeader}>
        <h2 id="leadership-title" className={styles.title}>Leadership</h2>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.grid}>
        {leaders.map((leader, index) => (
          <article key={leader.name + index} className={styles.card}>
            <div className={styles.avatar} aria-hidden="true">
              {/* Person icon placeholder */}
              <svg viewBox="0 0 24 24" className={styles.avatarIcon}>
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
              </svg>
            </div>

            <header className={styles.cardHeader}>
              <h3 className={styles.name}>{leader.name}</h3>
              <span className={styles.role}>{leader.role}</span>
            </header>

            <p className={styles.blurb}>{leader.blurb}</p>

            <div className={styles.cardFooter}>
              <button type="button" className={styles.cta} aria-label={`Know more about ${leader.name}`}>
                <span className={styles.ctaIcon}>◉</span>
                Know More
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.bottomCtaWrap}>
        <button type="button" className={styles.bottomCta}>Know More</button>
      </div>
    </section>
  )
}


