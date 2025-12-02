import React from 'react';
import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-background via-white to-accent/5 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute top-60 -left-40 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            {/* Trust badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-wrap gap-4 mb-8 sm:justify-center lg:justify-start"
                            >
                                {[
                                    { icon: Shield, text: "Family First Approach" },
                                    { icon: Award, text: "100% Beginner Friendly" },
                                    { icon: TrendingUp, text: "Safe & Secure Methods" }
                                ].map((badge, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100"
                                    >
                                        <badge.icon className="w-4 h-4 text-accent" />
                                        <span className="text-xs font-medium text-gray-700">{badge.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-4xl tracking-tight font-extrabold text-text sm:text-5xl md:text-6xl font-serif leading-tight"
                            >
                                <span className="block">Protect Your Retirement</span>
                                <span className="block text-gradient mt-2">From Inflation</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-6 text-lg text-gray-600 sm:mt-8 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-8 lg:mx-0 leading-relaxed"
                            >
                                Get the <span className="font-semibold text-brand">free guide</span> that thousands of seniors are using to safeguard their savings. Trusted advice from a source you can rely on.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4"
                            >
                                <motion.a
                                    href="#guide"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(197, 160, 89, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white gradient-accent shadow-glow md:text-lg transition-all duration-300"
                                >
                                    Get My Free Guide
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                                <motion.a
                                    href="#trust"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-brand text-base font-semibold rounded-xl text-brand bg-white hover:bg-brand hover:text-white md:text-lg transition-all duration-300"
                                >
                                    Learn More
                                </motion.a>
                            </motion.div>
                        </div>
                    </main>
                </div>
            </div>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent z-10"></div>
                    <img
                        className="h-full w-full object-cover"
                        src="./hero-image.jpeg"
                        alt="Financial advisor helping senior couple"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
