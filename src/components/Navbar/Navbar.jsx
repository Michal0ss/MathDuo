import React from "react";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

const NavbarMenu = [
  {
    id: 1,
    title: "Zacznij tutaj",
    path: "#home",
  },
  {
    id: 2,
    title: "Usługi",
    path: "#services",
  },
  {
    id: 3,
    title: "O nas",
    path: "#info",
  },
  {
    id: 4,
    title: "Nasi uczniowie",
    path: "#team",
  },
  {
    id: 5,
    title: "Kontakt",
    path: "#contact",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "bg-white/50 backdrop-blur-lg shadow-md" : "bg-white/10 backdrop-blur-md"
      } py-4 px-8 z-50`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto flex justify-between items-center"
      >
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">The MathDuo</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            
            {/* Przyciski */}
            <a 
              href="https://discord.gg/twoj-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white w-32 h-10 rounded-md shadow-md hover:bg-purple-500 transition-all duration-700 flex justify-center items-center group"
            >
              <span className="absolute opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 transition-all duration-700">Dołącz</span>
              <FaDiscord className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 text-white text-xl"/>
            </a>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl cursor-pointer" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
