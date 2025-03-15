import React from "react";


const HeroSection = () => {
    return (
        <section className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="text-yellow-500">Powering</span> Your Digital <br/>
                    Transformation With <br/>
                    <span className="text-yellow-500">Unstoppable Force</span>
                </h1>
                <p className="mt-6 text-xl max-w-2xl">
                    Enterprise-grade Jira development services and testing automation solutions.
                </p>
                <div className="mt-8 flex gap-4">
                    <a href="#services">
                        <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md">
                            Explore Services
                        </button>
                    </a>

                    <a href="#contact">
                        <button
                            className="border-2 border-yellow-500 text-yellow-500 font-bold py-3 px-6 rounded-md">
                                Contact Us
                            </button>
                        </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;