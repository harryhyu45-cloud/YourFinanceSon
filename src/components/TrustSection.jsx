import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TrustSection = () => {
    return (
        <section id="trust" className="py-20 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">Harry harrington
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-base text-brand font-semibold tracking-wide uppercase">My Mission</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl font-serif">
                            Helping My Parents Sleep Better at Night
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
                                Watching my parents stress about rising grocery prices and shrinking savings really bothered me. I wanted to find safe, simple ways to help their money last longer without taking crazy risks. This isn't about getting rich quick; it's about having peace of mind.
                            </p>

                            <div className="flex items-center justify-between flex-wrap gap-6">
                                <div className="flex items-center space-x-4">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-brand overflow-hidden ring-4 ring-accent/20">
                                        <img
                                            src="./harryhyu.jpeg"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-text">Harry harrington</p>
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
