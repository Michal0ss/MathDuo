import React, { useRef, useState } from "react";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./math_books_animations.css";
import book1 from "../../assets/grafika_no_bg.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Banner = () => {
  const bookAreaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Responsywność
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      const books = gsap.utils.toArray(".book-img");
      books.forEach((book) => {
        const area = bookAreaRef.current;
        const moveX = area.offsetWidth - book.offsetWidth;

        gsap.set(book, { x: -20 });

        gsap.to(book, {
          x: moveX > 0 ? moveX : 0,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: area,
            start: "top 90%",
            end: "bottom 10%",
            scrub: isMobile ? 2.5 : 1.5, // płynniej na telefonie
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { dependencies: [isMobile], scope: bookAreaRef }
  );

  return (
    <section>
      <div
        id="info"
        className="container py-1 md:py-24 pb-12 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 space-y-2 md:space-y-0"
        style={{ position: "relative", minHeight: "220px" }}
      >
        {/* Sekcja z animowaną książką */}
        <div
          ref={bookAreaRef}
          className="flex justify-center items-center"
          style={{
            position: "relative",
            minHeight: isMobile ? "170px" : "180px",
            overflow: "hidden",
            willChange: "transform",
          }}
        >
          <img
            className="book-img"
            src={book1}
            alt="Książka matematyczna"
            style={{
              width: isMobile ? "140px" : "350px",
              height: "auto",
              position: "relative", // tylko relative!
              willChange: "transform",
              zIndex: 2,
            }}
          />
        </div>
        {/* Tekst banera */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-8 md:space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Pomagamy zrozumieć matematykę krok po kroku
            </motion.h1>
            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaBookReader className="text-2xl" />
                <p className="text-lg">
                  Korepetycje prywatne lub grupowe z doświadczonymi korepetytorami
                </p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Nauka dopasowana do Twojego tempa</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdOutlineAccessTime className="text-2xl" />
                <p className="text-lg">Dopasowanie terminu pod ucznia</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;