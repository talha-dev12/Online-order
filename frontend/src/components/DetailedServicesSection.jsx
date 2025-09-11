import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Dissertation Writing',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Expert guidance and writing support for your dissertation, from proposal to final submission.',
    details: 'In-depth research, professional formatting, free revisions, and plagiarism check.'
  },
  {
    title: 'Coding',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Professional coding, programming, and software development services for all levels and languages.',
    details: 'Assignments, projects, debugging, and code reviews in Python, Java, C++, JavaScript, and more.'
  },
  {
    title: 'Research Papers',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'In-depth research and writing for academic papers with proper citations and formatting.',
    details: 'Thorough research, APA/MLA formatting, expert writers, and quality assured.'
  },
  {
    title: 'Literature Reviews',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive literature reviews with critical analysis and synthesis.',
    details: 'Critical analysis, multiple sources, clear synthesis, and expert insights.'
  },
  {
    title: 'Thesis Writing',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Full thesis writing and editing services with expert academic writers.',
    details: 'Original research, expert guidance, full support, and quality guarantee.'
  },
  {
    title: 'Editing & Proofreading',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Professional editing and proofreading services to perfect your academic work.',
    details: 'Grammar check, style improvement, format fixing, and quality enhancement.'
  },
];

const DetailedServicesSection = () => {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setModalData(service)}
            >
              <img src={service.image} alt={service.title} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-accent/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300" />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
                className="absolute bottom-0 left-0 p-6 z-10 w-full bg-black/40 rounded-b-3xl"
              >
                <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-lg">{service.title}</h3>
                <p className="text-white/90 text-lg mb-2 drop-shadow">{service.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {modalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 relative">
              <button
                className="absolute top-4 right-4 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow transition-all duration-200 border border-accent/20"
                onClick={() => setModalData(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img src={modalData.image} alt={modalData.title} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h2 className="text-2xl font-bold text-primary mb-2">{modalData.title}</h2>
              <p className="text-text/80 mb-4">{modalData.details}</p>
              <button
                className="mt-4 px-8 py-3 rounded-full bg-accent text-white font-bold text-lg shadow hover:bg-primary transition-all duration-300"
                onClick={() => { setModalData(null); navigate('/contact'); setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 50); }}
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailedServicesSection;