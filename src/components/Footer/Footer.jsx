import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer id="contact" className="py-10 bg-[#f7f7f7]">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="container"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-36">
					{/* first section */}
					<div className="space-y-4 max-w-[300px]">
						<h1 className="text-2xl font-bold">The MathDuo</h1>
						<p className="text-dark2">
							Pomagamy uczniom zrozumieć matematykę krok po kroku. Oferujemy
							indywidualne i grupowe korepetycje, dostosowane do tempa nauki
							każdego ucznia. Naszym celem jest nie tylko nauka wzorów i zadań,
							ale też budowanie pewności siebie i pasji do matematyki.
						</p>
					</div>
					{/* second section */}
					<div className="grid grid-cols-2 gap-10">
						<div className="space-y-4">
							<h1 className="text-2xl font-bold">Telefon</h1>
							<div className="text-dark2">
								<ul className="space-y-2 text-lg">
									<li className="cursor-pointer hover:text-secondary duration-200">
										Dawid
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
										+48 517 431 322
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
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
								</ul>
							</div>
						</div>
					</div>
					{/* third section */}
					<div className="space-y-4 max-w-[300px]">
						<h1 className="text-2xl font-bold">Get In Touch</h1>
						<div className="flex items-center">
							<input
								type="text"
								placeholder="Enter your email"
								className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
							/>
							<button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
								Go
							</button>
						</div>
						{/* social icons */}
						<div className="flex space-x-6 py-3">
							<a href="https://www.instagram.com/the.coding.journey/">
								<FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
							</a>
							<a href="https://thecodingjourney.com/">
								<TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
							</a>
							<a href="https://www.youtube.com/@TheCodingJourney">
								<FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
							</a>
						</div>
					</div>
				</div>
				<div className="text-center text-sm text-gray-400 mt-16">
					© 2025 The MathDuo. Wszystkie prawa zastrzeżone.
				</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
