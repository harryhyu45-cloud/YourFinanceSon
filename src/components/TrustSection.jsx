import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TrustSection = () => {
    return (
        <section id="trust" className="py-20 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">Michael Anderson
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-base text-brand font-semibold tracking-wide uppercase">My Promise</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl font-serif">
                            Why I Built This for My Parents
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Quote card */}
                        <div className="glass-effect rounded-2xl shadow-premium p-8 md:p-12 border border-gray-100">
                            <Quote className="w-12 h-12 text-accent/30 mb-6" />
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif italic mb-8">
                                I watched my parents worry about their savings shrinking every time they went to the grocery store. I knew I had to find a solution to protect their hard-earned money.
                            </p>

                            <div className="flex items-center justify-between flex-wrap gap-6">
                                <div className="flex items-center space-x-4">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-brand overflow-hidden ring-4 ring-accent/20">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                                            alt="Founder"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-text">Michael Anderson</p>
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand/10 rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
