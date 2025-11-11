import { useState } from "react";
import { auth, db, createUserWithEmailAndPassword } from "../services/auth";
import { doc, setDoc } from "firebase/firestore";
import { useLanguage } from "../context/LanguageContext"; // for language toggle

const labels = {
  en: {
    title: "Create Account",
    name: "Name",
    email: "Email",
    password: "Password",
    placeholderName: "Your Name",
    placeholderEmail: "you@example.com",
    placeholderPassword: "Password",
    register: "Register",
    success: "User registered!",
    errorDefault: "Could not register.",
  },
  hi: {
    title: "नया खाता बनाएँ",
    name: "नाम",
    email: "ईमेल",
    password: "पासवर्ड",
    placeholderName: "आपका नाम",
    placeholderEmail: "आपका ईमेल",
    placeholderPassword: "पासवर्ड",
    register: "रजिस्टर करें",
    success: "रजिस्ट्रेशन सफल!",
    errorDefault: "रजिस्टर नहीं कर सके।",
  }
};

export default function Register({ lang: forcedLang }) {
  // Use context or prop to detect language
  const contextLang = (typeof useLanguage === "function") ? useLanguage()?.lang : null;
  const lang = forcedLang || contextLang || "en";
  const L = labels[lang];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", cred.user.uid), {
        email,
        name,
      });
      alert(L.success);
    } catch (err) {
      setError(
        (lang === "hi" && err.message?.includes("auth/email-already-in-use"))
          ? "यह ईमेल पहले से रजिस्टर है।"
          : (err.message || L.errorDefault)
      );
    }
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
        .register-page {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .register-card {
          background: rgba(255,255,255,0.83);
          border-radius: 22px;
          box-shadow: 0 5px 32px rgba(120,84,0,0.14);
          padding: 2.2rem 2rem 2.2rem 2rem;
          min-width: 340px;
          max-width: 440px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .register-title {
          font-size: 2rem;
          font-weight: 900;
          color: #FF8C2E;
          margin-bottom: 1.12rem;
          letter-spacing: 0.01em;
        }
        .register-form {
          width: 100%;
        }
        .register-row {
          margin-bottom: 1.17rem;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .register-label {
          margin-bottom: .18rem;
          font-weight: 600;
        }
        .register-input {
          width: 100%;
          padding: .93rem 1rem;
          border: 1.3px solid #ffdfbb;
          border-radius: 11px;
          background: #fff7f0;
          font-size: 1.07rem;
          box-shadow: 0 1px 6px rgba(255,140,46,0.06);
          outline: none;
          transition: border .18s;
        }
        .register-input:focus {
          border-color: #FF8C2E;
          background: #fffbe9;
        }
        .register-btn {
          width: 100%;
          padding: 1.07rem 0;
          font-size: 1.18rem;
          font-weight: 700;
          border-radius: 11px;
          border: none;
          background: linear-gradient(90deg,#FF8C2E 80%,#ffdfbb 120%);
          color: #fff;
          box-shadow: 0 2px 6px #ffd59a50;
          cursor: pointer;
          letter-spacing: .01em;
          margin-bottom: .7rem;
        }
        .register-btn:hover {
          background: linear-gradient(90deg,#ffb55b 75%,#FF8C2E 110%);
        }
        .register-error {
          color: #b01919;
          background: #fff1f1;
          border-radius: 5px;
          padding: .52rem;
          margin-bottom: .9rem;
          font-size: .99rem;
          text-align: center;
        }
        @media (max-width: 600px) {
          .register-card {
            min-width: 0; max-width: 99vw; padding: 1.2rem 0.3rem;
          }
          .register-title { font-size: 1.4rem; }
        }
      `}</style>
      <div className="register-page">
        <div className="register-card">
          <div className="register-title">{L.title}</div>
          <form className="register-form" onSubmit={handleRegister}>
            <div className="register-row">
              <label className="register-label" htmlFor="name">{L.name}</label>
              <input
                className="register-input"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={L.placeholderName}
                required
              />
            </div>
            <div className="register-row">
              <label className="register-label" htmlFor="email">{L.email}</label>
              <input
                className="register-input"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={L.placeholderEmail}
                required
                autoComplete="username"
                type="email"
              />
            </div>
            <div className="register-row">
              <label className="register-label" htmlFor="password">{L.password}</label>
              <input
                className="register-input"
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={L.placeholderPassword}
                required
                autoComplete="new-password"
              />
            </div>
            {error && <div className="register-error">{error}</div>}
            <button className="register-btn" type="submit">{L.register}</button>
          </form>
        </div>
      </div>
    </>
  );
}
