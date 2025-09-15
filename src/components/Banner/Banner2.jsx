import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaTimes, FaPhone } from "react-icons/fa";
import MichalPhoto from "../../assets/michal.jpg";
import DawidPhoto from "../../assets/cichy.jpg";

const Banner2 = () => {
  const [socialModal, setSocialModal] = useState({
    isOpen: false,
    type: null // 'instagram', 'facebook' lub 'contact'
  });

  const openModal = (type) => {
    setSocialModal({ isOpen: true, type });
    document.body.classList.add('overflow-hidden'); // blokuje scroll
  };

  const closeModal = () => {
    setSocialModal({ isOpen: false, type: null });
    document.body.classList.remove('overflow-hidden'); // odblokowuje scroll
  };

  const teachers = {
    instagram: [
      { name: "Michał", subject: "Matematyka", profileUrl: "https://instagram.com/michal_instagram", icon: <FaInstagram className="text-xl" />, bgColor: "bg-pink-500 hover:bg-pink-600", photo: MichalPhoto },
      { name: "Dawid", subject: "Matematyka", profileUrl: "https://instagram.com/dawid_instagram", icon: <FaInstagram className="text-xl" />, bgColor: "bg-pink-500 hover:bg-pink-600", photo: DawidPhoto }
    ],
    facebook: [
      { name: "Michał", subject: "Matematyka", profileUrl: "https://facebook.com/michal_facebook", icon: <FaFacebook className="text-xl" />, bgColor: "bg-blue-600 hover:bg-blue-700", photo: MichalPhoto },
      { name: "Dawid", subject: "Matematyka", profileUrl: "https://facebook.com/dawid_facebook", icon: <FaFacebook className="text-xl" />, bgColor: "bg-blue-600 hover:bg-blue-700", photo: DawidPhoto }
    ],
    contact: [
      { name: "Michał", phone: "+48 884 843 004", photo: MichalPhoto },
      { name: "Dawid", phone: "+48 517 431 322", photo: DawidPhoto }
    ]
  };

  return (
    <section className="relative">
      {/* Overlay */}
      <AnimatePresence>
        {socialModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>

              <h3 className="text-2xl font-bold text-center mb-6">
                {socialModal.type === "instagram"
                  ? "Nasze Instagramy"
                  : socialModal.type === "facebook"
                  ? "Nasze Facebooki"
                  : "Skontaktuj się z nami"}
              </h3>
              
              {/* RESPONSYWNE POPUPY */}
              <div className="flex flex-col items-center space-y-6 w-full">
                {socialModal.type === "contact"
                  ? teachers.contact.map((person, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl w-full">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden border-2 border-black shadow-md">
                          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{person.name}</h4>
                          <p className="text-sm text-gray-600">Telefon</p>
                        </div>
                        <a href={`tel:${person.phone}`} className="flex items-center gap-2 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                          <FaPhone /> <span className="phone-number">{person.phone}</span>
                        </a>
                      </div>
                    ))
                  : teachers[socialModal.type]?.map((teacher, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl w-full">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden border-2 border-black shadow-md">
                          <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{teacher.name}</h4>
                          <p className="text-sm text-gray-600">{teacher.subject}</p>
                        </div>
                        <a href={teacher.profileUrl} target="_blank" rel="noopener noreferrer" className={`p-3 ${teacher.bgColor} text-white rounded-lg transition-transform transform hover:scale-110`}>
                          {teacher.icon}
                        </a>
                      </div>
                    ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container py-14 md:py-24">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pb-10">
          <h1 className="text-4xl font-bold !leading-snug">Udzielamy korepetycji stacjonarnie i online</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center text-center md:text-left">
            <div className="space-y-4 md:max-w-[450px]">
              <p className="text-dark2">
                Możemy pomóc Ci z matematyką na terenie Bytomia, Krakowa jak i zdalnie przez internet. Korzystając z naszych korepetycji, zyskujesz elastyczność i wygodę nauki w dogodnym dla Ciebie miejscu.
              </p>


              {/* PRZYCISKI KONTAKTU */}
              <div className="flex flex-col sm:flex-row gap-4 !mt-8">
                <button onClick={() => openModal('instagram')} className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all">
                  <FaInstagram className="text-xl" /> Instagram
                </button>
                <button onClick={() => openModal('facebook')} className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
                  <FaFacebook className="text-xl" /> Facebook
                </button>
              </div>

              <div className="mt-4">
                <button onClick={() => openModal('contact')} className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all w-full sm:w-auto">
                  <FaPhone className="text-xl" /> Skontaktuj się z nami
                </button>
              </div>
            </div>
          </motion.div>

          {/* MAPY */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164104.9123049581!2d19.78913988587602!3d50.1171891963953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c03b573cd3%3A0x3b652875a065b683!2sKrak%C3%B3w!5e0!3m2!1spl!2spl!4v1701967268903!5m2!1spl!2spl"
              className="w-full h-[200px] md:h-[250px] rounded-lg shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163975.6340515184!2d18.759316369863!3d50.34639930100055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711313817c5f3a9%3A0x5c803513b9c8d5e5!2sBytom%2C%20Polska!5e0!3m2!1spl!2spl!4v1701967268903!5m2!1spl!2spl"
              className="w-full h-[200px] md:h-[250px] rounded-lg shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
