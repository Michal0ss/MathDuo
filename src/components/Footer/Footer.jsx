import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaDiscord, FaFacebook } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer  id = "contact" className="py-5 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <div className="flex justify-start mb-2">
              <img 
                src={logo} 
                alt="MathDuo Logo" 
                className="w-28 h-28 object-contain" 
              />
            </div>
            <h1 className="text-2xl font-bold">The MathDuo</h1>
            <p className="text-dark2">
              	Pomagamy uczniom zrozumieć matematykę krok po kroku. Oferujemy
				indywidualne i grupowe korepetycje, dostosowane do tempa nauki
				każdego ucznia. Naszym celem jest nie tylko nauka wzorów i zadań,
				ale też budowanie pewności siebie i pasji do matematyki.
            </p>
          </div>
          {/* second section */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Telefon</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="font-bold cursor-pointer hover:text-secondary duration-200">
                    Dawid
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    +48 517 431 322
                  </li>
                  <li className="font-bold cursor-pointer hover:text-secondary duration-200">
                    Michał
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    +48 884 843 004
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Mail</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    dawidchrzaszcz64@gmail.com
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    michal.bialas.pol@gmail.com
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    theMathDuo2@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px] md:ml-auto">
            <h1 className="text-2xl font-bold">Skontaktuj sie z nami</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Podaj email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                OK 
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://www.instagram.com/the_math_duo/">
                <FaInstagram className="text-3xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              {/* <a href="https:///">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a> */}
              <a href="https://www.youtube.com/@the_math_duo">
                <FaFacebook className="text-3xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
			  <a href="https://discord.gg/n7tjkGhjDZ">
                <FaDiscord className="text-3xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
		<div className="text-center text-sm text-gray-400 mt-10">
			© 2025 The MathDuo. Wszystkie prawa zastrzeżone.
		</div>
      </motion.div>
    </footer>
  );
};

export default Footer;
