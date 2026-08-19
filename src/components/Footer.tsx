import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const navLinks = [
    { path: '/who-we-are', label: 'WHO WE ARE' },
    { path: '/work-with-us', label: 'WORK WITH US' },
    { path: '/the-african-story', label: 'THE AFRICAN STORY' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ]

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">OMO DISTRO LIMITED</h3>
          <p className="footer-tagline">PRODUCTS. PEOPLE. STORIES.</p>
        </div>

        <div className="footer-content">
          <div className="footer-nav">
            <h4 className="footer-nav-title">NAVIGATION</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-social-title">FOLLOW US</h4>
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Omo Distro Limited</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer