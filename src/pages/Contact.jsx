import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../services/contactService';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.gender) {
            newErrors.gender = 'Please select a gender';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Message is required';
        } else if (formData.description.trim().length < 10) {
            newErrors.description = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const result = await submitContactForm(formData);

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    gender: '',
                    description: ''
                });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            content: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: Mail,
            title: 'Email',
            content: 'info@yourfinanceson.com',
            link: 'mailto:info@yourfinanceson.com'
        },
        {
            icon: MapPin,
            title: 'Address',
            content: '123 Financial Street, Suite 100, New York, NY 10001',
            link: null
        },
        {
            icon: Clock,
            title: 'Office Hours',
            content: 'Mon-Fri: 9:00 AM - 5:00 PM EST',
            link: null
        }
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
                            Get In Touch
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                            We're here to help you secure your financial future. Reach out today!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white rounded-2xl shadow-premium p-8">
                                <h2 className="text-3xl font-serif font-bold text-brand mb-6">
                                    Send Us a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`input-focus ${errors.name ? 'input-error' : ''}`}
                                            placeholder="John Doe"
                                        />
                                        <AnimatePresence>
                                            {errors.name && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-alert text-sm mt-1 flex items-center"
                                                >
                                                    <AlertCircle className="w-4 h-4 mr-1" />
                                                    {errors.name}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`input-focus ${errors.email ? 'input-error' : ''}`}
                                            placeholder="john@example.com"
                                        />
                                        <AnimatePresence>
                                            {errors.email && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-alert text-sm mt-1 flex items-center"
                                                >
                                                    <AlertCircle className="w-4 h-4 mr-1" />
                                                    {errors.email}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Gender Field */}
                                    <div>
                                        <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Gender *
                                        </label>
                                        <select
                                            id="gender"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className={`input-focus ${errors.gender ? 'input-error' : ''}`}
                                        >
                                            <option value="">Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                            <option value="Prefer not to say">Prefer not to say</option>
                                        </select>
                                        <AnimatePresence>
                                            {errors.gender && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-alert text-sm mt-1 flex items-center"
                                                >
                                                    <AlertCircle className="w-4 h-4 mr-1" />
                                                    {errors.gender}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Description Field */}
                                    <div>
                                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`input-focus resize-none ${errors.description ? 'input-error' : ''}`}
                                            placeholder="Tell us how we can help you..."
                                        />
                                        <div className="flex justify-between items-center mt-1">
                                            <AnimatePresence>
                                                {errors.description && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="text-alert text-sm flex items-center"
                                                    >
                                                        <AlertCircle className="w-4 h-4 mr-1" />
                                                        {errors.description}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                            <span className="text-sm text-gray-500">
                                                {formData.description.length} characters
                                            </span>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'gradient-accent shadow-glow hover:shadow-glow-brand'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>

                                {/* Success/Error Messages */}
                                <AnimatePresence>
                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700"
                                        >
                                            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                                            <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                                        </motion.div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700"
                                        >
                                            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                                            <span>Oops! Something went wrong. Please try again or contact us directly.</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-brand mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Have questions? We're here to help. Reach out through any of the channels below,
                                    and our team will get back to you as soon as possible.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-white rounded-xl shadow-premium p-6 hover-lift"
                                    >
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                                                    <info.icon className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-bold text-brand mb-1">
                                                    {info.title}
                                                </h3>
                                                {info.link ? (
                                                    <a
                                                        href={info.link}
                                                        className="text-gray-600 hover:text-accent transition-colors duration-300"
                                                    >
                                                        {info.content}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600">
                                                        {info.content}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gradient-to-br from-brand/5 to-accent/5 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-brand mb-3">
                                    Why Choose Us?
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Free initial consultation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Personalized financial strategies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>14+ years of experience</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>10,000+ satisfied clients</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
