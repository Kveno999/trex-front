import treximg from "../assets/img.png";
import logo from "../assets/logo.png";
import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="relative">
                            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                <img src={treximg} className="w-full h-200 object-cover rounded-lg"
                                     alt={"Trex"}/>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-lg">
                                <img src={logo} className="w-full h-full object-cover rounded-lg" alt="Logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <h2 className="text-3xl font-bold mb-6">
                            About <span className="text-yellow-500">Trex-Solutions</span>
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Founded in 2025, Trex-Solutions provides cutting-edge technological solutions to
                            enterprises worldwide. Our team delivers powerful, reliable solutions that help
                            businesses optimize workflows and accelerate delivery.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <div className="text-yellow-500 text-3xl font-bold">100+</div>
                                <div className="text-sm">Clients</div>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <div className="text-yellow-500 text-3xl font-bold">500+</div>
                                <div className="text-sm">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;