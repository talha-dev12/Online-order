import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ image, title, description, price, inView, index }) => {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl p-8 border-2 border-accent/20 hover:border-accent hover:shadow-2xl hover:-translate-y-2 duration-300 group flex flex-col items-center text-center"
      whileHover={{ y: -8, boxShadow: '0 8px 32px 0 rgba(124,58,237,0.15)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-20 h-20 mb-6 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-text/80 mb-6 leading-relaxed">{description}</p>
      <motion.p
        className="text-lg font-bold text-accent"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      >
        {price}
      </motion.p>
    </motion.div>
  );
};

export default ServiceCard;