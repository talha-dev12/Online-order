import React, { useState } from 'react';
import AcademicCard from '../components/AcademicCard';
import AcademicModal from '../components/AcademicModal';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroBg from '../assets/book-bg.jpg'; // Updated image
import { useNavigate } from 'react-router-dom';

const categories = [
  { key: 'all', label: 'All Services' },
  { key: 'management', label: 'Management' },
  { key: 'finance', label: 'Finance' },
  { key: 'it', label: 'Information Technology' },
  // Thesis filter removed
];

const academics = [
  // IT
  {
    category: 'it',
    title: 'Software Development',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Expert writing support for software development topics and documentation.',
    details: {
      price: '$30/page',
      benefits: ['Code documentation', 'Project reports', 'Best practices', 'Modern tech stack'],
      description: 'Comprehensive writing and documentation for software development projects, including code explanations, project reports, and more.'
    },
    demoUrl: 'https://with-andy.com/',
    demoLabel: 'Live Demo',
  },
  {
    category: 'it',
    title: 'Software Testing',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Professional writing services for software testing and QA projects.',
    details: {
      price: '$32/page',
      benefits: ['Test plans', 'Automation', 'Bug reports', 'QA documentation'],
      description: 'Expert writing for software testing projects, including test plans, automation, and bug reporting.'
    },
    demoUrl: 'https://drive.google.com/file/d/1RQiFcVas_B0DiJ75xCat2YV6Z1XVqE-V/view?usp=drive_link',
    demoLabel: 'Live Demo',
    highlight: true
  },
  {
    category: 'it',
    title: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Expert writing support for cybersecurity topics and analysis.',
    details: {
      price: '$35/page',
      benefits: ['Security analysis', 'Threat reports', 'Best practices', 'Case studies'],
      description: 'In-depth writing for cybersecurity topics, including threat analysis, security best practices, and more.'
    },
    demoUrl: 'https://drive.google.com/file/d/1aAhDha2ZMMVSGKO60TlOmh9Xbk8RIvo6/view?usp=drive_link',
    demoLabel: 'Live Demo',
    highlight: true
  },
  {
    category: 'it',
    title: 'Cloud Computing Solutions',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive support for cloud architecture and migration.',
    details: {
      price: '$28/page',
      benefits: ['Cloud migration', 'Architecture design', 'Cost optimization'],
      description: 'Writing and consulting for cloud computing projects, including migration, architecture, and optimization.'
    },
    demoUrl: 'https://resilient-moonbeam-529a27.netlify.app/',
    demoLabel: 'Open Demo',
  },
  {
    category: 'it',
    title: 'IT Consulting',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Strategic IT consulting to align technology with business objectives.',
    details: {
      price: '$30/page',
      benefits: ['IT strategy', 'Business alignment', 'Tech roadmaps'],
      description: 'Consulting and writing for IT strategy, business alignment, and technology roadmaps.'
    },
    demoUrl: 'https://drive.google.com/file/d/1mOa6XMR4HIJA_5AW1G9kVPBNbZGVZbj4/view?usp=drive_link',
    demoLabel: 'Live Demo',
  },
  {
    category: 'it',
    title: 'Network Infrastructure Optimization',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Enhance and optimize your network infrastructure for peak performance.',
    details: {
      price: '$29/page',
      benefits: ['Network design', 'Performance tuning', 'Security'],
      description: 'Writing and consulting for network infrastructure, including design, optimization, and security.'
    }
  },
  // Management
  {
    category: 'management',
    title: 'Business Strategy Analysis',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Expert analysis and writing support for business strategy cases and reports.',
    details: {
      price: '$25/page',
      benefits: ['Expert business analysts', 'Strategic frameworks', 'Real-world case studies', 'Industry analysis'],
      description: 'Comprehensive support for developing and analyzing business cases, strategic management reports, and organizational studies.'
    },
    demoUrl: 'https://drive.google.com/file/d/12LIFFyUYPVpAWY-dXJhftbHaNztioMwc/view?usp=drive_link',
    demoLabel: 'Live Demo',
  },
  {
    category: 'management',
    title: 'Operations Management',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive analysis of operations management concepts and practices.',
    details: {
      price: '$27/page',
      benefits: ['Process optimization', 'Supply chain', 'Lean management'],
      description: 'Writing and analysis for operations management, including process optimization and supply chain.'
    },
    highlight: true
  },
  {
    category: 'management',
    title: 'Project Management',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Professional writing support for project management assignments and case studies.',
    details: {
      price: '$26/page',
      benefits: ['Project planning', 'Case studies', 'Agile/Scrum'],
      description: 'Support for project management assignments, including planning, case studies, and agile methodologies.'
    }
  },
  {
    category: 'management',
    title: 'Change Management Consulting',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Guidance on implementing effective change management initiatives.',
    details: {
      price: '$28/page',
      benefits: ['Change frameworks', 'Stakeholder management', 'Implementation plans'],
      description: 'Consulting and writing for change management, including frameworks and stakeholder management.'
    }
  },
  {
    category: 'management',
    title: 'Leadership Development Program',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Tailored programs to enhance leadership skills and competencies.',
    details: {
      price: '$29/page',
      benefits: ['Leadership skills', 'Competency development', 'Workshops'],
      description: 'Programs and writing for leadership development, including skills, competencies, and workshops.'
    },
    demoUrl: 'https://docs.google.com/document/d/1QsXgjv-Mh_O7dN4ebibsS5-btXcFPM-h/edit?tab=t.0#heading=h.715vutkcvww7',
    demoLabel: 'Live Demo',
  },
  {
    category: 'management',
    title: 'Organizational Behavior Analysis',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Insightful analysis of organizational dynamics and culture.',
    details: {
      price: '$27/page',
      benefits: ['Culture analysis', 'Team dynamics', 'Organizational change'],
      description: 'Writing and analysis for organizational behavior, including culture and team dynamics.'
    }
  },
  // Finance
  {
    category: 'finance',
    title: 'Financial Analysis',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'In-depth financial analysis and reporting services.',
    details: {
      price: '$28/page',
      benefits: ['Financial modeling', 'Reporting', 'Forecasting'],
      description: 'Writing and analysis for financial analysis, including modeling, reporting, and forecasting.'
    },
    demoUrl: 'https://drive.google.com/file/d/1MTJlf7t47fwbZxRi9JylgRFUuoF4Y1e2/view?usp=drive_link',
    demoLabel: 'Live Demo',
  },
  {
    category: 'finance',
    title: 'Investment Banking',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Expert writing support for investment banking topics and analysis.',
    details: {
      price: '$32/page',
      benefits: ['M&A', 'Valuation', 'Deal structuring'],
      description: 'Support for investment banking topics, including M&A, valuation, and deal structuring.'
    }
  },
  {
    category: 'finance',
    title: 'Corporate Finance',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive corporate finance writing and analysis services.',
    details: {
      price: '$30/page',
      benefits: ['Capital budgeting', 'Financial planning', 'Risk analysis'],
      description: 'Writing and analysis for corporate finance, including budgeting, planning, and risk analysis.'
    },
    highlight: true
  },
  {
    category: 'finance',
    title: 'Tax Consulting',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Expert guidance on tax planning and compliance.',
    details: {
      price: '$27/page',
      benefits: ['Tax planning', 'Compliance', 'Filing support'],
      description: 'Consulting and writing for tax planning, compliance, and filing support.'
    }
  },
  {
    category: 'finance',
    title: 'Audit and Assurance',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Professional audit services to ensure financial integrity and transparency.',
    details: {
      price: '$29/page',
      benefits: ['Audit reports', 'Internal controls', 'Transparency'],
      description: 'Writing and consulting for audit and assurance, including reports and internal controls.'
    }
  },
  {
    category: 'finance',
    title: 'Financial Forecasting',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Data-driven forecasting models to predict future financial performance.',
    details: {
      price: '$30/page',
      benefits: ['Forecasting models', 'Data analysis', 'Scenario planning'],
      description: 'Writing and analysis for financial forecasting, including models, data analysis, and scenario planning.'
    }
  },
  // Thesis (only one entry)
  {
    category: 'thesis',
    title: 'Dissertation/Thesis Writing',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Professional dissertation and thesis writing services for all academic levels.',
    details: {
      price: '$40/page',
      benefits: ['Original research', 'Expert guidance', 'Formatting & editing', 'Plagiarism-free'],
      description: 'Comprehensive support for dissertation and thesis writing, including research, writing, formatting, and editing for all academic levels.'
    },
    demoUrl: 'https://docs.google.com/document/d/1v68-F8XJKRDbHicRP02XGySCmll3kD8K/edit?usp=drive_web&ouid=111743877213374431791&rtpof=true',
    demoLabel: 'Live Demo',
    highlight: true
  },
];

const academicServices = [
  {
    title: 'MERN Stack Development',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Full-stack web development using MongoDB, Express, React, and Node.js. Project work, assignments, and live coding help.',
    details: 'Get expert help with MERN stack projects, assignments, and coding challenges. From setup to deployment, we cover it all.'
  },
  {
    title: 'Programming, Coding & Testing',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'Support for all programming languages, coding assignments, and software testing tasks.',
    details: 'We handle assignments and projects in Python, Java, C++, JavaScript, and more. Unit testing, debugging, and code reviews included.'
  },
  {
    title: 'Dissertation Writing',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Professional dissertation writing for undergraduate, masters, and PhD students.',
    details: 'Original research, expert guidance, formatting, and editing for all academic levels. Plagiarism-free and fully referenced.'
  },
  {
    title: 'Assignments',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Help with all types of academic assignments and coursework.',
    details: 'From essays to case studies, we provide tailored support for your academic success.'
  },
  {
    title: 'Finance',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Finance assignments, analysis, and business case support.',
    details: 'Financial modeling, reporting, forecasting, and more. Get help with all finance-related coursework.'
  },
  {
    title: 'BPP Uni Assignment',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Specialized support for BPP University assignments and modules.',
    details: 'Expert guidance for BPP coursework, including law, business, and finance modules.'
  },
  {
    title: 'University of London Assignment',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Expert support for University of London assignments and modules.',
    details: 'Guidance for University of London coursework, including law, business, and finance modules.'
  },
  {
    title: 'University of Manchester Assignment',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    description: 'Specialized help for University of Manchester assignments and academic work.',
    details: 'Support for Manchester coursework, essays, and projects across all disciplines.'
  },
  {
    title: 'University of Birmingham Assignment',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Assignment and coursework help for University of Birmingham students.',
    details: 'Expert guidance for Birmingham modules, including business, law, and science.'
  },
  {
    title: 'University of Leeds Assignment',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'Professional support for University of Leeds assignments and projects.',
    details: 'Help with Leeds coursework, essays, and research projects.'
  },
  {
    title: 'University of Glasgow Assignment',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Guidance for University of Glasgow assignments and academic modules.',
    details: 'Support for Glasgow coursework, including law, business, and science.'
  },
];

