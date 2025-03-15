import React, {useState} from "react";
import icon from "../assets/icon.png";
import {Menu, X} from "lucide-react";


const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (<nav className="bg-black border-b border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16">
            <a href="/" className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <img src={icon} className="h-10 w-auto" alt="T-REX Logo"/>
                    <div className="font-bold text-2xl">
                        <span className="text-yellow-500">T-REX</span>
                        <span className="text-white"> SOLUTIONS</span>
                    </div>
                </div>
            </a>
            <div className="hidden md:flex items-center space-x-6">
                <a href="#services" className="hover:text-yellow-500">Services</a>
                <a href="#about" className="hover:text-yellow-500">About</a>
                <a href="#contact" className="hover:text-yellow-500">Contact</a>
                <a href="#contact">
                    <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-md">
                        Get Started
                    </button>
                </a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </div>
        {isMenuOpen && (
            <div className="md:hidden bg-gray-900 p-4 space-y-2">
                <a href="#services" className="block py-2 hover:text-yellow-500">Services</a>
                <a href="#about" className="block py-2 hover:text-yellow-500">About</a>
                <a href="#contact" className="block py-2 hover:text-yellow-500">Contact</a>
            </div>
        )}
    </nav>)

}

export default Navigation;