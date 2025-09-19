import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import eventsData from "../../data/events.json"; // <-- dynamiczne dane JSON

const plans = [
  {
    id: "indywidualne",
    title: "Zajęcia indywidualne",
    oldPrice: "80 zł",
    price: "70 zł / 60 min",
    features: [
      "Indywidualne podejście do ucznia",
      "Przygotowanie do matury",
      "Możliwość zajęć online",
    ],
    color: "bg-primary",
  },
  {
    id: "para",
    title: "Zajęcia w parze",
    oldPrice: "60 zł",
    price: "50 zł / osoba / 60 min",
    features: [
      "Wspólna nauka w duecie",
      "Dopasowane materiały",
      "Idealne dla znajomych",
    ],
    color: "bg-secondary",
  },
  {
    id: "grupa",
    title: "Zajęcia grupowe",
    oldPrice: "50 zł",
    price: "40 zł / osoba / 60 min",
    features: [
      "Mała grupa do 5 osób",
      "Interaktywne ćwiczenia",
      "Przygotowanie do sprawdzianów",
    ],
    color: "bg-green-500",
  },
];

const Price = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  // 🔹 Blokada scrolla, gdy modal jest otwarty
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // blokujemy scroll
    } else {
      document.body.style.overflow = ""; // przywracamy normalny scroll
    }

    return () => {
      document.body.style.overflow = ""; // cleanup gdy komponent się odmontuje
    };
  }, [showModal]);

  // Obsługa kliknięcia przycisku
  const handleClick = (planId, planTitle) => {
    const filtered = eventsData.events
      .filter((event) => event.id === planId)
      .sort((a, b) => new Date(a.start) - new Date(b.start));

    setSelectedEvents(filtered);
    setModalTitle(planTitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvents([]);
    setModalTitle("");
  };

  return (
    <section id="pricing" className="bg-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800"
          >
            Cennik naszych zajęć
          </motion.h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Wybierz najlepszą opcję dla siebie – prowadzimy zajęcia
            indywidualne, w parach oraz w małych grupach.
          </p>
        </div>

        {/* Karty cennika */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {plan.title}
                </h3>
                <div className="mb-4">
                  <span className="text-gray-400 text-lg line-through mr-2">
                    {plan.oldPrice}
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`${plan.color} text-white font-semibold py-3 mt-6 rounded-xl shadow hover:opacity-90 transition`}
                onClick={() => handleClick(plan.id, plan.title)}
              >
                Umów zajęcia
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {modalTitle}
            </h2>

            {selectedEvents.length > 0 ? (
              <div className="max-h-[400px] overflow-y-auto pr-2">
                <ul className="space-y-4">
                  {selectedEvents.map((event, idx) => (
                    <li
                      key={idx}
                      className="border rounded-lg p-4 shadow-sm bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="font-semibold text-lg">{event.title}</div>
                      <div className="text-gray-700 mt-1 text-sm">
                        <strong>Start:</strong>{" "}
                        {new Date(event.start).toLocaleString()}
                      </div>
                      <div className="text-gray-700 text-sm">
                        <strong>Koniec:</strong>{" "}
                        {new Date(event.end).toLocaleString()}
                      </div>
                      {event.number && (
                        <div className="text-gray-600 mt-2 text-sm">
                          <strong>Kontakt:</strong> {event.number}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center text-gray-600">
                Brak dostępnych terminów dla wybranych zajęć.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Price;