const Academics = () => {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-64 flex items-center justify-center overflow-hidden min-h-[50vh]">
        <img src={heroBg} alt="Academics background" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-accent/60 to-secondary/80 z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-left max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl"
          >
            Academic Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl text-white/90 mb-8 max-w-2xl"
          >
            Explore our academic support and resources for every stage of your educational journey.
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {academicServices.map((service, idx) => (
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
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/923056910655"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300 border-4 border-white"
          style={{ boxShadow: '0 4px 24px rgba(34,197,94,0.3)' }}
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.938 6.563L4 29l7.625-1.938A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-2.042 0-4.042-.563-5.75-1.625l-.406-.25-4.542 1.156 1.188-4.438-.25-.406C6.646 19.042 6.083 17.042 6.083 15c0-5.438 4.479-9.917 9.917-9.917S25.917 9.562 25.917 15 21.438 24.917 16 24.917zm6.021-7.229c-.333-.167-1.979-.979-2.292-1.104-.312-.125-.542-.188-.771.125-.229.312-.875 1.104-1.073 1.333-.198.229-.396.25-.729.083-.333-.167-1.406-.519-2.68-1.654-.99-.883-1.66-1.979-1.854-2.312-.188-.333-.021-.512.146-.679.146-.146.333-.375.5-.563.167-.188.229-.312.333-.521.104-.208.052-.396-.021-.563-.073-.167-.771-1.854-1.062-2.542-.281-.667-.563-.562-.771-.573-.198-.01-.427-.012-.656-.012-.229 0-.604.083-.917.396-.312.312-1.188 1.146-1.188 2.792 0 1.646 1.208 3.229 1.375 3.458.167.229 2.375 3.646 5.75 4.958.802.333 1.427.531 1.917.677.805.256 1.539.22 2.12.134.646-.094 1.979-.812 2.26-1.597.281-.786.281-1.459.198-1.597-.083-.138-.302-.219-.635-.385z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Academics; 