import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TrendingUp,
    Shield,
    FileText,
    Calculator,
    Heart,
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
            fullDesc: 'Don't leave your golden years to chance.This comprehensive guide breaks down complex financial strategies into simple steps you can take today.Learn how to project your future needs and protect your savings from inflation—completely free.',
            features: [
                'How to calculate your true income needs.',
                'Secrets to maximizing Social Security benefits.',
                'Methods to minimize taxes on withdrawals.',
                'Checklist for healthcare costs',
                'Healthcare and long-term care planning'
            ],
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Shield,
            title: 'Investment Advisory',
            subtitle: 'Grow Your Wealth Strategically',
            shortDesc: 'Professional investment management focused on protecting and growing your assets.',
            fullDesc: 'Our investment advisory service provides expert guidance to help you build and preserve wealth. We create diversified portfolios aligned with your risk tolerance and financial goals. Our team continuously monitors market conditions and adjusts your strategy to protect against volatility while pursuing growth opportunities.',
            features: [
                'Customized portfolio management',
                'Risk assessment and mitigation',
                'Diversification strategies',
                'Regular performance reviews',
                'Market analysis and insights'
            ],
            color: 'from-green-500 to-green-600'
        },
        {
            icon: FileText,
            title: 'Estate Planning',
            subtitle: 'Protect Your Legacy',
            shortDesc: 'Ensure your assets are distributed according to your wishes while minimizing taxes.',
            fullDesc: 'Estate planning is crucial for protecting your legacy and ensuring your loved ones are cared for. We work with you and your legal advisors to develop comprehensive estate plans that minimize taxes, avoid probate, and ensure smooth asset transfer. Our guidance helps you make informed decisions about trusts, beneficiary designations, and charitable giving.',
            features: [
                'Will and trust guidance',
                'Beneficiary designation review',
                'Estate tax minimization strategies',
                'Charitable giving planning',
                'Legacy preservation strategies'
            ],
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: Calculator,
            title: 'Tax Planning',
            subtitle: 'Optimize Your Financial Position',
            shortDesc: 'Strategic tax planning to help you keep more of what you earn.',
            fullDesc: 'Effective tax planning can significantly impact your financial wellbeing. We analyze your entire financial picture to identify tax-saving opportunities and develop strategies to minimize your tax burden. From retirement account distributions to investment income, we help you make tax-efficient decisions throughout the year.',
            features: [
                'Tax-efficient investment strategies',
                'Retirement account distribution planning',
                'Capital gains management',
                'Charitable contribution optimization',
                'Year-round tax planning support'
            ],
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: Heart,
            title: 'Insurance Review',
            subtitle: 'Comprehensive Coverage Analysis',
            shortDesc: 'Ensure you have the right protection for your needs and budget.',
            fullDesc: 'Insurance is a critical component of financial security. We review your existing coverage and identify gaps that could leave you vulnerable. Our comprehensive analysis covers life insurance, health insurance, long-term care, and property coverage to ensure you and your family are adequately protected.',
            features: [
                'Life insurance needs analysis',
                'Long-term care insurance review',
                'Medicare and supplement planning',
                'Coverage gap identification',
                'Cost-benefit analysis'
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
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Schedule a free consultation to discuss your financial goals
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-brand transition-all duration-300"
                        >
                            Contact Us Today
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
