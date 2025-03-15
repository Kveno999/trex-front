import React from "react";


const CtaSection = () => {
    return (
        <section id="contact" className="py-16 bg-yellow-500 text-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
                        <p className="text-lg">Schedule a consultation with our experts today.</p>
                    </div>
                    <div>
                        <a href="#contact">
                            <button className="bg-black text-white font-bold py-3 px-8 rounded-md">
                                Get Started Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;