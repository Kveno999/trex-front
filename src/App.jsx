import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter
import { Menu, X, ChevronRight, Code, TestTube, BadgePlus } from 'lucide-react';
import './index.css';
import treximg from '../src/assets/img.png';
import logo from './assets/logo.png';

const TrexSolutionsLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Router> {/* Wrap your component with HashRouter */}
            <div className="min-h-screen bg-black text-white">
                {/* Navigation */}
                <nav className="bg-black border-b border-yellow-500">
                    <div className="max-w-7xl mx-auto px-4 flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="font-bold text-2xl">
                                <span className="text-yellow-500">T-REX</span>
                                <span className="text-white"> SOLUTIONS</span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#services" className="hover:text-yellow-500">Services</a>
                            <a href="#about" className="hover:text-yellow-500">About</a>
                            <a href="#contact" className="hover:text-yellow-500">Contact</a>
                            <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-md">
                                Get Started
                            </button>
                        </div>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden bg-gray-900 p-4 space-y-2">
                            <a href="#services" className="block py-2 hover:text-yellow-500">Services</a>
                            <a href="#about" className="block py-2 hover:text-yellow-500">About</a>
                            <a href="#contact" className="block py-2 hover:text-yellow-500">Contact</a>
                        </div>
                    )}
                </nav>

                {/* Hero Section */}
                <section className="relative py-24 md:py-32">
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            <span className="text-yellow-500">Powering</span> Your Digital <br />
                            Transformation With <br />
                            <span className="text-yellow-500">Unstoppable Force</span>
                        </h1>
                        <p className="mt-6 text-xl max-w-2xl">
                            Enterprise-grade Jira development services and testing automation solutions.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md">
                                Explore Services
                            </button>
                            <button className="border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-6 rounded-md">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold">
                                Our <span className="text-yellow-500">Services</span>
                            </h2>
                            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Jira Development Services */}
                            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-yellow-500">
                                <div className="text-yellow-500 mb-4">
                                    <Code size={40} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Jira Development Services</h3>
                                <p className="text-gray-300 mb-4">
                                    Custom Jira apps, workflows, and integrations to streamline your processes.
                                </p>
                                <a href="#" className="text-yellow-500 inline-flex items-center">
                                    Learn More <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>

                            {/* Testing Automation */}
                            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-yellow-500">
                                <div className="text-yellow-500 mb-4">
                                    <TestTube size={40} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Testing Automation</h3>
                                <p className="text-gray-300 mb-4">
                                    End-to-end automated testing solutions for software quality and reliability.
                                </p>
                                <a href="#" className="text-yellow-500 inline-flex items-center">
                                    Learn More <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>

                            {/* DevOps Solutions */}
                            <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-yellow-500">
                                <div className="text-yellow-500 mb-4">
                                    <Code size={40} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">DevOps Solutions</h3>
                                <p className="text-gray-300 mb-4">
                                    CI/CD pipelines that accelerate your development lifecycle.
                                </p>
                                <a href="#" className="text-yellow-500 inline-flex items-center">
                                    Learn More <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 bg-black">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <div className="relative">
                                    <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                                        <img src={treximg} className="w-full h-200 object-cover rounded-lg" alt={"Trex"} />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-lg">
                                        <img src={logo} className="w-full h-full object-cover rounded-lg" alt="Logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-10">
                                <h2 className="text-3xl font-bold mb-6">
                                    About <span className="text-yellow-500">Trex-Solutions</span>
                                </h2>
                                <p className="text-gray-300 mb-6">
                                    Founded in 2020, Trex-Solutions provides cutting-edge technological solutions to enterprises worldwide. Our team delivers powerful, reliable solutions that help businesses optimize workflows and accelerate delivery.
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

                {/* CTA Section */}
                <section id="contact" className="py-16 bg-yellow-500 text-black">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-8 md:mb-0">
                                <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
                                <p className="text-lg">Schedule a consultation with our experts today.</p>
                            </div>
                            <div>
                                <button className="bg-black text-white font-bold py-3 px-8 rounded-md">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div className="font-bold text-xl mb-4">
                            <span className="text-yellow-500">T-REX</span>
                            <span className="text-white"> SOLUTIONS</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Powering your digital transformation with unstoppable force.
                        </p>
                        <div className="flex justify-center space-x-4 mb-6">
                            {/* Social icons would go here */}
                        </div>
                        <div className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Trex-Solutions. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </Router> // Wrap your component with HashRouter
    );
};

export default TrexSolutionsLanding;
