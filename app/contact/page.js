// 📖 CONTACT PAGE - Get in touch with us

'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './contact.module.css'

export default function ContactPage() {
  // 📝 Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState(null)

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    setFormStatus('success')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })

    // Clear success message after 5 seconds
    setTimeout(() => setFormStatus(null), 5000)
  }

  return (
    <div className={styles.contactPage}>
      {/* 🎯 HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get In Touch</h1>
          <p className={styles.heroSubtitle}>
            We'd Love to Hear From You
          </p>
          <div className={styles.heroDivider}></div>
          <p className={styles.heroDescription}>
            Have a question, proposal, or just want to learn more about Aline Global Ltd?
            Our team is here to help and ready to discuss how we can work together.
          </p>
        </div>
      </section>

      {/* 📞 CONTACT METHODS */}
      <section className={styles.contactMethodsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ways to Reach Us</h2>
          <div className={styles.methodsGrid}>
            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>📧</div>
              <h3 className={styles.methodTitle}>Email Us</h3>
              <p className={styles.methodText}>info@alineglobal.com</p>
              <p className={styles.methodText}>support@alineglobal.com</p>
              <p className={styles.methodSubtext}>Response within 24 hours</p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>📱</div>
              <h3 className={styles.methodTitle}>Call Us</h3>
              <p className={styles.methodText}>+880 1234-567890</p>
              <p className={styles.methodText}>+880 9876-543210</p>
              <p className={styles.methodSubtext}>Mon-Fri, 9AM - 6PM</p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>📍</div>
              <h3 className={styles.methodTitle}>Visit Us</h3>
              <p className={styles.methodText}>Aline Global Ltd</p>
              <p className={styles.methodText}>123 Business Avenue</p>
              <p className={styles.methodText}>Dhaka, Bangladesh</p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>🕐</div>
              <h3 className={styles.methodTitle}>Business Hours</h3>
              <p className={styles.methodText}>Monday - Friday: 9AM - 6PM</p>
              <p className={styles.methodText}>Saturday: 10AM - 4PM</p>
              <p className={styles.methodSubtext}>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📝 CONTACT FORM & INFO */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            {/* Left Side - Contact Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {formStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="+880 1234-567890"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="business">Business Partnership</option>
                    <option value="garments">Garments & Apparel</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="realestate">Real Estate</option>
                    <option value="it">IT & Software</option>
                    <option value="media">Media & TV</option>
                    <option value="trade">International Trade</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Your Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={styles.textarea}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side - Additional Information */}
            <div className={styles.infoContainer}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Why Contact Us?</h3>
                <ul className={styles.infoList}>
                  <li className={styles.infoItem}>
                    <span className={styles.infoIcon}>✓</span>
                    Expert consultation and guidance
                  </li>
                  <li className={styles.infoItem}>
                    <span className={styles.infoIcon}>✓</span>
                    Fast response within 24 hours
                  </li>
                  <li className={styles.infoItem}>
                    <span className={styles.infoIcon}>✓</span>
                    Customized solutions for your needs
                  </li>
                  <li className={styles.infoItem}>
                    <span className={styles.infoIcon}>✓</span>
                    Professional and friendly support
                  </li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Connect With Us</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>📘</span>
                    Facebook
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>📸</span>
                    Instagram
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>🔗</span>
                    LinkedIn
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>🐦</span>
                    Twitter
                  </a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Quick Links</h3>
                <div className={styles.quickLinks}>
                  <Link href="/about" className={styles.quickLink}>About Us</Link>
                  <Link href="/business" className={styles.quickLink}>Our Business</Link>
                  <a href="#careers" className={styles.quickLink}>Careers</a>
                  <a href="#faq" className={styles.quickLink}>FAQ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What industries does Aline Global operate in?</h3>
              <p className={styles.faqAnswer}>
                We operate in eight major industries: Garments & Apparel, Manufacturing, Pharmaceutical,
                Real Estate, IT & Software, Media & TV, International Trade, and Brand Development.
              </p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>How can I partner with Aline Global?</h3>
              <p className={styles.faqAnswer}>
                Please fill out the contact form above selecting "Business Partnership" as the subject,
                or email us directly at info@alineglobal.com with your proposal.
              </p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>Do you offer international shipping?</h3>
              <p className={styles.faqAnswer}>
                Yes, we have extensive international trade operations and can ship to over 40 countries
                worldwide. Contact our trade division for specific details.
              </p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>Are you hiring?</h3>
              <p className={styles.faqAnswer}>
                We're always looking for talented individuals. Please select "Career Opportunities"
                in the contact form or visit our Careers page for current openings.
              </p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What are your office hours?</h3>
              <p className={styles.faqAnswer}>
                Our offices are open Monday to Friday, 9 AM to 6 PM, and Saturday, 10 AM to 4 PM.
                We are closed on Sundays and public holidays.
              </p>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>How quickly will I receive a response?</h3>
              <p className={styles.faqAnswer}>
                We typically respond to all inquiries within 24 hours during business days.
                Urgent matters may receive faster attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ LOCATION SECTION */}
      <section className={styles.locationSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>Our Locations</h2>
          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>🏢</div>
              <h3 className={styles.locationTitle}>Headquarters</h3>
              <p className={styles.locationAddress}>
                Aline Global Ltd<br />
                123 Business Avenue<br />
                Dhaka 1000, Bangladesh
              </p>
              <p className={styles.locationContact}>
                Phone: +880 1234-567890<br />
                Email: hq@alineglobal.com
              </p>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>🏭</div>
              <h3 className={styles.locationTitle}>Manufacturing Plant</h3>
              <p className={styles.locationAddress}>
                Aline Manufacturing<br />
                Industrial Zone, Sector 5<br />
                Gazipur, Bangladesh
              </p>
              <p className={styles.locationContact}>
                Phone: +880 9876-543210<br />
                Email: manufacturing@alineglobal.com
              </p>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationIcon}>🌐</div>
              <h3 className={styles.locationTitle}>International Office</h3>
              <p className={styles.locationAddress}>
                Aline Global International<br />
                456 Trade Center<br />
                Singapore 123456
              </p>
              <p className={styles.locationContact}>
                Phone: +65 1234-5678<br />
                Email: international@alineglobal.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Start a Conversation?</h2>
            <p className={styles.ctaText}>
              Whether you're looking for a business partnership, have questions about our services,
              or just want to say hello – we're all ears!
            </p>
            <a href="#top" className={styles.ctaButton}>
              Back to Top
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
