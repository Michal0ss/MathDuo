import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png"; // obraz na desktop
import BgImageMobile from "../../assets/bgmobile2.png"; // DODAJ: obraz na telefon
import { motion } from "framer-motion";

const Subscribe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Sprawdź przy załadowaniu
    checkMobile();

    // Dodaj listener dla zmiany rozmiaru
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${isMobile ? BgImageMobile : BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
  };

  return (
    <section id="team" className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="w-full py-24 md:py-48 relative rounded-3xl shadow-2xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto text-white md:text-black">
            <h1 className="text-3xl md:text-4xl font-bold !leading-snug text-white md:text-black" >
              Już +70 zadowolonych uczniów
            </h1>
            <p>
              Zaufalo nam już wielu mlodych i ambitnych uczniów, dołącz do nich i Ty!
            </p>
            <a
              href=""
              className="primary-btn !mt-8 inline-flex items-center gap-4 group "
            >
              Dolacz teraz
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;