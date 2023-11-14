"use client";

import React from "react";
import Script from "next/script";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);
  const [cookieDenied, setCookieDenied] = React.useState(false);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});

    // Add Google Analytics script dynamically
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-0309S7KH8C";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-0309S7KH8C");
    };
  };

  const denyCookie = () => {
    setCookieDenied(true);
  };

  if (showConsent || cookieDenied) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
          <span className="text-dark text-base mr-16">
            Deze website gebruikt cookies om de gebruikerservaring te
            verbeteren. Door gebruik te maken van onze website geeft u
            toestemming voor alle cookies in overeenstemming met ons
            cookiebeleid.
          </span>
          <button
            className="border-2 border-black py-2 px-8 rounded text-black"
            onClick={() => denyCookie()}
          >
            Weigeren
          </button>
          <button
            className="bg-black ml-4 py-2 px-8 rounded text-white"
            onClick={() => acceptCookie()}
          >
            Accepteren
          </button>
        </div>
      </div>

      {/* Google Analytics Script */}
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0309S7KH8C');
    `}
      </Script>
    </>
  );
};

export default CookieConsent;
