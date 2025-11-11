// src/pages/Resources.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

/* ───────── Tiny inline icons (inherit currentColor) */
const PdfIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const VideoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M17 9l4-2v10l-4-2" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 10l4 2-4 2v-4z" fill="currentColor"/>
  </svg>
);
const ToolsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7l7 7M14 3a4 4 0 1 0 7 7l-5 5a4 4 0 1 1-7-7l5-5z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.9 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.2 9.4a16 16 0 0 0 6 6l1.9-1a2 2 0 0 1 2.1.1c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const HatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3L2 8l10 5 8-4v6" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 12v4c2 2 8 2 12 0v-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

/* ───────── Content (EN + HI) */
const content = {
  en: {
    titleParts: ["Learning", "Resources"],
    intro:
      "Explore simple, trusted resources to help you build confidence in the digital world. Learn at your own pace using videos, PDFs, and interactive tools.",
    pdfTitle: "PDF Guides",
    pdfItems: [
      { label: "Introduction to Digital Literacy", href: "https://pressbooks.library.torontomu.ca/digcit/chapter/chapter-1/" }, // TODO: /assets/pdf/intro.pdf
      { label: "UPI Safety & Online Payments Guide", href: "#" }, // TODO
      { label: "How to Identify Fake Websites", href: "#" }, // TODO
      { label: "Online Safety Checklist", href: "#" }, // TODO
      { label: "Guide to Using DigiLocker & Government Services", href: "#" }, // TODO
      { label: "(Add links when you upload your PDFs)", href: null },
    ],
    videoTitle: "Video Lessons",
    // Added Hindi India-specific safety videos (UPI + OTP) that play inline
    videos: [
      { title: "📘 Computer Basics", id: "T_8P7brGIRA" },
      { title: "📗 What is Digital Literacy?", id: "EyQeUwqCDWg" },
      { title: "UPI Safety Shield (Hindi) — NPCI", id: "BaePgTuKlH8" },
      { title: "UPI Safety Tips (Hindi) — UPI Chalega", id: "eseJdoW6AwE" },
      { title: "OTP is your digital key (Hindi) — CyberDost", id: "JFEdzy3Htb0" },
      { title: "Beware of OTP Scam (Hindi)", id: "mZv489RDwfk" },
      { title: "UPI Fraud Awareness AV (Hindi) — NPCI", id: "9mBMspGhm3E" },
    ],
    toolsTitle: "Tools & Interactive Features",
    toolsItems: [
      "Digital Safety Score Calculator",
      "Scam Reporting Helper",
      "Audio Mode Lessons",
      "Interactive UPI & Online Safety Tutorials",
      "Certificate Generator",
    ],
    helpTitle: "Important Helplines (India)",
    helpItems: [
      "Cybercrime Helpline: 1930",
      { label: "National Cybercrime Reporting Portal", url: "https://cybercrime.gov.in" },
      "Women Helpline: 1091",
    ],
    freeTitle: "Free Courses & NGO Programs",
    freeItems: [
      "ITEL India — Digital Literacy Essentials",
      "Citizen Digital Foundation — Litt Platform",
      "IACT Education — Free Courses for Girls",
      "Pragatee Foundation — Digital Literacy for Senior Citizens",
      "ECube NGO — NDLM Partner",
      "Masoom Education — Computer Literacy Courses",
      "Trishul NGO — Women’s Digital Training",
    ],
    footerNote: "© " + new Date().getFullYear() + " DigiUdaan • Learn safely, grow confidently.",
  },
  hi: {
    titleParts: ["लर्निंग", "रिसोर्सेज़"],
    intro:
      "डिजिटल दुनिया में आत्मविश्वास बढ़ाने के लिए सरल और भरोसेमंद संसाधन खोजें। वीडियो, PDF और इंटरएक्टिव टूल के साथ अपनी गति से सीखें।",
    pdfTitle: "PDF गाइड्स",
    pdfItems: [
      { label: "डिजिटल साक्षरता का परिचय", href: "#" }, // TODO
      { label: "UPI सेफ़्टी व ऑनलाइन पेमेंट्स गाइड", href: "#" }, // TODO
      { label: "फेक वेबसाइट पहचानने का तरीका", href: "#" }, // TODO
      { label: "ऑनलाइन सेफ़्टी चेकलिस्ट", href: "#" }, // TODO
      { label: "डिजीलॉकर व सरकारी सेवाओं का उपयोग गाइड", href: "#" }, // TODO
      { label: "(PDF अपलोड करने के बाद लिंक जोड़ें)", href: null },
    ],
    videoTitle: "वीडियो लेसन",
    // Pure Hindi playlist: UPI + OTP सुरक्षा
    videos: [
      { title: "UPI Safety Shield — NPCI (हिंदी)", id: "BaePgTuKlH8" },
      { title: "UPI Safety Tips — UPI Chalega (हिंदी)", id: "eseJdoW6AwE" },
      { title: "यूपीआई फ्रॉड अवेयरनेस AV — NPCI (हिंदी)", id: "9mBMspGhm3E" },
      { title: "आपका OTP आपकी डिजिटल चाबी है — CyberDost", id: "JFEdzy3Htb0" },
      { title: "OTP Scam से बचें (हिंदी)", id: "mZv489RDwfk" },
    ],
    toolsTitle: "टूल्स व इंटरएक्टिव फीचर्स",
    toolsItems: [
      "डिजिटल सेफ़्टी स्कोर कैलकुलेटर",
      "स्कैम रिपोर्टिंग हेल्पर",
      "ऑडियो मोड लेसन",
      "इंटरएक्टिव UPI व ऑनलाइन सेफ़्टी ट्यूटोरियल्स",
      "सर्टिफिकेट जनरेटर",
    ],
    helpTitle: "महत्वपूर्ण हेल्पलाइन्स (भारत)",
    helpItems: [
      "साइबरक्राइम हेल्पलाइन: 1930",
      { label: "नेशनल साइबरक्राइम रिपोर्टिंग पोर्टल", url: "https://cybercrime.gov.in" },
      "महिला हेल्पलाइन: 1091",
    ],
    freeTitle: "फ्री कोर्स व NGO प्रोग्राम",
    freeItems: [
      "ITEL India — Digital Literacy Essentials",
      "Citizen Digital Foundation — Litt Platform",
      "IACT Education — लड़कियों के लिए फ्री कोर्स",
      "Pragatee Foundation — वरिष्ठ नागरिकों के लिए डिजिटल साक्षरता",
      "ECube NGO — NDLM पार्टनर",
      "Masoom Education — कंप्यूटर लिटरेसी कोर्स",
      "Trishul NGO — महिलाओं के लिए डिजिटल ट्रेनिंग",
    ],
    footerNote: "© " + new Date().getFullYear() + " डिजीउड़ान • सुरक्षित सीखें, आत्मविश्वास से बढ़ें।",
  },
};

