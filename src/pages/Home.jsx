import React from "react";
import { useLanguage } from "../context/LanguageContext";

// ───────── Icons (inline SVG, tiny + crisp)
const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6a2 2 0 012-2h12v13a3 3 0 01-3 3H6a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l7 3v6c0 4.6-3.2 8.6-7 9.2-3.8-.6-7-4.6-7-9.2V6l7-3z" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const SparkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l1.6 4.8L18 8.5l-4.4 1.6L12 15l-1.6-4.9L6 8.5l4.4-1.7L12 2z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M10 6h11M10 12h11M10 18h11M3 6h2M3 12h2M3 18h2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const FlagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 21V4h10l-1.5 3H20v10h-8l-1.5 3H4z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const content = {
  en: {
    title: ["Digi", "Udaan"],
    subtitle: "Empowering learners with simple, safe, and practical digital skills.",
    whatIsDigitalLiteracyParts: ["What is ", "Digital Literacy?"],
    digitalLiteracyDesc:
      "Digital literacy means knowing how to use digital devices like smartphones, computers, and the internet safely and effectively. It includes searching for information, learning online, protecting privacy, and avoiding scams.",
    whyImportantParts: ["Why ", "Digital Literacy", " is Important?"],
    importantPoints: [
      "Use technology easily in daily life",
      "Understand information online",
      "Stay safe from online scams and fake news",
      "Learn new skills and study online",
      "Get better job opportunities",
      "Do digital payments safely",
      "Access government services online",
      "Become a confident and responsible digital citizen",
    ],
    whatMakesSpecialParts: ["What Makes", "DigiUdaan Special?"],
    specialFeaturesIntro:
      "DigiUdaan goes beyond basic teaching and offers unique tools to help learners stay safe and confident online:",
    specialFeatures: [
      "Digital Safety Score Calculator – Check your online safety level (0–100)",
      "Scam Reporting Helper – Simple steps + emergency helpline numbers",
      "Interactive Tutorials – Learn UPI safety, website checking, spotting fake accounts",
      "Voice + Visual Mode – Listen to lessons for easy understanding",
      "Certificates – Complete a short quiz and download your certificate",
      "Community Stories – Learn from real people who improved their digital skills",
    ],
    specialRemark:
      "These features make DigiUdaan more helpful, practical, and impactful for learners of all ages.",
    workshopsTitleParts: ["Upcoming ", "Workshops"],
    workshops: [
      "Digital Basics for Women – 15 December 2025, Bhopal",
      "Online Safety & Cyber Awareness – 20 December 2025, Gwalior",
    ],
    workshopsNote: "(Visit the Workshops page to see all upcoming events.)",
    whatCanDoTitleParts: ["What You Can","Do on This Website"],
    whatCanDoList: [
      "Join Workshops and learn with trainers",
      "Start Learning through short, easy modules",
      "Check the Dashboard to see real data from students",
      "Explore Resources for videos, PDFs, and safety guides",
    ],
    missionTitleParts: ["Our ", "Mission"],
    missionDesc:
      "We aim to spread digital awareness, connect learners with free training opportunities, and provide simple tools that help everyone stay safe and confident online. Our vision is a digitally empowered India where every person has equal access to technology and opportunity.",
  },
  hi: {
    title: ["डिजी", "उड़ान"],
    subtitle: "सरल, सुरक्षित और व्यावहारिक डिजिटल कौशल के साथ शिक्षार्थियों को सशक्त बनाना।",
    whatIsDigitalLiteracyParts: ["डिजिटल साक्षरता","क्या है?"],
    digitalLiteracyDesc:
      "डिजिटल साक्षरता का मतलब है स्मार्टफोन, कंप्यूटर और इंटरनेट का सुरक्षित और प्रभावी उपयोग करना। इसमें जानकारी खोजने, ऑनलाइन सीखने, गोपनीयता की रक्षा करने और ठगी से बचने की समझ शामिल है।",
    whyImportantParts: ["डिजिटल साक्षरता", "क्यों महत्वपूर्ण है?"],
    importantPoints: [
      "दैनिक जीवन में तकनीक का आसानी से उपयोग करें",
      "ऑनलाइन जानकारी को समझें",
      "ऑनलाइन ठगी और फेक न्यूज़ से सुरक्षित रहें",
      "नई स्किल्स सीखें और ऑनलाइन पढ़ाई करें",
      "बेहतर नौकरी के अवसर पाएं",
      "डिजिटल पेमेंट्स सुरक्षित तरीके से करें",
      "सरकारी सेवाओं तक ऑनलाइन पहुँच बनाएं",
      "आत्मविश्वासी और जिम्मेदार डिजिटल नागरिक बनें",
    ],
    whatMakesSpecialParts: ["डिजीउड़ान", "की खासियत"],
    specialFeaturesIntro:
      "डिजीउड़ान बुनियादी पढ़ाई से आगे बढ़कर ऐसे अनोखे टूल देता है जो सीखने वालों को ऑनलाइन सुरक्षित और आत्मविश्वासी बनने में मदद करते हैं:",
    specialFeatures: [
      "डिजिटल सेफ़्टी स्कोर कैलकुलेटर – अपनी ऑनलाइन सुरक्षा (0–100) जाँचें",
      "स्कैम रिपोर्टिंग हेल्पर – सरल स्टेप्स + आपातकालीन हेल्पलाइन नंबर",
      "इंटरएक्टिव ट्यूटोरियल्स – UPI सेफ़्टी, वेबसाइट जाँच, फेक अकाउंट पहचान",
      "वॉइस + विज़ुअल मोड – सुनकर और देखकर आसानी से सीखें",
      "प्रमाणपत्र – छोटा क्विज़ पूरा करें और अपना सर्टिफिकेट डाउनलोड करें",
      "कम्युनिटी स्टोरीज़ – उन लोगों से सीखें जिन्होंने अपनी डिजिटल स्किल्स बेहतर कीं",
    ],
    specialRemark:
      "ये सुविधाएँ डिजीउड़ान को हर उम्र के शिक्षार्थियों के लिए और भी उपयोगी, व्यावहारिक और प्रभावशाली बनाती हैं।",
    workshopsTitleParts: ["आगामी ", "कार्यशालाएँ"],
    workshops: [
      "महिलाओं के लिए डिजिटल बेसिक्स – 15 दिसंबर 2025, भोपाल",
      "ऑनलाइन सेफ़्टी और साइबर अवेयरनेस – 20 दिसंबर 2025, ग्वालियर",
    ],
    workshopsNote: "(सभी कार्यक्रम देखने के लिए वर्कशॉप्स पेज पर जाएँ।)",
    whatCanDoTitleParts: ["आप इस वेबसाइट पर ", "क्या कर सकते हैं"],
    whatCanDoList: [
      "वर्कशॉप्स में जुड़ें और प्रशिक्षकों से सीखें",
      "छोटे और आसान मॉड्यूल्स से सीखना शुरू करें",
      "डैशबोर्ड पर छात्रों का वास्तविक डेटा देखें",
      "वीडियो, पीडीएफ और सेफ़्टी गाइड जैसे संसाधन खोजें",
    ],
    missionTitleParts: ["हमारा ", "उद्देश्य"],
    missionDesc:
      "हम डिजिटल जागरूकता फैलाना, सीखने वालों को मुफ्त प्रशिक्षण अवसरों से जोड़ना और ऐसे सरल टूल देना चाहते हैं जो सभी को सुरक्षित और आत्मविश्वासी ऑनलाइन रहने में मदद करें। हमारा विज़न है—एक डिजिटल रूप से सशक्त भारत जहाँ हर व्यक्ति को तकनीक और अवसरों तक समान पहुँच हो।",
  },
};

