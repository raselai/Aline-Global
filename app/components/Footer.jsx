'use client'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.brandBlock}>
          <h3 className={styles.brand}>Aline Global Ltd</h3>
          <p className={styles.tagline}>Excellence Across Industries</p>
        </div>

        <address className={styles.address} aria-label="Office address">
          <strong>Office address:</strong> Borak Mehnur, 51/B, Kemal Ataturk Avenue, Banani, Dhaka-1213<br />
          <strong>Tel:</strong> +88 02222285116-23
        </address>

        <nav className={styles.socials} aria-label="Social media">
          <a className={styles.socialLink} href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a className={styles.socialLink} href="#" aria-label="X">
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l5 7 5-7z" />
            </svg>
          </a>
          <a className={styles.socialLink} href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.98 8.98h4.79v2.05h.07c.67-1.25 2.3-2.56 4.73-2.56 5.06 0 6 3.33 6 7.66V24h-5v-6.79c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.61 1.77-2.61 3.6V24h-5V8.98z" />
            </svg>
          </a>
          <a className={styles.socialLink} href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-2 .5-3.8.5-5.8s0-3.8-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </a>
        </nav>
      </div>

      <div className={styles.bottomBar}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Aline Global Ltd
        </span>
      </div>
    </footer>
  )
}


