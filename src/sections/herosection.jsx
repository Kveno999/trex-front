import React, {useEffect, useRef, useState} from "react";
import {motion} from 'framer-motion';
import {slideUp, staggerContainer} from '../variants.jsx'
import {Link} from "react-scroll";

const HeroSection = () => {

    const heroRef = useRef(null);

    const [visibleSections, setVisibleSections] = useState({
        hero: false,
    });

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const heroObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleSections(prev => ({...prev, hero: true}));
                heroObserver.unobserve(entries[0].target);
            }
        }, observerOptions);

        if (heroRef.current) heroObserver.observe(heroRef.current);

        return () => {
            if (heroRef.current) heroObserver.unobserve(heroRef.current);
        }
    }, [])

    return (

        <section className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}>


                    <motion.h1
                        variants={slideUp}
                        className="text-4xl md:text-6xl font-bold leading-tight">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            <span className="text-yellow-500">Powering</span> Your Digital <br/>
                            Transformation With <br/>
                            <span className="text-yellow-500">Unstoppable Force</span>
                        </h1>
                    </motion.h1>

                    <motion.p
                        variants={slideUp}
                        className="mt-6 text-xl max-w-2xl">
                        Enterprise-grade Jira development services and testing automation solutions.
                    </motion.p>
                    <div className="mt-8 flex gap-4">
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className="hover:text-yellow-500 cursor-pointer"
                        >
                            <motion.button
                                whileHover={{scale: 1.05, backgroundColor: "#ca8a04"}}
                                whileTap={{scale: 0.95}}
                                className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md">
                                Explore Services
                            </motion.button>
                        </Link>


                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:text-yellow-500 cursor-pointer"
                        >
                            <motion.button
                                whileHover={{scale: 1.05, backgroundColor: "#ca8a04"}}
                                whileTap={{scale: 0.95}}
                                className="border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-6 rounded-md">
                                Contact Us
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection;