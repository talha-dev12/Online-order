import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FeaturesHighlight from '../components/FeaturesHighlight';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import heroBg from '../assets/book-bg.jpg'; // Add your image to assets and import

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <main className="flex-grow">
        <Hero backgroundImage={heroBg} animatedHero />
        <ServicesSection />
        <FeaturesHighlight />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
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

export default Home;