/* ───────── Inline YouTube Embed (privacy mode, inline playback, responsive) */
function YT({ id, title }) {
  const src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
  return (
    <div className="yt-wrap" role="region" aria-label={title}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="yt-caption">{title}</div>
    </div>
  );
}

export default function Resources() {
  const { lang = "en" } = useLanguage ? useLanguage() : { lang: "en" };
  const L = content[lang];

  return (
    <>
      <style>{`
        html, body, #root {
          min-height: 100%;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: url('/assets/imp.png') no-repeat center 90% fixed; /* same as Home.jsx */
          background-size: cover;
          color: #222;
        }
        .page {
          max-width: 960px;
          margin: 5rem auto 4rem auto;
          background: rgba(255,255,255,0.7);
          border-radius: 20px;
          box-shadow: 0 5px 32px rgba(120,84,0,0.09);
          padding: 2rem 1rem 2.5rem;
        }
        header {
          text-align: center;
          margin-bottom: 2.4rem;
          background: rgba(255,255,255,0.43);
          border-radius: 18px;
          padding: 2rem 1rem .8rem;
          box-shadow: 0 2px 12px rgba(255,140,46,0.12);
        }
        header h1 { font-size: 2.7rem; font-weight: 900; }
        header h1 .black { color: #000; }
        header h1 .orange { color: #FF8C2E; }
        header p { font-size: 1.15rem; font-style: italic; }

        section {
          margin-bottom: 2rem;
          padding: 1.2rem 1.3rem;
          border-radius: 14px;
          background: rgba(255,249,241,0.65);
          box-shadow: 0 2px 10px #ffe7;
        }
        section h2 {
          font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;
          display:flex; align-items:center; gap:10px; flex-wrap:wrap;
          word-break: normal; overflow-wrap: normal;
        }
        section h2 .accent { color:#FF8C2E; }
        .chunk { display:inline-block; white-space:nowrap; }

        ul { padding-left: 1.1rem; }
        ul li { margin-bottom: 10px; padding-left: 22px; position: relative;}
        ul li::before { content: '✓'; position: absolute; left: 0; color: #FF8C2E; font-weight: 700; font-size: 19px;}

        a { color: #d35400; text-underline-offset: 2px; }
        a:hover { text-decoration: underline; }

        /* Video grid (small inline players) */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 14px;
        }
        .yt-wrap {
          background: rgba(255,255,255,0.75);
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 2px 10px rgba(255,140,46,0.10);
        }
        .yt-wrap iframe {
          width: 100%;
          aspect-ratio: 16 / 9;
          border: 0;
          border-radius: 10px;
          display: block;
        }
        .yt-caption {
          font-size: 0.95rem;
          margin-top: 8px;
          font-weight: 600;
        }

        /* Footer to match Home.jsx vibe */
        .site-footer {
          margin-top: 28px;
          background: rgba(255,255,255,0.43);
          border-radius: 16px;
          padding: 1rem 1rem;
          box-shadow: 0 2px 12px rgba(255,140,46,0.12);
          text-align: center;
          font-size: 0.95rem;
        }

        /* ======= Responsive ======= */
        @media (max-width: 768px) {
          html, body, #root { background-attachment: scroll; }
          .page {
            width: calc(100% - 20px);
            margin: 4rem auto 2rem auto;
            padding: 1rem 0.9rem 1.2rem;
            border-radius: 16px;
          }
          header { margin-bottom: 1.4rem; padding: 1.2rem 0.8rem 0.6rem; border-radius: 16px; }
          header h1 { font-size: clamp(1.6rem, 6vw, 2.1rem); line-height: 1.2; }
          header p { font-size: clamp(0.95rem, 3.6vw, 1.05rem); }
          section { margin-bottom: 1.2rem; padding: 0.9rem 0.9rem; border-radius: 12px; }
          section h2 { font-size: clamp(1.05rem, 4.8vw, 1.3rem); gap: 8px; }
          ul { padding-left: 1rem; }
          ul li { margin-bottom: 0.6rem; padding-left: 20px; }
          ul li::before { font-size: 16px; top: 2px; }
        }
        @media (max-width: 420px) {
          .page { width: calc(100% - 12px); padding: 12px; border-radius: 14px; }
          header h1 { line-height: 1.15; }
          section h2 { gap: 6px; }
          ul li { margin-bottom: 0.5rem; }
        }
      `}</style>

      <main className="page">
        <header>
          <h1>
            <span className="black chunk">{L.titleParts[0]}</span>
            <span className="orange chunk">{L.titleParts[1]}</span>
          </h1>
          <p>{L.intro}</p>
        </header>

        {/* PDF Guides */}
        <section>
          <h2>
            <PdfIcon />
            <span className="chunk">{L.pdfTitle}</span>
          </h2>
          <ul>
            {L.pdfItems.map((item, i) => (
              <li key={i}>
                {item.href
                  ? <a href={item.href} onClick={e => item.href==="#" && e.preventDefault()}>{item.label}</a>
                  : <em>{item.label}</em>}
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons (inline YouTube, no redirect) */}
        <section>
          <h2>
            <VideoIcon />
            <span className="chunk">{L.videoTitle}</span>
          </h2>
          <div className="video-grid">
            {L.videos.map((v, i) => (
              <YT key={i} id={v.id} title={v.title} />
            ))}
          </div>
        </section>

        {/* Tools & Interactive Features */}
        <section>
          <h2>
            <ToolsIcon />
            <span className="chunk">{L.toolsTitle}</span>
          </h2>
          <ul>
            {L.toolsItems.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </section>

        {/* Important Helplines */}
        <section>
          <h2>
            <PhoneIcon />
            <span className="chunk">{L.helpTitle}</span>
          </h2>
          <ul>
            {L.helpItems.map((h, i) =>
              typeof h === "string" ? (
                <li key={i}>{h}</li>
              ) : (
                <li key={i}>
                  {h.label}: <a href={h.url} target="_blank" rel="noreferrer">{new URL(h.url).host}</a>
                </li>
              )
            )}
          </ul>
        </section>

        {/* Free Courses & NGO Programs */}
        <section>
          <h2>
            <HatIcon />
            <span className="chunk">{L.freeTitle}</span>
          </h2>
          <ul>
            {L.freeItems.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </section>

        {/* Footer (same vibe as Home). If you have a global <Footer/>, replace this with it. */}
        <footer className="site-footer">{L.footerNote}</footer>
      </main>
    </>
  );
}
