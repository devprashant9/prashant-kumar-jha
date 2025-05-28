import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear status when user starts typing again
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      try {
        // Send email using EmailJS
        const result = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your EmailJS service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
          {
            from_name: formData.name,
            reply_to: formData.email,
            to_name: "Prashant",
            message: formData.message,
          }
        );

        if (result.text === 'OK') {
          setSubmitStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
          });
          setFormData({ name: '', email: '', message: '' });
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, something went wrong. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Status Message */}
        {submitStatus.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg mb-6 text-center ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.form
          ref={form}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50"
        >
          {/* Name Field */}
          <div>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative"
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-colors`}
                placeholder="Your name"
              />
            </motion.div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-400"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative"
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-colors`}
                placeholder="your.email@example.com"
              />
            </motion.div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-400"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="relative"
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-colors resize-none`}
                placeholder="Your message..."
              />
            </motion.div>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-red-400"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium 
              ${isSubmitting 
                ? 'bg-blue-500/50 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'} 
              transition-colors duration-300 flex items-center justify-center gap-2`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>Or reach out directly via:</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:kumarjha183@gmail.com" className="hover:text-blue-400 transition-colors">
              kumarjha183@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 