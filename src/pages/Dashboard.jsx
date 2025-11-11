// src/pages/Dashboard.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19V5M20 19H4M8 17V9M12 17V7M16 17v-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const content = {
  en: {
    titleParts: ["Impact", "Dashboard"],
    intro1: "This dashboard shows real data collected through our Google Form. It helps us understand who our learners are, what skills they have, and how much they improve after our workshops.",
    chartsTitle: "Response Charts",
    formImage: "/assets/imp2.png",
  },
  hi: {
    titleParts: ["इम्पैक्ट", "डैशबोर्ड"],
    intro1: "यह डैशबोर्ड हमारे Google Form से एकत्र वास्तविक डेटा दिखाता है। इससे समझ आता है कि हमारे शिक्षार्थी कौन हैं, उनकी स्किल्स क्या हैं, और वर्कशॉप के बाद कितना सुधार हुआ।",
    formTitle: "अपना उत्तर भरें",
    chartsTitle: "प्रतिक्रिया चार्ट",
    formImage: "/assets/imp2.png",
  },
};

function FormEmbed({ lang, formImage }) {
  return (
    <section className="form-section">
      <h2 className="form-section-title">
        {lang === "hi" ? content.hi.formTitle : "Submit Your Response"}
      </h2>
      <div className="form-card">
        <img
          src={formImage}
          alt="Google Form Banner"
          className="form-img"
        />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdtRXFeYhaE3zUENiFlzNeT-JuTFUxyrG8VIJ4UiYuFwFNu3Q/viewform?embedded=true"
          width="100%"
          height="1400"
          frameBorder="0"
          className="form-iframe"
          title="Digital Literacy Workshop Form"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}

function ChartFrame({ src, title }) {
  if (!src) {
    return (
      <div className="placeholder" style={{minHeight:240,margin:"0.6rem 0 2.3rem",padding:"2.8rem 1rem",background:"rgba(255,255,255,0.69)",borderRadius:12}}>
        <div style={{fontWeight:700,fontSize:"1.17rem",marginBottom:"4px",color:"#FF8C2E"}}>{title}</div>
        <div style={{fontStyle:"italic",color:"#888"}}>Paste your Google chart embed URL here.</div>
      </div>
    );
  }
  return (
    <section className="chart-section">
      <h2 className="chart-title">
        <ChartIcon /> {title}
      </h2>
      <div className="chart-iframe-wrap">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          frameBorder="0"
          style={{ borderRadius: 12, width: "100%", minHeight: 370, background: "#fff" }}
          allowFullScreen
        />
      </div>
    </section>
  );
}


export default function Dashboard() {
  const { lang = "en" } = useLanguage ? useLanguage() : { lang: "en" };
  const L = content[lang];
  const formImage = L.formImage;

  // Chart embed links (title: src)
  const EMBEDS = {
    "Age": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNiuL9tRuk9sXcou562jfLt-zLU7SjBl8gfox6I2xxolctz4H7KmZMvez7KA_atKFpFsVfGmrvYU_X/pubchart?oid=353662657&amp;format=interactive",
    "Gender": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNiuL9tRuk9sXcou562jfLt-zLU7SjBl8gfox6I2xxolctz4H7KmZMvez7KA_atKFpFsVfGmrvYU_X/pubchart?oid=33221754&amp;format=interactive",
    "Education": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNiuL9tRuk9sXcou562jfLt-zLU7SjBl8gfox6I2xxolctz4H7KmZMvez7KA_atKFpFsVfGmrvYU_X/pubchart?oid=1224259140&amp;format=interactive",
    "Languages": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNiuL9tRuk9sXcou562jfLt-zLU7SjBl8gfox6I2xxolctz4H7KmZMvez7KA_atKFpFsVfGmrvYU_X/pubchart?oid=1020869068&amp;format=interactive",
  };

  return (
    <>
      <style>{`
        html, body, #root {
          min-height: 100%;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: url('/assets/imp.png') no-repeat center 90% fixed;
          background-size: cover;
          color: #222;
        }
        .page {
          max-width: 985px;
          margin: 5rem auto 4rem auto;
          background: rgba(255,255,255,0.68);
          border-radius: 18px;
          padding: 2rem 1.3rem 2.4rem;
          box-shadow: 0 5px 32px rgba(120,84,0,0.09);
        }
        header {
          text-align: center;
          margin-bottom: 2.4rem;
          background: rgba(255,255,255,0.38);
          border-radius: 17px;
          padding: 2rem 1rem .8rem;
          box-shadow: 0 2px 12px rgba(255,140,46,0.10);
        }
        header h1 { font-size: 2.7rem; font-weight: 900; }
        header h1 .black { color: #222; }
        header h1 .orange { color: #FF8C2E; }
        header p { font-size: 1.1rem; font-style: italic; margin-top:0.6rem;color:#444; }
        .form-section-title {
          font-size: 1.4rem;
          margin-bottom: .5rem;
          font-weight: 700;
          color: #FF8C2E;
        }
        .form-section { margin-bottom: 2.5rem; }
        .form-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 3px 12px 0 rgba(0,0,0,0.07);
          max-width: 642px;
          margin: 0 auto;
          padding: 0 0 1.5rem 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .form-img {
          display:block;
          width:100%;
          border-radius: 14px 14px 0 0;
          object-fit:cover;
          max-height:250px;
          background:#fff;
        }
        .form-iframe {
          border:none;
          width:100%;
          min-height:600px;
          border-radius: 0 0 14px 14px;
          background:#fff;
          margin:0 auto;
        }
        .chart-section {
          margin-bottom: 2.3rem;
          background: rgba(255,255,255,0.69);
          border-radius: 14px;
          padding: 1.35rem 1.1rem 1.8rem 1.1rem;
          box-shadow: 0 2px 10px #ffe7;
        }
        .chart-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.25rem;
          font-weight: 700;
          color: #FF8C2E;
          margin-bottom: 12px;
        }
        .chart-iframe-wrap {
          width: 100%;
          min-height: 370px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .chart-iframe-wrap iframe {
          width: 99%;
          min-height: 370px;
          border-radius: 12px;
          border: none;
          background: #fff;
        }
        @media (max-width:700px) {
          .form-card { max-width:99vw; }
          .form-img { max-height:36vw; }
          .chart-iframe-wrap iframe { min-height: 270px;}
        }
      `}</style>
      <main className="page">
        <header>
          <h1>
            <span className="black">{L.titleParts[0]}</span>{" "}
            <span className="orange">{L.titleParts[1]}</span>
          </h1>
          <p>{L.intro1}</p>
        </header>
        <FormEmbed lang={lang} formImage={formImage} />
        <section aria-label={L.chartsTitle}>
          {Object.entries(EMBEDS).map(([key, url]) => (
            <ChartFrame key={key} title={key} src={url} />
          ))}
        </section>
      </main>
    </>
  );
}
