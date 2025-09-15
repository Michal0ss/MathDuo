import React from "react";
// import BannerPng from "../../assets/banner.png"; // Ten obrazek nie będzie już potrzebny
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pb-10" // Dodajemy padding-bottom
        >
          <h1 className="text-4xl font-bold !leading-snug">
            Udzielamy korepetycji stacjonarnie i online
          </h1>
        </motion.div>

        {/* Content: Text on left, Map on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Banner Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center md:text-left" // Tekst wyśrodkowany na mobile, na lewo na desktop
          >
            <div className="space-y-4 md:max-w-[450px]"> {/* Usunięto lg:max-w-[450px] bo nie jest już potrzebne */}
              <p className="text-dark2">
                Możemy pomóc Ci z matematyką na terenie Bytomia, Krakowa jak i zdalnie przez internet. Korzystając z naszych korepetycji, zyskujesz elastyczność i wygodę nauki w dogodnym dla Ciebie miejscu.
              </p>
              <a
                href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
                className="primary-btn !mt-8"
              >
                Skontaktuj się z nami
              </a>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full"
          >
            {/* Tutaj wklej kod iframe z Google Maps */}
            {/* Przykład kodu iframe. Musisz go wygenerować z Google Maps! */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164104.9123049581!2d19.78913988587602!3d50.1171891963953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c03b573cd3%3A0x3b652875a065b683!2sKrak%C3%B3w!5e0!3m2!1spl!2spl!4v1701967268903!5m2!1spl!2spl" // TUTAJ WKLEJ SWÓJ KOD EMBED MAPY
              width="600" // Możesz dostosować szerokość
              height="450" // Możesz dostosować wysokość
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[200px] md:h-[250px] rounded-full shadow-lg" // Responsywna szerokość i wysokość
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163975.6340515184!2d18.759316369863!3d50.34639930100055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711313817c5f3a9%3A0x5c803513b9c8d5e5!2sBytom%2C%20Polska!5e0!3m2!1spl!2spl!4v1701967268903!5m2!1spl!2spl"
              width="600" // Możesz dostosować szerokość
              height="450" // Możesz dostosować wysokość
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[200px] md:h-[250px] rounded-full shadow-lg" // Responsywna szerokość i wysokość
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;