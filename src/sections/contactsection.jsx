import React, {useState} from "react";
import { Menu, X, ChevronRight, Code, TestTube, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">
                        Get in <span className="text-yellow-500">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4"></div>
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                        Ready to supercharge your digital transformation? Contact us today to discuss your project
                        requirements.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Contact Form */}
                    <div className="md:w-2/3">
                        <form onSubmit={handleSubmit} className="bg-black p-8 rounded-lg border border-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your
                                        Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email
                                        Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company
                                    Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your
                                    Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="md:w-1/3">
                        <div className="bg-black p-8 rounded-lg border border-gray-800 h-full">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-yellow-500 mr-4">
                                        <MapPin size={24}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Our Office</h4>
                                        <p className="text-gray-400">Georgia, Tbilisi</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-yellow-500 mr-4">
                                        <Mail size={24}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Email Us</h4>
                                        <p className="text-gray-400">info@trex-solutions.com</p>
                                        <p className="text-gray-400">support@trex-solutions.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-yellow-500 mr-4">
                                        <Phone size={24}/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Call Us</h4>
                                        <p className="text-gray-400">+321 (555) 123-4567</p>
                                        <p className="text-gray-400">+321 (555) 987-6543</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;