"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SiteHeader from "../components/site-header";
import Footer from "../components/footer";

export default function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const [showSlogan, setShowSlogan] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 400);
    const t2 = setTimeout(() => setShowSlogan(true), 1600);
    const t3 = setTimeout(() => setShowCta(true), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <main className="home-page">
      <SiteHeader homePage />
      <section className="film-hero">
        {/* Logo overlay */}
        <motion.div
          className="eco-brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="eco-logo-wrap"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={showLogo ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/logo1.webp" alt="Sysoul" className="eco-logo-img" />
            {showLogo && (
              <motion.div
                className="eco-laser-line"
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </motion.div>
          <motion.div
            className="eco-slogan-wrap"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={showSlogan ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eco-slogan">让机器人走进千行百业，更好地服务人类</p>
            <motion.div
              className="eco-slogan-line"
              initial={{ scaleX: 0 }}
              animate={showSlogan ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
          <motion.a
            className="eco-cta"
            href="/products"
            initial={{ opacity: 0, y: 20 }}
            animate={showCta ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            进入产品世界 <span>↗</span>
          </motion.a>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
