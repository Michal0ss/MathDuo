import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroJpgC from "../../assets/cichy.jpg";
import HeroJpgM from "../../assets/michal.jpg";
import { motion } from "framer-motion";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { pl } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Animacja FadeUp
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// Lokalizacja kalendarza PL
const locales = { pl: pl };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // tydzień zaczyna się w poniedziałek
  getDay,
  locales,
});

const Hero = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  // PRZYKŁADOWE TERMINY
  const events = [
    {
      title: "Dostępny termin",
      start: new Date(2025, 8, 18, 16, 0),
      end: new Date(2025, 8, 18, 18, 0),
    },
    {
      title: "Dostępny termin",
      start: new Date(2025, 8, 18, 18, 30),
      end: new Date(2025, 8, 18, 20, 30),
    },
    {
      title: "Dostępny termin",
      start: new Date(2025, 8, 19, 15, 0),
      end: new Date(2025, 8, 19, 16, 30),
    },
  ];

  const handleSelectEvent = (event) => {
    alert(
      `Wybrałeś termin: ${format(event.start, "dd.MM.yyyy HH:mm")} - ${format(
        event.end,
        "HH:mm"
      )}`
    );
  };

  return (
    <section id="home" className="bg-light overflow-hidden relative">
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Lewa strona */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20 pt-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Z nami{" "}
              <span className="text-secondary">Matematyka</span> staje się prosta!
            </motion.h1>

            {/* Przycisk otwierający modal */}
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={() => setShowCalendar(true)}
                className="primary-btn flex items-center gap-2 group"
              >
                zacznij teraz
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Prawa strona */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            src={HeroJpgM}
            alt="Michał"
            className="w-[250px] h-[250px] object-cover rounded-3xl drop-shadow z-20"
          />
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroJpgC}
            alt="Cichy"
            className="w-[250px] h-[250px] object-cover rounded-3xl drop-shadow z-20"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>

      {/* Modal z kalendarzem */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Rozmazane tło */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowCalendar(false)} // zamykanie po kliknięciu w tło
          ></div>

          {/* Kalendarz w okienku */}
          <div className="relative bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-[900px]">
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Wybierz dostępny termin
            </h2>
            <div className="w-full h-[600px]">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100%" }}
                views={["week", "day", "agenda"]}
                defaultView="week"
                step={30}
                messages={{
                  week: "Tydzień",
                  day: "Dzień",
                  agenda: "Lista",
                  today: "Dziś",
                  previous: "Poprzedni",
                  next: "Następny",
                  noEventsInRange: "Brak dostępnych terminów w tym zakresie",
                }}
                onSelectEvent={handleSelectEvent}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
