import React from "react";
import {ChevronRight, Code, TestTube} from "lucide-react";


const ServicesSection = () => {
    return (
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
                            <Code size={40}/>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Jira Development Services</h3>
                        <p className="text-gray-300 mb-4">
                            Custom Jira apps, workflows, and integrations to streamline your processes.
                        </p>
                        <a href="#" className="text-yellow-500 inline-flex items-center">
                            Learn More <ChevronRight size={16} className="ml-1"/>
                        </a>
                    </div>

                    {/* Testing Automation */}
                    <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-yellow-500">
                        <div className="text-yellow-500 mb-4">
                            <TestTube size={40}/>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Testing Automation</h3>
                        <p className="text-gray-300 mb-4">
                            End-to-end automated testing solutions for software quality and reliability.
                        </p>
                        <a href="#" className="text-yellow-500 inline-flex items-center">
                            Learn More <ChevronRight size={16} className="ml-1"/>
                        </a>
                    </div>

                    {/* DevOps Solutions */}
                    <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-yellow-500">
                        <div className="text-yellow-500 mb-4">
                            <Code size={40}/>
                        </div>
                        <h3 className="text-xl font-bold mb-3">DevOps Solutions</h3>
                        <p className="text-gray-300 mb-4">
                            CI/CD pipelines that accelerate your development lifecycle.
                        </p>
                        <a href="#" className="text-yellow-500 inline-flex items-center">
                            Learn More <ChevronRight size={16} className="ml-1"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;