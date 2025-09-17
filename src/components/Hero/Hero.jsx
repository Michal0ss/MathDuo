import React, { useState, useEffect } from "react";
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

// Import danych z pliku JSON
import eventsData from '../../data/events.json';

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
const locales = {pl: pl };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }), // tydzień zaczyna się w poniedziałek
  getDay,
  locales,
});

const Hero = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAboutM, setShowAboutM] = useState(false); // Modal o Michale
  const [showAboutC, setShowAboutC] = useState(false); // Modal o Cichym
  const [isMounted, setIsMounted] = useState(false); // Nowy stan do kontroli animacji

  // Ustawienie stanu po zamontowaniu komponentu
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Konwersja danych z JSONa na obiekty Date
  useEffect(() => {
    const formattedEvents = eventsData.events.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    }));
    setEvents(formattedEvents);
  }, []);

  // Blokada scrollowania gdy modal jest otwarty
  useEffect(() => {
    if (showCalendar || showAboutM || showAboutC) {
      // Zapisz aktualną pozycję scrolla
      const scrollY = window.scrollY;
      
      // Zablokuj scrollowanie
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Przywróć scrollowanie po zamknięciu modala
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showCalendar, showAboutM, showAboutC]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setShowAboutM(false);
    setShowAboutC(false);
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
                Umów się na korepetycje
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Prawa strona */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center z-20">
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
              src={HeroJpgM}
              alt="Michał"
              className="w-[250px] h-[250px] object-cover rounded-3xl drop-shadow z-20"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
            >
              <button
                onClick={() => setShowAboutM(true)}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                O mnie
              </button>
            </motion.div>
          </div>
          
          <div className="flex flex-col items-center z-20">
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
              src={HeroJpgC}
              alt="Cichy"
              className="w-[250px] h-[250px] object-cover rounded-3xl drop-shadow z-20"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
            >
              <button
                onClick={() => setShowAboutC(true)}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                O mnie
              </button>
            </motion.div>
          </div>
          
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

      {/* Reszta kodu z modalami pozostaje bez zmian */}
      {/* Modal z kalendarzem */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Rozmazane tło */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowCalendar(false)}
          ></div>

          {/* Kalendarz w okienku */}
          <div className="relative bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-[900px] max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setShowCalendar(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Wybierz dostępny termin
            </h2>
            <div className="w-full h-[600px]">
              <Calendar
                culture="pl"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100%" }}
                views={window.innerWidth < 768 ? ["month", "day", "agenda"] : ["month","week", "day", "agenda"]}
                defaultView={window.innerWidth < 768 ? "agenda" : "week"}
                min = {new Date(2025, 0, 1, 7, 0)} // 1 Wrzesień 2025, 08:00
                step={30}
                messages={{
                  month: "Miesiąc",
                  week: "Tydzień",
                  day: "Dzień",
                  agenda: "Lista",
                  today: "Dziś",
                  previous: "Poprzedni",
                  next: "Następny",
                  noEventsInRange: "Brak dostępnych terminów w tym zakresie",
                }}

                // formaty do kalendarza jesli chodzi o jezyk polski
                formats={{
                  timeGutterFormat: (date) => format(date, "HH:mm", { locale: pl }),
                  eventTimeRangeFormat: ({ start, end }) => 
                    `${format(start, "HH:mm", { locale: pl })} - ${format(end, "HH:mm", { locale: pl })}`,
                  agendaTimeFormat: (date) => format(date, "HH:mm", { locale: pl }),
                  agendaHeaderFormat: ({ start, end }) => 
                    `${format(start, "dd.MM.yyyy", { locale: pl })} - ${format(end, "dd.MM.yyyy", { locale: pl })}`,
                  dayHeaderFormat: (date) => format(date, "EEEE, dd.MM.yyyy", { locale: pl }),
                  dayRangeHeaderFormat: ({ start, end }) => 
                    `${format(start, "dd.MM.yyyy", { locale: pl })} - ${format(end, "dd.MM.yyyy", { locale: pl })}`,
                  monthHeaderFormat: (date) => format(date, "LLLL yyyy", { locale: pl }),
                  weekdayFormat: (date) => format(date, "EEEEEE", { locale: pl }),
                }}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={() => ({
                  style: {
                    backgroundColor: '#4f46e5',
                    borderRadius: '5px',
                    border: 'none',
                    color: 'white',
                  },
                })}
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal z potwierdzeniem dzwonienia */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <p className="text-gray-600 mb-4">
              {format(selectedEvent.start, "dd.MM.yyyy HH:mm")} - {format(selectedEvent.end, "HH:mm")}
            </p>
            
            {selectedEvent.number && (
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Zadzwoń aby zarezerwować termin:</p>
                <button
                  onClick={() => handleCall(selectedEvent.number)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Zadzwoń: {selectedEvent.number}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal o Michale */}
      {showAboutM && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold mb-4 text-center">O Michale</h2>
            
            <div className="space-y-4">
              <img
                src={HeroJpgM}
                alt="Michał"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              
              <p className="text-gray-700">
                Cześć, jestem Michał i studiuję 2 rok informatyki na AGH.<br></br>
                Pasjonuje się matematyką i marketingiem w it.
                Od trzech lat prowadzę korepetycje na poziomie rozszerzonym.
                Specjalizuję się w przygotowaniu uczniów do matury i egzaminu ósmoklasisty.
                Sam, podchodząc do matury rozszerzonej z matematyki i rozpoczynając naukę od zera samemu, uzyskałem bardzo wysokie wyniki.
                Dostrzegając potencjał w samodzielnej nauce w tak krótkim czasie, postanowiłem poszerzać swoją wiedzę w tym zakresie i pomóc również innym.
              </p>
              
              <h3 className="text-lg font-semibold mt-6">Specjalizacje:</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Grupowe zajęcia przygotowujące do matury i e8</li>
                <li>Przygotowanie do matury rozszerzonej</li>
                <li>Przygotowanie do matury podstawowej</li>
                <li>Przygotowanie do egzaminu ósmoklasisty</li>
                <li>Przygotowanie do sprawdzianów i kartkówek</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">Osiągnięcia:</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>100% z matury podstawowej</li>
                <li>84% z matury rozszerzonej</li>
                <li>100% zdawalności matur u swoich uczniów</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Modal o Cichym */}
      {showAboutC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold mb-4 text-center">O Cichym</h2>
            
            <div className="space-y-4">
              <img
                src={HeroJpgC}
                alt="Cichy"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />

              <p className="text-gray-700">
                Jestem kreatywnym miłośnikiem matematyki i kosmosu. Od dziecka brałem udział w wielu konkursach matematycznych, a moja matura poszła bardzo dobrze – podstawa 100%, rozszerzenie w 95. centylu. Lubię wyzwania i zawsze szukam nietypowych, logicznych rozwiązań problemów. Mam ścisły umysł i pasję do nauczania, dzięki czemu potrafię w ciekawy i przystępny sposób tłumaczyć materiał szkolny uczniom. Obecnie studiuję Informatykę na wydziale Matematyki Stosowanej Politechniki Śląskiej.
                <a href="https://dcmath.pl/" target="_blank"> dcmath.pl</a>
              </p>

              <h3 className="text-lg font-semibold mt-6">Specjalizacje:</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Grupowe zajęcia przygotowujące do matury i e8</li>
                <li>Przygotowanie do matury podstawowej</li>
                <li>Przygotowanie do matury rozszerzonej</li> 
                <li>Przygotowanie do egzaminu ósmoklasisty</li>
                <li>Przygotowanie do bieżącego materiału szkolnego</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Metody nauczania:</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
               <li>Tworzenie indywidualnych wyzwań dopasowanych do ucznia</li>
                <li>Łączenie teorii z praktycznymi i ciekawymi przykładami</li>
                <li>Dopasowanie zajęć do tempa i zainteresowań ucznia</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;