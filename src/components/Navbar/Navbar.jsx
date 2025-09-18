import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import logo from "../../assets/logo.png";


const NavbarMenu = [
	{ id: 1, title: "Zacznij tutaj", path: "#home" },
	{ id: 2, title: "Usługi", path: "#services" },
	{ id: 3, title: "O nas", path: "#info" },
	{ id: 4, title: "Nasi uczniowie", path: "#team" },
	{ id: 5, title: "Cennik", path: "#pricing" },
	{ id: 6, title: "Kontakt", path: "#contact-section" },
];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav
			className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
				scrolled
					? "bg-white/50 backdrop-blur-lg shadow-md"
					: "bg-white/10 backdrop-blur-md"
			} py-4 px-8`}
		>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				className="container mx-auto flex justify-between items-center"
			>
				{/* Logo */}
				<div className="flex items-center gap-3">
					<img src={logo} alt="MathDuo Logo" className="w-16 md:w-16 object-contain" />
				    <h1 className="font-bold text-2xl">The MathDuo</h1>
				</div>
				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center gap-6">
					{NavbarMenu.map((menu) => (
						<a
							key={menu.id}
							href={menu.path}
							className="inline-block py-2 px-3 hover:text-secondary relative group"
						>
							<div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
							{menu.title}
						</a>
					))}

					{/* Discord Button */}
					<a
						href="https://discord.gg/n7tjkGhjDZ"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-500 text-white w-32 h-10 rounded-md shadow-md hover:bg-purple-500 transition-all duration-700 flex justify-center items-center group"
					>
						<span className="absolute opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 transition-all duration-700">
							Dołącz
						</span>
						<FaDiscord className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 text-white text-xl" />
					</a>
				</div>

				{/* Mobile Hamburger */}
				<div className="lg:hidden z-50">
					{menuOpen ? (
						<IoMdClose
							className="text-4xl cursor-pointer"
							onClick={toggleMenu}
						/>
					) : (
						<IoMdMenu
							className="text-4xl cursor-pointer"
							onClick={toggleMenu}
						/>
					)}
				</div>
			</motion.div>

			{/* Mobile Fullscreen Menu */}
			{menuOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-white/90 backdrop-blur-md flex flex-col justify-center items-center gap-6 z-40"
				>
					{NavbarMenu.map((menu) => (
						<a
							key={menu.id}
							href={menu.path}
							onClick={toggleMenu}
							className="w-64 text-center py-4 px-6 bg-white/60 backdrop-blur-sm rounded-xl text-gray-900 text-2xl font-semibold hover:bg-white/80 hover:scale-105 transition-all duration-300 shadow-md"
						>
							{menu.title}
						</a>
					))}

					{/* Discord Button */}
					<a
						href="https://discord.gg/n7tjkGhjDZ"
						target="_blank"
						rel="noopener noreferrer"
						className="w-64 py-4 px-6 bg-blue-500 text-white rounded-xl shadow-md hover:bg-purple-500 text-2xl font-semibold flex justify-center items-center transition-all duration-300"
					>
						Dołącz
					</a>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;