import React from 'react';
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const particlesOptions = {
  background: { color: 'transparent' },
  fpsLimit: 60,
  particles: {
    color: { value: '#10B981' },
    links: { enable: true, color: '#10B981', distance: 120, opacity: 0.2 },
    move: { enable: true, speed: 1 },
    number: { value: 30 },
    opacity: { value: 0.3 },
    shape: { type: 'circle' },
    size: { value: 2 },
  },
};

const Hero = ({ backgroundImage, animatedHero }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-tr from-primary via-accent to-secondary overflow-hidden">
      {backgroundImage && (
        <img src={backgroundImage} alt="Books background" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply z-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-accent/60 to-secondary/80 z-0" />
      {animatedHero && <div className="absolute inset-0 bg-black/40 z-10" />}
      <div className={`relative z-20 max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-24 lg:py-32 text-center${animatedHero ? '' : ''}`}>
        {animatedHero ? (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-xl"
            >
              Achieve Academic Excellence<br />
              with <span className="text-accent">EduNova</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              Innovative writing solutions for essays, dissertations, research papers, and more. Let us help you shine.
            </motion.p>
          </>
        ) : (
          <>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-xl">
              Achieve Academic Excellence<br />
              with <span className="text-accent">EduNova</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-10 max-w-2xl mx-auto">
              Innovative writing solutions for essays, dissertations, research papers, and more. Let us help you shine.
            </p>
          </>
        )}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-4 rounded-full text-xl font-bold bg-white text-accent shadow-lg transition-all duration-300 hover:bg-accent hover:text-white focus:outline-none"
          onClick={handleClick}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;