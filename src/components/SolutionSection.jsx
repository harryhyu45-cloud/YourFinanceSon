import React, { useState } from 'react';
import { CheckCircle, Sparkles, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState(false);

    const benefits = [
        "Hedge against inflation and market volatility",
        "Tax-advantaged growth potential",
        "Physical asset ownership (not just paper)",
        "Peace of mind for your legacy"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        // Handle form submission
    };

    return (
        <section id="guide" className="py-20 gradient-brand text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 border border-accent/30">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-sm font-semibold text-accent">Recommended Solution</span>
                        </div>

                        <h2 className="text-3xl font-extrabold sm:text-4xl font-serif mb-6">
                            The "Golden" Solution
                        </h2>

                        <p className="text-lg text-blue-100 leading-relaxed mb-8">
                            My parents diversified with a Gold IRA. It stabilized their portfolio and gave them confidence. Now, I want to share the exact guide they used with you.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <CheckCircle className="flex-shrink-0 h-6 w-6 text-accent mt-0.5 group-hover:scale-110 transition-transform" />
                                    <p className="ml-3 text-base text-blue-50">{benefit}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12 lg:mt-0"
                    >
                        <div className="glass-effect rounded-2xl shadow-2xl overflow-hidden p-8 md:p-10 text-gray-900 border border-white/20">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold font-serif text-gradient mb-2">
                                    Get Your Free Gold IRA Guide
                                </h3>
                                {/* <p className="text-gray-600">Join 10,000+ seniors protecting their future</p> */}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focused ? 'text-brand' : 'text-gray-400'
                                            }`} />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setFocused(true)}
                                            onBlur={() => setFocused(false)}
                                            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-brand focus:border-brand transition-all text-base"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white gradient-accent hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Send Me The Free Guide
                                </motion.button>

                                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    <span>We respect your privacy. No spam, ever.</span>
                                </div>
                            </form>

                            {/* Trust indicators */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span>Instant Access</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span>100% Free</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span>No Credit Card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
