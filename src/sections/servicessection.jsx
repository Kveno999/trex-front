import React from "react";
import { ChevronRight, Code, TestTube } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants.jsx";

const services = [
    {
        title: "Jira Development Services",
        description: "Custom Jira apps, workflows, and integrations to streamline your processes.",
        icon: <Code size={40} />,
    },
    {
        title: "Testing Automation",
        description: "End-to-end automated testing solutions for software quality and reliability.",
        icon: <TestTube size={40} />,
    },
    {
        title: "DevOps Solutions",
        description: "CI/CD pipelines that accelerate your development lifecycle.",
        icon: <Code size={40} />,
    },
];

const Card = ({ title, description, icon }) => {
    return (
        <motion.div
            className="relative bg-black p-6 rounded-lg border border-gray-800 overflow-hidden"
            whileHover={{
                boxShadow: "0px 0px 30px rgba(250, 204, 21, 0.5)", // Glow effect
                scale: 1.03, // Slight zoom-in effect
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {/* Border Animation Overlay */}
            <motion.div
                className="absolute inset-0 border-2 border-yellow-500 rounded-lg"
                initial={{ height: "0%", top: "0%" }}
                whileHover={{ height: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="relative z-10">
                <div className="text-yellow-500 mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <a href="#" className="text-yellow-500 inline-flex items-center">
                    Learn More <ChevronRight size={16} className="ml-1" />
                </a>
            </div>
        </motion.div>
    );
};

const ServicesSection = () => {
    return (
        <section id="services" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold">
                        Our <span className="text-yellow-500">Services</span>
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4"></div>
                </motion.div>

                {/* Service Cards Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <Card key={index} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
