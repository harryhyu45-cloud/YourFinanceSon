import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TrendingUp,
    Shield,
    ShieldCheck,
    FileText,
    Library,
    Umbrella,
    ChevronDown,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

const Services = () => {
    const [expandedService, setExpandedService] = useState(null);

    const services = [
        {

            icon: TrendingUp,
            title: 'Free Retirement Guide',
            subtitle: 'Secure Your Golden Years',
            shortDesc: 'Download our comprehensive guide on protecting your savings from inflation without risky bets',
            fullDesc: 'Don\'t leave your golden years to chance. This comprehensive guide breaks down complex financial strategies into simple steps you can take today. Learn how to project your future needs and protect your savings from inflation—completely free.',
            features: [
                'How to calculate your true income needs.',
                'Secrets to maximizing Social Security benefits.',
                'Methods to minimize taxes on withdrawals.',
                'Checklist for healthcare costs.',
                'Understanding your pension options',
            ],

            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Shield,
            title: 'Wealth Protection',
            subtitle: 'Grow Your Wealth Strategically',
            shortDesc: 'Discover the #1 Strategy used by wealthy seniors to secure their nest egg against market crashes.',
            fullDesc: 'You don\'t need a high-priced advisor to protect your nest egg. This resource breaks down the exact strategies wealthy seniors use to shield their money from crashes. Learn how to balance growth with safety using our simple, step-by-step protection plan.',
            features: [
                'The "Bucket Strategy" explained simply.',
                'How to insulate your money from crashes.',
                'Safe-haven assets you should know.',
                'Risk assessment checklist.',
                'Strategies to preserve your principal.',
            ],
            color: 'from-green-500 to-green-600'
        },
        {
            icon: FileText,
            title: 'Legacy Protection',
            subtitle: 'Protect Your Legacy',
            shortDesc: 'Ensure your family is protected. Get our checklist for securing your digital and physical assets.',
            fullDesc: 'Estate planning doesn\'t have to be complicated or expensive. This simple checklist helps you organize your most important documents so your family isn\'t left guessing. Learn how to secure your digital passwords, organize your financial records, and ensure your assets go exactly where you want them.',
            features: [
                'The Ultimate "In Case of Emergency" Checklist.',
                'How to organize your digital passwords.',
                'Simple steps to avoid probate.',
                'Organizing your financial records.',
                'Talking to your family about money.',
            ],
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Library,
            title: 'Resource Library',
            subtitle: 'All PDFs & Downloads',
            shortDesc: 'Access our complete archive of guides, scam alerts, and unlisted resources.',
            fullDesc: 'This is your one-stop shop for everything we offer. Can\'t find a specific guide in the other sections? It\'s here. We keep our full archive of PDF guides, templates, and services in this library—including exclusive resources that aren\'t listed anywhere else on the site.',
            features: [
                'Access to 100% of our PDF guides.',
                'The "Scam Alert" weekly archive.',
                'Unlisted financial checklists.',
                'Downloadable budget templates.',
                'Bonus resources not shown on homepage.',
            ],
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: ShieldCheck,
            title: 'Scam & Fraud Shield',
            subtitle: 'Stay One Step Ahead',
            shortDesc: 'Don\'t let scammers touch your hard-earned money. Get our weekly alerts and protection checklists.',
            fullDesc: 'Scammers are getting smarter, using AI voice cloning and fake text messages to target seniors. You don\'t need to be a tech expert to stay safe—you just need to know what to look for. This guide teaches you the "Red Flags" of fraud so you can hang up the phone with confidence and block unwanted calls.',
            features: [
                'Top 5 new scams targeting seniors right now.',
                'How to block spam calls on iPhone & Android.',
                'The "Grandparent Scam" explained.',
                'Checklist: Is this email real or fake?',
                'Recovery steps if you clicked a bad link.',
            ],
            color: 'from-red-500 to-red-600'
        }
    ];

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand via-brand/90 to-accent/30 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                            Comprehensive financial solutions designed to protect and grow your wealth
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-premium hover:shadow-hover transition-all duration-300 overflow-hidden group"
                            >
                                {/* Card Header */}
                                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/90 font-medium">
                                        {service.subtitle}
                                    </p>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {service.shortDesc}
                                    </p>

                                    {/* Expandable Details */}
                                    <button
                                        onClick={() => setExpandedService(expandedService === index ? null : index)}
                                        className="flex items-center justify-between w-full text-brand font-semibold hover:text-accent transition-colors duration-300 mb-4"
                                    >
                                        <span>{expandedService === index ? 'Show Less' : 'Learn More'}</span>
                                        <motion.div
                                            animate={{ rotate: expandedService === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {expandedService === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-gray-100">
                                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                                        {service.fullDesc}
                                                    </p>
                                                    <h4 className="font-bold text-brand mb-3">Key Features:</h4>
                                                    <ul className="space-y-2">
                                                        {service.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start">
                                                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                                <span className="text-gray-600">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* CTA Button */}
                                    <motion.a
                                        href="/contact"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="mt-6 flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-brand to-brand/90 text-white font-semibold rounded-lg hover:shadow-glow-brand transition-all duration-300"
                                    >
                                        Get Started
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-brand to-brand/90 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-serif font-bold mb-6">
                            Stuck on a Confusing Money Question?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Big financial advisors usually won't talk to you unless you have millions. I am different. If you have savings sitting idle and don't know where to invest, or simply need help with a suspicious letter—send me a message. I personally read and reply to every email to help you make the right decision.
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-brand transition-all duration-300"
                        >
                            Ask Me Your Question (It's Free)
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
