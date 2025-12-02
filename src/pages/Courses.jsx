import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Bell } from 'lucide-react';

const Courses = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setEmail('');
                setSubscribed(false);
            }, 3000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand via-brand/95 to-accent/40 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
                {/* Sparkle Icons */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mb-8"
                >
                    <Sparkles className="w-20 h-20 text-accent" />
                </motion.div>

                {/* Coming Soon Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12"
                >
                    <motion.h1
                        className="text-7xl md:text-9xl font-serif font-bold mb-6 animate-coming-soon"
                        style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #C5A059 50%, #ffffff 100%)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        <motion.span
                            animate={{
                                backgroundPosition: ['200% 0', '-200% 0'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                background: 'linear-gradient(90deg, #ffffff 0%, #C5A059 25%, #ffffff 50%, #C5A059 75%, #ffffff 100%)',
                                backgroundSize: '200% 100%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block',
                            }}
                        >
                            COMING SOON
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl md:text-3xl text-white/90 font-medium mb-4"
                    >
                        Financial Education Courses
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
                    >
                        We're developing comprehensive courses to help you master retirement planning,
                        investment strategies, and financial security. Be the first to know when they launch!
                    </motion.p>
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 md:left-20">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                    >
                        <Bell className="w-8 h-8 text-accent" />
                    </motion.div>
                </div>

                <div className="absolute bottom-1/4 right-10 md:right-20">
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -10, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                    >
                        <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                </div>

                {/* Email Subscription Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="w-full max-w-md"
                >
                    <div className="glass-effect rounded-2xl p-8 shadow-premium">
                        <div className="flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-accent mr-2" />
                            <h3 className="text-xl font-bold text-brand">Get Notified</h3>
                        </div>
                        <p className="text-gray-600 text-center mb-6">
                            Subscribe to receive updates when our courses launch
                        </p>

                        {!subscribed ? (
                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="input-focus w-full"
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-3 gradient-accent text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-brand transition-all duration-300"
                                >
                                    Notify Me
                                </motion.button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-4"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4"
                                >
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                                <p className="text-lg font-semibold text-green-600">
                                    You're subscribed!
                                </p>
                                <p className="text-gray-600 mt-2">
                                    We'll notify you when courses are available
                                </p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/60 text-sm">
                        In the meantime, explore our{' '}
                        <a href="/services" className="text-accent hover:text-white underline transition-colors">
                            services
                        </a>
                        {' '}or{' '}
                        <a href="/contact" className="text-accent hover:text-white underline transition-colors">
                            contact us
                        </a>
                        {' '}for personalized guidance
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Courses;
