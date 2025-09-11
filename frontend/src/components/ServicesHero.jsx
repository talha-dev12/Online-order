import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = ({ backgroundImage }) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-tr from-primary via-accent to-secondary overflow-hidden">
      {backgroundImage && (
        <img src={backgroundImage} alt="Books background" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
      )}
      <div className="absolute left-0 top-0 h-full w-3 bg-accent z-10" />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-20 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl"
        >
          Discover Our <span className="text-accent">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl text-white/90 mb-8 max-w-2xl"
        >
          Innovative, reliable, and tailored academic solutions for every need.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;