import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const ScareSection = () => {
    const data = [
        { year: '2000', value: 100, percent: 100, color: 'bg-green-600' },
        { year: '2024', value: 54, percent: 54, color: 'bg-alert' },
        { year: '2030 (Projected)', value: 45, percent: 45, color: 'bg-alert' }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-alert/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-alert/10 text-alert rounded-full mb-6 border border-alert/20"
                    >
                        <AlertTriangle className="w-5 h-5" />
                        <span className="font-bold uppercase tracking-wide text-sm">The Silent Killer</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl font-extrabold text-text sm:text-4xl font-serif"
                    >
                        Inflation is Eating Your Retirement
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto"
                    >
                        The purchasing power of the dollar has dropped significantly. What will your savings be worth in 10 years?
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 max-w-2xl mx-auto"
                >
                    <div className="glass-effect rounded-2xl shadow-premium p-8 md:p-10 border border-gray-100">
                        <h3 className="text-xl font-bold text-center mb-8 text-text">
                            Purchasing Power of <span className="text-gradient">$100,000</span>
                        </h3>

                        <div className="space-y-8">
                            {data.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="flex justify-between items-baseline mb-2">
                                        <span className="text-sm font-semibold text-gray-700">{item.year}</span>
                                        <span className={`text-lg font-bold ${index === 0 ? 'text-green-600' : 'text-alert'}`}>
                                            ${item.value.toLocaleString()}
                                        </span>
                                    </div>

                                    <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.percent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                            className={`${item.color} h-6 rounded-full relative overflow-hidden ${index > 0 ? 'opacity-90' : ''}`}
                                        >
                                            {/* Shine effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                initial={{ x: '-100%' }}
                                                animate={{ x: '200%' }}
                                                transition={{ duration: 2, delay: 1 + index * 0.1, ease: "easeInOut" }}
                                            />
                                        </motion.div>

                                        {/* Percentage label */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white drop-shadow-lg">
                                                {item.percent}%
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <p className="mt-8 text-xs text-gray-400 text-center italic">
                            *Based on CPI data and projected inflation rates.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ScareSection;
