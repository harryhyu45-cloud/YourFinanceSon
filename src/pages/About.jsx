import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Shield,
            title: 'Trust & Security',
            description: 'Your financial security is our top priority. We maintain the highest standards of confidentiality and integrity.'
        },
        {
            icon: Heart,
            title: 'Client-Centered',
            description: 'Every decision we make is focused on your best interests and long-term financial wellbeing.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We strive for excellence in every interaction, providing expert guidance you can rely on.'
        },
        {
            icon: Users,
            title: 'Family Approach',
            description: 'We treat your finances like family, offering personalized care and dedicated support.'
        }
    ];

    const milestones = [
        { year: '2012', title: "From My Parents' Kitchen to Yours", description: 'I watched my parents struggle with confusing financial jargon.' },
        { year: '2016', title: 'How YourFinanceSon Was Born', description: 'I stepped in to simplify their accounts and cut hidden fees.' },
        { year: '2023', title: 'A Mission Years in the Making', description: 'My parents finally achieved total financial peace of mind.' },
        { year: '2025', title: 'Sharing the Solution', description: 'I launched YourFinanceSon to bring this safety to you.' }
    ];

    const stats = [
        { number: '40-year high', label: 'Inflation Rate' },
        { number: '50%+', label: 'Seniors worried about savings' },
        { number: '100+', label: 'Hours of Research condensed for you' },
        { number: '0%', label: 'Risk of unbiased education' }
    ];

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand via-brand/90 to-accent/30 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                            About YourFinanceSon
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                            Your Digital Advocate for Safe Retirement
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-gradient-to-b from-white to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-serif font-bold text-center mb-8 text-gradient">
                            Origin Story
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                I didn't start as a Wall Street firm. I started as a son. After watching my own parents struggle with confusing financial jargon and aggressive salespeople, I realized millions of seniors were in the same boat.
                            </p>
                            <p>
                                This platform isn't about managing your money for fees. It's about empowering you with the unbiased truth so you can protect yourself. I act as the filter between you and the financial sharks.
                            </p>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-serif font-bold text-center mb-16 text-gradient"
                    >
                        Safety Roadmap
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-gradient-to-br from-brand/5 to-accent/5 rounded-2xl p-6 hover-lift hover:shadow-premium transition-all duration-300 h-full border border-gray-100">
                                    <div className="text-4xl font-bold text-accent mb-3">
                                        {milestone.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-b from-background to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif font-bold mb-4 text-gradient">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl p-8 shadow-premium hover:shadow-hover transition-all duration-300 text-center group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-6 group-hover:animate-pulse-slow">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-brand mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
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
                            Ready to Secure Your Financial Future?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join thousands of satisfied clients who trust us with their retirement planning
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-brand transition-all duration-300"
                            >
                                Get Started Today
                            </motion.a>
                            <motion.a
                                href="/services"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-white text-brand font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                            >
                                Explore Our Services
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
