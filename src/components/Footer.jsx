import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const pageLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Courses', path: '/courses' },
        { name: 'Contact', path: '/contact' }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-400 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-accent to-brand"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-2xl font-serif font-bold text-white mb-3 block">YourFinanceSon</span>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            Helping seniors protect their future with trusted financial guidance and resources.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center hover:bg-brand/30 transition-colors cursor-pointer"
                                >
                                    <social.icon className="w-5 h-5 text-accent" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {pageLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Phone className="w-4 h-4 text-accent mr-2 mt-1 flex-shrink-0" />
                                <a href="tel:+15551234567" className="text-sm hover:text-accent transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-4 h-4 text-accent mr-2 mt-1 flex-shrink-0" />
                                <a href="mailto:info@yourfinanceson.com" className="text-sm hover:text-accent transition-colors">
                                    info@yourfinanceson.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 text-accent mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm">
                                    123 Financial Street, Suite 100<br />
                                    New York, NY 10001
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="text-xs text-center space-y-3">
                        <p className="text-gray-500">
                            &copy; {new Date().getFullYear()} YourFinanceSon. All rights reserved.
                        </p>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            <span className="font-semibold text-gray-400">Disclaimer:</span> The information provided on this website is for educational purposes only and does not constitute financial advice.
                            Please consult with a qualified financial advisor before making any investment decisions.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
