import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ✅ Proper LinkedIn icon (brand color + accessible)
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="#0A66C2"
    aria-label="LinkedIn"
    role="img"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.27 2.372 4.27 5.455v6.288zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.556V9h3.558v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

// 🔤 Content (EN + HI) — removed emoji icons from team entries
const content = {
  en: {
    aboutBlack: "About",
    aboutOrange: "DigiUdaan",
    missionBlack: "Our",
    missionOrange: "Mission",
    teamBlack: "Our",
    teamOrange: "Team",
    faqBlack: "Frequently",
    faqOrange: "Asked Questions",
    privacyBlack: "Privacy",
    privacyOrange: "Policy",
    termsBlack: "Terms &",
    termsOrange: "Conditions",

    missionDesc:
      "We aim to spread digital awareness, connect learners with free training opportunities, and provide simple tools that help everyone stay safe and confident online. Our vision is a digitally empowered India where every person has equal access to technology and opportunity.",
    team: [
      { name: "Rashi Rajak", linkedin: "#" },
      { name: "Sachin Kushwaha", linkedin: "https://www.linkedin.com/in/sachin624k/" },
      { name: "Manav", linkedin: "#" },
      { name: "Aditya", linkedin: "#" },
    ],
    faq: [
      {
        q: "What is Digital Literacy?",
        a: "Digital literacy means the ability to use smartphones, computers, and the internet safely and effectively for information, learning, and daily life.",
      },
      {
        q: "Who can join these workshops?",
        a: "Anyone—women, elders, youth, or anyone from a marginalized background seeking to use technology confidently and safely.",
      },
      {
        q: "Are certificates provided?",
        a: "Yes. Complete the main learning or a quiz and get a certificate for your progress.",
      },
      {
        q: "What do I need to join?",
        a: "A simple phone or computer/internet; many sessions are also at community centers with shared devices.",
      },
      {
        q: "Is there any fee?",
        a: "No, these training workshops are 100% free for all learners.",
      },
    ],
    privacy:
      "We only collect name, email, and necessary information for your learning account or progress. Your data is never sold or used for advertising, and is only visible to platform admins.",
    terms:
      "Use this platform with respect. Don’t misuse content, impersonate others, or post offensive material. Rules may change for safety. Indian cyber law applies.",
  },
  hi: {
    aboutBlack: "परिचय",
    aboutOrange: "डिजीउड़ान",
    missionBlack: "हमारा",
    missionOrange: "उद्देश्य",
    teamBlack: "हमारी",
    teamOrange: "टीम",
    faqBlack: "अक्सर पूछे गए",
    faqOrange: "सवाल",
    privacyBlack: "गोपनीयता",
    privacyOrange: "नीति",
    termsBlack: "नियम एवं",
    termsOrange: "शर्तें",

    missionDesc:
      "हम डिजिटल जागरूकता बढ़ाने, मुफ्त ट्रेनिंग जोड़ने और ऐसे टूल देने को समर्पित हैं, जिससे हर कोई सुरक्षित-सशक्त बने। हमारा विज़न: हर किसी को बराबर डिजिटल अवसर मिले।",
    team: [
      { name: "राशी राजक", linkedin: "#" },
      { name: "सचिन कुशवाहा", linkedin: "https://www.linkedin.com/in/sachin624k/" },
      { name: "मानव", linkedin: "#" },
      { name: "आदित्य", linkedin: "#" },
    ],
    faq: [
      {
        q: "डिजिटल साक्षरता क्या है?",
        a: "स्मार्टफोन, कंप्यूटर और इंटरनेट का सुरक्षित व असरदार उपयोग—यही डिजिटल साक्षरता है।",
      },
      {
        q: "वर्कशॉप्स कौन ज्वॉइन कर सकता है?",
        a: "कोई भी महिला, वरिष्ठ, युवा या हाशिए/कमज़ोर वर्ग, जिसे डिजिटल सुरक्षा चाहिए।",
      },
      {
        q: "क्या सर्टिफिकेट मिलेगा?",
        a: "हाँ, मुख्य पाठ्यक्रम या क्विज़ पूरा करने के बाद प्रमाणपत्र मिलेगा।",
      },
      {
        q: "शामिल होने के लिए क्या चाहिए?",
        a: "साधारण फोन/कंप्यूटर या सामुदायिक केंद्र पर साझा डिवाइस चलेगा।",
      },
      {
        q: "कोई फीस है?",
        a: "नहीं—यह प्रशिक्षण सभी के लिए 100% निशुल्क है।",
      },
    ],
    privacy:
      "हम केवल नाम, ईमेल व ज़रूरी जानकारी मांगते हैं; कोई जानकारी विज्ञापन या बिक्री में नहीं जाती, सिर्फ़ एडमिन के पास सुरक्षित रहती है।",
    terms:
      "शालीनता से सीखें-भाग लें। दुरुपयोग, गलत पोस्टिंग, पहचान छिपाना मना है। नियम सुरक्षा हेतु बदल सकते हैं। भारतीय साइबर कानून लागू होगा।",
  },
};

