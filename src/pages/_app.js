import React from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="page">
      <div>
        <Header />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
