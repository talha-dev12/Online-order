import React, { useState, lazy } from 'react';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import heroBg from '../assets/book-bg.jpg'; // Updated image

const whatsappNumber = '+923056910655';
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

const LazyMap = lazy(() => Promise.resolve({
  default: () => (
    <iframe
      title="EduNova Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.816279779751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0f7b1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
      width="100%"
      height="220"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-56 md:h-64 lg:h-72"
    ></iframe>
  )
}));

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New inquiry from EduNova website:%0A%0AName: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0A%0AMessage:%0A${form.message}`;
    const url = `${whatsappLink}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-tr from-primary via-accent to-secondary overflow-hidden"
      >
        <img src={heroBg} alt="Books background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
        <div className="absolute left-0 top-0 h-full w-3 bg-accent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-20 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl"
          >
            Contact <span className="text-accent">EduNova</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-white/90 mb-8 max-w-2xl"
          >
            Get in touch with our expert team to discuss your academic writing needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-neutral"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info & Map */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <p className="text-gray-700 mb-8">We're here to help you achieve academic excellence. Reach out to us through any of the following channels:</p>
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.15)' }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-4 border-2 border-transparent hover:border-accent transition-all duration-300 group"
                >
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <svg className="w-7 h-7 text-accent group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <a href="mailto:sherikhan655778@gmail.com" className="text-gray-700 text-sm hover:text-accent underline">sherikhan655778@gmail.com</a>
                    <div className="text-gray-500 text-xs">We'll respond within 24 hours</div>
                  </div>
                </motion.div>
                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.15)' }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-4 border-2 border-transparent hover:border-accent transition-all duration-300 group"
                >
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <svg className="w-7 h-7 text-accent group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <a href="tel:+923056910655" className="text-gray-700 text-sm hover:text-accent underline">+923056910655</a>
                    <div className="text-gray-500 text-xs">24/7 Available</div>
                  </div>
                </motion.div>
                {/* WhatsApp */}
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.15)' }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-4 border-2 border-transparent hover:border-accent transition-all duration-300 group"
                >
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <svg className="w-7 h-7 text-accent group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"/><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/kumail-abbas-500951276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm hover:text-accent underline">kumail-abbas-500951276</a>
                    <div className="text-gray-500 text-xs">Connect with us on LinkedIn</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {/* Map Placeholder - lazy load */}
            <React.Suspense fallback={<div className="rounded-2xl overflow-hidden shadow-lg border-4 border-accent/20 bg-white h-56 md:h-64 lg:h-72 flex items-center justify-center text-accent font-bold">Loading map...</div>}>
              <LazyMap />
            </React.Suspense>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <div className="space-y-6">
              <div className="relative">
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="peer w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent" />
                <label className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs bg-white px-1">Your Name</label>
              </div>
              <div className="relative">
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="peer w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent" />
                <label className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs bg-white px-1">Email Address</label>
              </div>
              <div className="relative">
                <select name="subject" value={form.subject} onChange={handleChange} required className="peer w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent">
                  <option value="">Select a service</option>
                  <option value="Dissertation Writing">Dissertation Writing</option>
                  <option value="Essay Writing">Essay Writing</option>
                  <option value="Research Paper">Research Paper</option>
                  <option value="Thesis">Thesis</option>
                  <option value="Other">Other</option>
                </select>
                <label className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs bg-white px-1">Subject</label>
              </div>
              <div className="relative">
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="peer w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent" />
                <label className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs bg-white px-1">Your Message</label>
              </div>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg focus:outline-none"
                onClick={handleSubmit}
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <CallToAction />
    </div>
  );
};

export default Contact; 