import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle({ onClickExtra }) {
  const { lang, setLang } = useLanguage();
  const isEN = lang === "en";

  const setEN = () => { setLang("en"); onClickExtra?.(); };
  const setHI = () => { setLang("hi"); onClickExtra?.(); };

  return (
    <>
      <style>{`
        .seg-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          height: var(--control-h, 36px);        /* match navbar buttons */
          padding: 3px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(2px);
          box-shadow: 0 1px 6px rgba(0,0,0,0.15);
        }
        .seg-btn {
          appearance: none;
          border: 0;
          height: calc(var(--control-h, 36px) - 6px); /* inside the pill */
          padding: 0 10px;              /* horizontal only */
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.78rem;
          line-height: 1;
          cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: transform .1s ease, background .2s ease, color .2s ease;
        }
        .seg-btn.inactive { background: transparent; color: #fff; opacity: .95; }
        .seg-btn.inactive:hover { opacity: 1; transform: translateY(-1px); }
        .seg-btn.active { background: #fff; color: #111; box-shadow: 0 3px 10px rgba(0,0,0,.15); }

        @media (max-width: 420px) {
          .seg-btn { padding: 0 9px; font-size: 0.72rem; }
        }
      `}</style>

      <div className="seg-wrap" role="tablist" aria-label="Language">
        <button
          type="button"
          role="tab"
          aria-selected={isEN}
          className={`seg-btn ${isEN ? "active" : "inactive"}`}
          onClick={setEN}
          title="Switch to English"
        >
          EN
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={!isEN}
          className={`seg-btn ${!isEN ? "active" : "inactive"}`}
          onClick={setHI}
          title="हिंदी में बदलें"
        >
          हिंदी
        </button>
      </div>
    </>
  );
}
