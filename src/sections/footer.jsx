import React from "react";


const Footer = () => {
    return (
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
    )
}

export default Footer;