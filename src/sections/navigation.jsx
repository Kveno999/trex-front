import React, { useState } from "react";
import icon from "../assets/icon.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black border-b border-yellow-500"
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between h-16">
                <a href="/" className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src={icon} className="h-10 w-auto" alt="T-REX Logo" />
                        <div className="font-bold text-2xl">
                            <span className="text-yellow-500">T-REX</span>
                            <span className="text-white"> SOLUTIONS</span>
                        </div>
                    </div>
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-500 cursor-pointer"
                    >
                        Services
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-500 cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="hover:text-yellow-500 cursor-pointer"
                    >
                        Contact
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-md">
                            Get Started
                        </button>
                    </Link>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 p-4 space-y-2">
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        className="block py-2 hover:text-yellow-500 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                        Services
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="block py-2 hover:text-yellow-500 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="block py-2 hover:text-yellow-500 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </motion.nav>
    );
};

export default Navigation;
