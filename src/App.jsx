import React, {useState} from 'react';
import {HashRouter as Router} from 'react-router-dom'; // Import HashRouter
import {Menu, X, ChevronRight, Code, TestTube, BadgePlus} from 'lucide-react';
import './index.css';
import treximg from '../src/assets/img.png';
import logo from './assets/logo.png';
import icon from './assets/icon.png'
import Navigation from "./sections/navigation.jsx"
import HeroSection from "./sections/herosection.jsx";
import ServicesSection from "./sections/servicessection.jsx";
import AboutSection from "./sections/aboutsection.jsx";
import CtaSection from "./sections/ctasection.jsx";
import Footer from "./sections/footer.jsx";
import Contact from "./sections/contactsection.jsx";
import ScrollBar from "./sections/scrollbar.jsx";

const TrexSolutionsLanding = () => {
    return (
        <Router>
            <div className="min-h-screen bg-black text-white !scroll-smooth">
                <Navigation/>
                <HeroSection/>
                <ServicesSection/>
                <AboutSection/>
                <Contact/>
                <CtaSection/>
                <Footer/>
                <ScrollBar/>
            </div>
        </Router>
    );
};

export default TrexSolutionsLanding;