export default function Home() {
  const { lang = "en" } = useLanguage ? useLanguage() : { lang: "en" };
  const L = content[lang];

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
          max-width: 960px;
          margin: 5rem auto 4rem auto;
          background: rgba(255,255,255,0.7);
          border-radius: 20px;
          box-shadow: 0 5px 32px rgba(120,84,0,0.09);
          padding: 2rem 1rem 2.5rem;
        }
        header {
          text-align: center;
          margin-bottom: 2.7rem;
          background: rgba(255,255,255,0.43);
          border-radius: 18px;
          padding: 2rem 1rem .8rem;
          box-shadow: 0 2px 12px rgba(255,140,46,0.12);
        }
        header h1 { font-size: 2.7rem; font-weight: 900; }
        header h1 .black { color: #000; }
        header h1 .orange { color: #FF8C2E; }
        header p { font-size: 1.23rem; font-style: italic; }

        section {
          margin-bottom: 2.2rem;
          padding: 1.3rem 1.4rem;
          border-radius: 14px;
          background: rgba(255,249,241,0.65);
          box-shadow: 0 2px 10px #ffe7;
        }
        section h2 {
          font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;
          display:flex; align-items:center; gap:10px; flex-wrap:wrap;
          /* prevent weird word breaks in headings */
          word-break: normal; overflow-wrap: normal;
        }
        section h2 .accent { color:#FF8C2E; }

        /* chunks keep words together */
        .chunk { display:inline-block; white-space:nowrap; }

        ul { padding-left: 1.1rem; }
        ul li { margin-bottom: 10px; padding-left: 22px; position: relative;}
        ul li::before { content: '✓'; position: absolute; left: 0; color: #FF8C2E; font-weight: 700; font-size: 19px;}

        /* Allow soft-wrapping for long paragraph/list content only */
        p, li { overflow-wrap: anywhere; hyphens: auto; }

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
            <span className="black chunk">{L.title[0]}</span>
            <span className="orange chunk">{L.title[1]}</span>
          </h1>
          <p>{L.subtitle}</p>
        </header>

        <section>
          <h2>
            <BookIcon />
            <span className="chunk">{L.whatIsDigitalLiteracyParts[0]}</span>
            {L.whatIsDigitalLiteracyParts[1] && (
              <span className="accent chunk">{L.whatIsDigitalLiteracyParts[1]}</span>
            )}
          </h2>
          <p>{L.digitalLiteracyDesc}</p>
        </section>

        <section>
          <h2>
            <ShieldIcon />
            <span className="chunk">{L.whyImportantParts[0]}</span>
            {L.whyImportantParts[1] && <span className="accent chunk">{L.whyImportantParts[1]}</span>}
            {L.whyImportantParts[2] && <span className="chunk">{L.whyImportantParts[2]}</span>}
          </h2>
          <ul>
            {L.importantPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>
            <SparkIcon />
            <span className="chunk">{L.whatMakesSpecialParts[0]}</span>
            <span className="accent chunk">{L.whatMakesSpecialParts[1]}</span>
          </h2>
          <p>{L.specialFeaturesIntro}</p>
          <ul>
            {L.specialFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p><strong>{L.specialRemark}</strong></p>
        </section>

        <section>
          <h2>
            <CalendarIcon />
            <span className="chunk">{L.workshopsTitleParts[0]}</span>
            <span className="accent chunk">{L.workshopsTitleParts[1]}</span>
          </h2>
          <ul>
            {L.workshops.map((ws, i) => (
              <li key={i}>{ws}</li>
            ))}
          </ul>
          <p><em>{L.workshopsNote}</em></p>
        </section>

        <section>
          <h2>
            <ListIcon />
            <span className="chunk">{L.whatCanDoTitleParts[0]}</span>
            <span className="accent chunk">{L.whatCanDoTitleParts[1]}</span>
          </h2>
          <ul>
            {L.whatCanDoList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>
            <FlagIcon />
            <span className="chunk">{L.missionTitleParts[0]}</span>
            <span className="accent chunk">{L.missionTitleParts[1]}</span>
          </h2>
          <p>{L.missionDesc}</p>
        </section>
      </main>
    </>
  );
}