export default function AboutUs() {
  // Keep compatibility with your previous pattern
  const ctx = useLanguage ? useLanguage() : { lang: "en" };
  const lang = ctx?.lang || ctx?.language || "en";
  const L = content[lang];
  const [open, setOpen] = useState(null);

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
        .page-about {
          max-width: 960px;
          margin: 5rem auto 4rem auto;
          background: rgba(255,255,255,0.7);
          border-radius: 20px;
          box-shadow: 0 5px 32px rgba(120,84,0,0.09);
          padding: 2rem 1rem 2.5rem;
        }
        .about-header {
          text-align: center;
          margin-bottom: 2.6rem;
          background: rgba(255,255,255,0.43);
          border-radius: 18px;
          padding: 2rem 1rem .8rem;
          box-shadow: 0 2px 12px rgba(255,140,46,0.12);
        }
        .about-header h1 { font-size: 2.5rem; font-weight: 900; }
        .about-header .black { color: #000; }
        .about-header .orange { color: #FF8C2E;}
        section { margin-bottom: 2.1rem; padding: 1.24rem 1.22rem; border-radius: 14px; background: rgba(255,249,241,0.68); box-shadow: 0 2px 10px #ffe7;}
        .row-head { display:flex; align-items:baseline; gap:9px;}
        .row-head .black { color:#000; font-weight:900; font-size:1.42rem;}
        .row-head .orange { color:#FF8C2E; font-weight:900; font-size:1.44rem;}
        .about-team { display:flex; flex-wrap:wrap; gap:2rem; align-items:center;}
        .about-member { background: #fff6ed; border-radius:12px; font-weight:700; font-size:1.13rem; padding:0.77rem 1.16rem; box-shadow:0 2px 9px #ffd6ae11; display:flex; align-items:center; gap:0.71rem;}
        .about-member-icons a {margin-right:11px; display:inline-block;}
        .about-member-icons a:last-child {margin-right:0;}
        .faq-q { display:block; width:100%; background: #fff4e2; color:#FF8C2E; font-weight:700; font-size:1.13rem; border:0; border-radius:7px; margin-bottom:8px; padding:0.93rem 1.25rem; text-align:left; cursor:pointer; transition:background .13s;}
        .faq-q.open { background:#ffd7ad;}
        .faq-a {background:#fffbe7; margin-bottom:.8rem; border-radius:8px; padding:1rem 1.2rem; font-size:1.07rem;}
        @media (max-width: 768px) {
          .page-about { width:calc(100% - 20px); padding:1.1rem 0.6rem;}
          section {margin-bottom:1.18rem; padding:0.9rem 0.7rem;}
          .row-head .black,.row-head .orange {font-size:1.05rem;}
        }
        @media (max-width:420px) {
          .page-about { width:calc(100% - 12px); padding:12px;}
        }
      `}</style>

      <main className="page-about">
        <div className="about-header">
          <h1>
            <span className="black">{L.aboutBlack}</span>{" "}
            <span className="orange">{L.aboutOrange}</span>
          </h1>
        </div>

        <section>
          <div className="row-head">
            <span className="black">{L.missionBlack}</span>
            <span className="orange">{L.missionOrange}</span>
          </div>
          <div>{L.missionDesc}</div>
        </section>

        <section>
          <div className="row-head">
            <span className="black">{L.teamBlack}</span>
            <span className="orange">{L.teamOrange}</span>
          </div>
          <div className="about-team">
            {L.team.map((m, i) => (
              <div className="about-member" key={i}>
                <span>{m.name}</span>
                <span className="about-member-icons">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${m.name} on LinkedIn`}
                    title="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="row-head">
            <span className="black">{L.faqBlack}</span>
            <span className="orange">{L.faqOrange}</span>
          </div>
          <div>
            {L.faq.map((item, i) => (
              <div key={i}>
                <button
                  className={`faq-q${open === i ? " open" : ""}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {item.q}
                </button>
                {open === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="row-head">
            <span className="black">{L.privacyBlack}</span>
            <span className="orange">{L.privacyOrange}</span>
          </div>
          <div>{L.privacy}</div>
        </section>

        <section>
          <div className="row-head">
            <span className="black">{L.termsBlack}</span>
            <span className="orange">{L.termsOrange}</span>
          </div>
          <div>{L.terms}</div>
        </section>
      </main>
    </>
  );
}
