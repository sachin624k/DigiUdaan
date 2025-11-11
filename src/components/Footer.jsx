import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        /* Glassy footer with stronger contrast */
        .ft {
          margin-top: 48px;
          background: rgba(26, 11, 0, 0.60);
          color: var(--color-50);
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          border-top: 1px solid rgba(255, 140, 46, 0.22);
        }

        .ft-wrap {
          max-width: 1100px; margin: 0 auto; padding: 28px 18px;
          display: grid; gap: 20px;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;  /* desktop: 4 columns */
          grid-auto-rows: minmax(0, auto);
          align-items: start;
        }

        /* Default: DO NOT assign grid-areas on desktop */
        .ft-brand, .ft-quick, .ft-about, .ft-contact { grid-area: auto; }

        .ft h4 {
          margin: 0 0 10px; font-size: 1.05rem; font-weight: 800;
          color: #fff;
          text-shadow: 0 1px 1px rgba(0,0,0,.35);
        }

        .ft p, .ft a, .ft small {
          color: rgba(255, 241, 230, 0.95);
          text-shadow: 0 1px 1px rgba(0,0,0,.25);
        }
        .ft a {
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color .15s, border-color .15s;
        }
        .ft a:hover {
          color: var(--color-300);
          border-color: rgba(255, 165, 92, 0.45);
        }

        .ft .brand { font-size: 1.25rem; font-weight: 900; color: #fff; text-shadow: 0 1px 1px rgba(0,0,0,.35); }
        .ft .accent { color: var(--color-400); }
        .ft ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }

        .ft .socials { display:flex; gap: 10px; margin-top: 10px; }
        .ft .soc {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(255,255,255,0.10);
          display:grid; place-items:center;
          border:1px solid rgba(255,241,230,0.28);
          transition: background .15s, border-color .15s, transform .15s, color .15s;
          color: rgba(255, 241, 230, 0.96);
        }
        .ft .soc svg { width: 18px; height: 18px; fill: currentColor; }
        .ft .soc:hover {
          background: rgba(255,140,46,0.22);
          border-color: rgba(255,140,46,0.45);
          color: #fff;
          transform: translateY(-1px);
        }

        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,.18);
          margin-top: 6px;
          padding: 14px 18px;
          display:flex; align-items:center; gap: 12px;
          justify-content: space-between;
          max-width: 1100px; margin-left:auto; margin-right:auto;
        }

        /* ======= Responsive ======= */

        /* Tablet: 2 columns with areas */
        @media (max-width: 980px) {
          .ft-wrap {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "brand  brand"
              "quick  about"
              "contact contact";
          }
          .ft-brand   { grid-area: brand; }
          .ft-quick   { grid-area: quick; }
          .ft-about   { grid-area: about; }
          .ft-contact { grid-area: contact; }
        }

        /* Phone: keep Quick left, About right, Contact below */
        @media (max-width: 640px) {
          .ft-wrap {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            grid-template-areas:
              "brand  brand"
              "quick  about"
              "contact contact";
          }
          .ft-brand   { grid-area: brand; }
          .ft-quick   { grid-area: quick; }
          .ft-about   { grid-area: about; }
          .ft-contact { grid-area: contact; }
          .ft-bottom { flex-direction: column; gap: 10px; text-align:center; }
        }
      `}</style>

      <footer className="ft" role="contentinfo">
        <div className="ft-wrap">
          {/* Brand / Intro */}
          <div className="ft-brand">
            <div className="brand">
              Digi<span className="accent">Udaan</span>
            </div>
            <p>
              Community-first training for simple, safe, and practical digital skills.
              Workshops, learning modules, and an impact dashboard—built for everyone.
            </p>
            <div className="socials" aria-label="Social links">
              <a className="soc" href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z"/></svg>
              </a>
              <a className="soc" href="https://x.com/sachin624k" aria-label="X" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M3 3h3.7l5 7.2L17 3h4l-7.6 10.5L21 21h-3.7l-5.5-7.9L7 21H3l8-11.2L3 3z"/></svg>
              </a>
              <a className="soc" href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/></svg>
              </a>
              <a className="soc" href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M23 12s0-3.5-.4-5.2c-.2-.8-.8-1.4-1.6-1.6C19.3 4.6 12 4.6 12 4.6s-7.3 0-9 .6c-.8.2-1.4.8-1.6 1.6C1 8.5 1 12 1 12s0 3.5.4 5.2c.2.8.8 1.4 1.6 1.6 1.7.6 9 .6 9 .6s7.3 0 9-.6c.8-.2 1.4-.8 1.6-1.6.4-1.7.4-5.2.4-5.2zM9.8 15.5v-7l6 3.5-6 3.5z"/></svg>
              </a>
              <a className="soc" href="https://linkedin.com/in/sachin624k" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 8h3v13H3zM9 8h3v2h.1C13 9.2 14.2 8 16.3 8 20 8 21 10.5 21 14.1V21h-3v-6.1c0-1.5 0-3.4-2.1-3.4s-2.5 1.6-2.5 3.3V21H10V8z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ft-quick">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/workshops">Workshops</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="ft-about">
            <h4>About Us</h4>
            <ul>
              <li><Link to="/AboutUs">Our Mission</Link></li>
              <li><Link to="/AboutUs">Team</Link></li>
              <li><Link to="/AboutUs">FAQ</Link></li>
              <li><Link to="/AboutUs">Privacy Policy</Link></li>
              <li><Link to="/AboutUs">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="ft-contact">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:info@digiudaan.org">info@digiudaan.org</a></p>
            <p>Phone: <a href="tel:+911234567890">+91 77000 41172</a></p>
            <p>Address: Vrindavan, UP, India</p>
            <div style={{marginTop:10}}>
              <LanguageToggle />
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <small>© {year} DigiUdaan. All rights reserved.</small>
          <small>Built for low-bandwidth learners with love 🧡</small>
        </div>
      </footer>
    </>
  );
}
export default Footer;
