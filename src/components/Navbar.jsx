import { NavLink, Link, useLocation } from "react-router-dom";
import { auth, db } from "../services/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const navText = {
  en: {
    home: "Home",
    resources: "Resources",
    dashboard: "Dashboard",
    login: "Login",
    register: "Register",
    logout: "Logout",
  },
  hi: {
    home: "होम",
    resources: "संसाधन",
    dashboard: "डैशबोर्ड",
    login: "लॉगिन",
    register: "रजिस्टर",
    logout: "लॉगआउट",
  },
};

function Navbar() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang } = useLanguage();
  const T = navText[lang];

  // Close mobile panel on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Fetch user name
  useEffect(() => {
    let ignore = false;
    async function fetchName() {
      if (!user) { setName(""); return; }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        const n = snap.exists() && snap.data().name ? snap.data().name : "";
        if (!ignore) setName(n);
      } catch { if (!ignore) setName(""); }
    }
    fetchName();
    return () => { ignore = true; };
  }, [user]);

  return (
    <>
      <style>{`
        :root { --brand:#FF8C2E; --white:#fff; --ink:#111; --control-h:36px; }
        * { -webkit-tap-highlight-color: transparent; box-sizing:border-box; }

        .nav {
          position: sticky; top: 0; z-index: 60;
          display: flex; align-items: center; justify-content: space-between;
          width: 100%;
          padding: 10px 22px;
          padding-right: 160px; /* space for desktop language toggle */
          background: var(--brand); color: var(--white);
          min-height: 64px;
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
        }

        .lang-fixed {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          display:flex; align-items:center; z-index: 65;
        }

        .left {
          display:flex; align-items:center; gap:12px; min-width:0; flex:1;
        }

        /* Logo */
        .brand img {
          height: 56px; width: auto; display:block;
          filter: drop-shadow(0 1px 1px rgba(0,0,0,.1));
        }

        /* Hello, Name — desktop/tablet style (pill) */
        .welcome {
          display:flex; align-items:center; gap:10px;
          font-size: 1.02rem; font-weight:800;
          padding: 6px 12px; border-radius: 999px;
          background: rgba(255,255,255,.25);
          border: 1.2px solid rgba(255,255,255,.45);
          color:#fff; white-space: nowrap; overflow:hidden; text-overflow: ellipsis;
          max-width: 46vw;
        }
        .welcome .who {
          background:#fff; color:#000; padding: 4px 10px; border-radius:999px; font-weight:900;
          max-width: 40vw; overflow:hidden; text-overflow:ellipsis;
        }

        .right { display:flex; align-items:center; gap:18px; }
        .link {
          position: relative; font-size: 1.05rem; font-weight: 800; color: var(--white);
          text-decoration: none; padding: 6px 4px; white-space: nowrap;
        }
        .link.active::after {
          content:""; position:absolute; left:0; right:0; bottom:-6px; height: 2px; background:#000; border-radius:2px;
        }

        .button {
          text-decoration: none; border: none; cursor: pointer;
          font-size: 1rem; font-weight: 800; height: var(--control-h);
          padding: 0 12px; display:flex; align-items:center; justify-content:center;
          border-radius: 12px; background:#fff; color:#000;
        }

        .burger {
          display:none; width:46px; height:40px;
          background:rgba(255,255,255,.2);
          border:1.5px solid rgba(255,255,255,.35); border-radius:12px;
          justify-content:center; align-items:center;
        }
        .burger span { width:22px; height:2.3px; background:#fff; position:relative; display:block; }
        .burger span::before, .burger span::after { content:""; position:absolute; left:0; right:0; height:2.3px; background:#fff; }
        .burger span::before { top:-7px; } .burger span::after { top:7px; }

        .panel { display:none; flex-direction:column; gap:16px; padding: 14px 16px 18px; background: var(--brand); width:100%; }

        /* Medium down: reduce sizes a bit */
        @media (max-width: 860px) {
          .nav { padding-right: 18px; }
          .right { display:none; }
          .burger { display:flex; }
          .panel { display:flex; }
          .lang-fixed { display:none; }
          .brand img { height: 48px; }
          .welcome { max-width: 58vw; }
        }

        /* Phones: compact, single-line text (no pill), keep nav shallow */
        @media (max-width: 520px) {
          .nav { min-height: 56px; padding: 8px 14px; }
          .brand img { height: 36px; }
          .left { gap:10px; }
          .welcome {
            background: transparent; border: 0; padding: 0; margin: 0;
            font-size: 1rem; color: #fff;
            max-width: calc(100vw - 140px); /* space for logo + burger */
          }
          .welcome .who { background: transparent; color:#fff; padding: 0; }
        }

        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
      `}</style>

      <nav className="nav" role="navigation">
        <div className="lang-fixed"><LanguageToggle /></div>

        {/* Left: logo + greeting */}
        <div className="left">
          <Link to="/" className="brand" aria-label="Home">
            <img src="/assets/logo.png" alt="Site logo" />
          </Link>

          {user && name && (
            <div className="welcome" title={`Hello, ${name}`} aria-live="polite">
              <span>Hello,</span>
              <span className="who">{name}</span>
            </div>
          )}
        </div>

        {/* Desktop links */}
        <div className="right">
          <NavLink to="/" end className={({isActive}) => `link${isActive ? " active" : ""}`}>{T.home}</NavLink>
          <NavLink to="/resources" className={({isActive}) => `link${isActive ? " active" : ""}`}>{T.resources}</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => `link${isActive ? " active" : ""}`}>{T.dashboard}</NavLink>

          {user ? (
            <button className="button" onClick={() => auth.signOut()}>{T.logout}</button>
          ) : (
            <>
              <Link className="button" to="/login">{T.login}</Link>
              <Link className="button" to="/register">{T.register}</Link>
            </>
          )}
        </div>

        {/* Burger */}
        <button
          type="button"
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="navPanel"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span />
        </button>
      </nav>

      {/* Mobile panel */}
      <div id="navPanel" className="panel" style={{ display: menuOpen ? "flex" : "none" }}>
        <NavLink to="/" end className="link" onClick={() => setMenuOpen(false)}>{T.home}</NavLink>
        <NavLink to="/resources" className="link" onClick={() => setMenuOpen(false)}>{T.resources}</NavLink>
        <NavLink to="/dashboard" className="link" onClick={() => setMenuOpen(false)}>{T.dashboard}</NavLink>

        <LanguageToggle onClickExtra={() => setMenuOpen(false)} />

        {user ? (
          <button className="button" onClick={() => { auth.signOut(); setMenuOpen(false); }}>{T.logout}</button>
        ) : (
          <>
            <Link className="button" to="/login" onClick={() => setMenuOpen(false)}>{T.login}</Link>
            <Link className="button" to="/register" onClick={() => setMenuOpen(false)}>{T.register}</Link>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
