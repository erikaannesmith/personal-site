import React, { useState } from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <div className="page">
      <div>
        <Header resetActiveSection={() => setActiveSection(null)} />
        <div className="content">
          <Component
            {...pageProps}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
