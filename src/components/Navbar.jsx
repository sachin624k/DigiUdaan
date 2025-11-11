import { NavLink, Link, useLocation } from "react-router-dom";
import { auth, db } from "../services/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState, useMemo } from "react";
import { doc, getDoc } from "firebase/firestore";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const navText = {
  en: { home: "Home", workshops: "Workshops", resources: "Resources", dashboard: "Dashboard", welcome: "Welcome", login: "Login", register: "Register", logout: "Logout" },
  hi: { home: "होम", workshops: "वर्कशॉप्स", resources: "संसाधन", dashboard: "डैशबोर्ड", welcome: "स्वागत है", login: "लॉगिन", register: "रजिस्टर", logout: "लॉगआउट" },
};

// ✨ Friendly, time-based greeting
function getGreeting(lang = "en") {
  const h = new Date().getHours();
  const en =
    h < 4 ? "Good night" :
    h < 12 ? "Good morning" :
    h < 17 ? "Good afternoon" :
    h < 21 ? "Good evening" : "Good night";
  const hi =
    h < 4 ? "शुभ रात्रि" :
    h < 12 ? "सुप्रभात" :
    h < 17 ? "नमस्कार" :
    h < 21 ? "शुभ संध्या" : "शुभ रात्रि";
  return lang === "hi" ? hi : en;
}

function Navbar() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang } = useLanguage();
  const T = navText[lang];

  // Close mobile panel on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Fetch display name
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

  const greeting = useMemo(() => getGreeting(lang), [lang]);

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
          padding-right: 160px; /* reserve space for fixed toggle on desktop */
          background: var(--brand); color: var(--white);
          min-height: 60px;
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
        }

        /* Language toggle fixed at far right (desktop) */
        .lang-fixed {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          display:flex; align-items:center; z-index: 65;
        }
        .lang-fixed > * { height: var(--control-h); }

        .left { display:flex; align-items:center; gap:10px; min-width:0; }
        .avatar {
          width: 40px; height: 40px; display:flex; align-items:center; justify-content:center;
          border-radius: 50%;
          background: radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,.35), rgba(255,255,255,.15) 60%, rgba(255,255,255,.05));
          border: 1.5px solid rgba(255,255,255,.45);
          flex: 0 0 auto;
        }
        .avatar svg { width: 20px; height: 20px; color: #fff; }

        /* ===== Pretty welcome pill ===== */
        .welcome {
          display:flex; align-items:center; gap:10px;
          font-size: 1.02rem; font-weight:800;
          padding: 7px 10px; border-radius: 999px;
          background: linear-gradient(135deg, rgba(255,255,255,.28), rgba(255,255,255,.18));
          border: 1.2px solid rgba(255,255,255,.45);
          box-shadow: 0 6px 18px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.35);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          white-space: nowrap; overflow:hidden; text-overflow: ellipsis;
          max-width: 46vw; color: #fff;
        }
        .welcome .hand { display:inline-block; transform-origin: 70% 70%; }
        .welcome:hover .hand { animation: wave 0.9s ease-in-out 1; }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          30% { transform: rotate(18deg); }
          60% { transform: rotate(-8deg); }
          100% { transform: rotate(0deg); }
        }
        .welcome .greet { opacity:.95; letter-spacing:.2px; }
        .welcome .who {
          background: var(--white); color: var(--ink);
          padding: 4px 10px; border-radius: 999px;
          font-weight: 900; letter-spacing:.25px;
          max-width: 40vw;
        }

        .right { display:flex; align-items:center; gap:18px; }
        .link {
          position: relative; font-size: 1.05rem; font-weight: 800; color: var(--white);
          text-decoration: none; padding: 6px 4px; line-height: 1.25;
          transition: opacity .15s, transform .1s, color .15s;
          white-space: nowrap;
        }
        .link:hover { opacity: .92; }
        .link:active { transform: translateY(1px); }
        .link:focus-visible { outline: 3px solid rgba(255,255,255,.7); outline-offset: 3px; border-radius: 6px; }
        .link.active::after {
          content:""; position:absolute; left:0; right:0; bottom:-6px; height: 2.2px; background:#000; border-radius:2px;
        }

        .button {
          text-decoration: none; border: none; cursor: pointer;
          font-size: 1rem; font-weight: 800;
          height: var(--control-h);
          padding: 0 12px;
          display:inline-flex; align-items:center; justify-content:center;
          border-radius: 12px; background:#fff; color:var(--ink);
          transition:.15s; box-shadow: 0 3px 10px rgba(0,0,0,.12);
          white-space: nowrap;
        }
        .button:hover { opacity:.93; background:#ffe8d6; }
        .button:active { transform: scale(.97); }

        .burger {
          display:none; width:46px; height:40px;
          background:rgba(255,255,255,.2);
          border:1.5px solid rgba(255,255,255,.35); border-radius:12px;
          justify-content:center; align-items:center;
          z-index:66;
        }
        .burger span { width:22px; height:2.3px; background:#fff; position:relative; display:block; }
        .burger span::before, .burger span::after {
          content:""; position:absolute; left:0; right:0; height:2.3px; background:#fff;
        }
        .burger span::before { top:-7px; } .burger span::after { top:7px; }

        .panel {
          display:none; flex-direction:column; gap:16px;
          padding: 14px 16px 18px; background: var(--brand);
          border-top: 1px solid rgba(255,255,255,.22);
          width:100%;
        }
        .panel .link, .panel .button { font-size: 1.05rem; }

        /* ======= Responsive ======= */
        @media (max-width: 1020px) {
          .nav { padding-right: 120px; }
          .link { font-size: 1rem; }
          .button { font-size: .98rem; }
          .welcome { max-width: 42vw; }
        }
        @media (max-width: 860px) {
          .nav { padding-right: 18px; }
          .right { display:none; }
          .burger { display:flex; }
          .panel { display:flex; }
          .lang-fixed { display:none; }
          .welcome { max-width: 58vw; }
        }
        @media (max-width: 520px) {
          .welcome { display:none; } /* save space on tiny phones */
          .avatar { width:36px; height:36px; }
        }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
      `}</style>

      <nav className="nav" role="navigation">
        {/* fixed toggle at far right (desktop) */}
        <div className="lang-fixed"><LanguageToggle /></div>

        {/* left */}
        <div className="left">
          <span className="avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.33 0-8 2.17-8 5v1h16v-1c0-2.83-3.67-5-8-5Z"/>
            </svg>
          </span>

          {user && name && (
            <div
              className="welcome"
              title={`${greeting}, ${name}`}
              aria-live="polite"
            >
              <span className="hand" aria-hidden="true">👋</span>
              <span className="greet">{greeting},</span>
              <span className="who">{name}</span>
            </div>
          )}
        </div>

        {/* right (desktop links + auth) */}
        <div className="right">
          <NavLink to="/" end className={({isActive}) => `link${isActive ? " active" : ""}`}>{T.home}</NavLink>
          {/* Workshops link removed here */}
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

        {/* burger */}
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

      {/* mobile panel */}
      <div
        id="navPanel"
        className="panel"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <NavLink to="/" end className={({isActive}) => `link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>{T.home}</NavLink>
        {/* Workshops link removed here */}
        <NavLink to="/resources" className={({isActive}) => `link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>{T.resources}</NavLink>
        <NavLink to="/dashboard" className={({isActive}) => `link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>{T.dashboard}</NavLink>

        {/* toggle inside mobile panel; closes menu after switching */}
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
