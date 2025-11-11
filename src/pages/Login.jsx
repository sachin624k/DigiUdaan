import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../services/auth";
// If you use context, import it like this:
import { useLanguage } from "../context/LanguageContext"; 

const labels = {
  en: {
    title: "Login",
    email: "Email",
    password: "Password",
    placeholderEmail: "you@example.com",
    placeholderPassword: "Password",
    signIn: "Sign In",
    errorDefault: "Invalid credentials.",
  },
  hi: {
    title: "लॉगिन",
    email: "ईमेल",
    password: "पासवर्ड",
    placeholderEmail: "आपका ईमेल",
    placeholderPassword: "पासवर्ड",
    signIn: "लॉगिन करें",
    errorDefault: "गलत जानकारी।",
  }
};

export default function Login({ lang: forcedLang }) {
  // Get lang either from props or global language context:
  const contextLang = (typeof useLanguage === "function") ? useLanguage()?.lang : null;
  const lang = forcedLang || contextLang || "en";
  const L = labels[lang];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert(lang === "hi" ? "लॉगिन सफल!" : "Login Successful!");
    } catch (err) {
      setError(
        (lang === "hi" && err.message === "Firebase: Error (auth/invalid-credential).")
          ? "गलत ईमेल/पासवर्ड।"
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
        .login-page {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-card {
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
        .login-title {
          font-size: 2rem;
          font-weight: 900;
          color: #FF8C2E;
          margin-bottom: 1.12rem;
          letter-spacing: 0.01em;
        }
        .login-form {
          width: 100%;
        }
        .login-row {
          margin-bottom: 1.17rem;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .login-label {
          margin-bottom: .18rem;
          font-weight: 600;
        }
        .login-input {
          width: 100%;
          padding: .93rem 1rem;
          border: 1.3px solid #ffdfbb;
          border-radius: 11px;
          background: #fff7f0;
          font-size: 1.09rem;
          box-shadow: 0 1px 6px rgba(255,140,46,0.06);
          outline: none;
          transition: border .18s;
        }
        .login-input:focus {
          border-color: #FF8C2E;
          background: #fffbe9;
        }
        .login-btn {
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
        .login-btn:hover {
          background: linear-gradient(90deg,#ffb55b 75%,#FF8C2E 110%);
        }
        .login-error {
          color: #b01919;
          background: #fff1f1;
          border-radius: 5px;
          padding: .52rem;
          margin-bottom: .9rem;
          font-size: .99rem;
          text-align: center;
        }
        @media (max-width: 600px) {
          .login-card {
            min-width: 0; max-width: 99vw; padding: 1.2rem 0.3rem;
          }
          .login-title { font-size: 1.4rem; }
        }
      `}</style>
      <div className="login-page">
        <div className="login-card">
          <div className="login-title">{L.title}</div>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-row">
              <label className="login-label" htmlFor="email">{L.email}</label>
              <input
                className="login-input"
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={L.placeholderEmail}
                required
                autoComplete="username"
              />
            </div>
            <div className="login-row">
              <label className="login-label" htmlFor="password">{L.password}</label>
              <input
                className="login-input"
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={L.placeholderPassword}
                required
                autoComplete="current-password"
              />
            </div>
            {error && <div className="login-error">{error}</div>}
            <button className="login-btn" type="submit">{L.signIn}</button>
          </form>
        </div>
      </div>
    </>
  );
}
