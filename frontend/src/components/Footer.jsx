import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Us</h3>
            <p className="text-gray-200 leading-relaxed">
              We provide professional academic writing services to help students achieve their academic goals with confidence and excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors cursor-pointer">Dissertation Writing</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors cursor-pointer">Coding</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors cursor-pointer">Research Papers</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors cursor-pointer">Literature Reviews</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/academics" className="text-gray-200 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586l-8 8-8-8V4z" />
                  <path d="m3 8.414 8 8 8-8V20a1 1 0 01-1 1H4a1 1 0 01-1-1V8.414z" />
                </svg>
                <a href="mailto:sherikhan655778@gmail.com" className="text-gray-200 hover:text-white underline transition-colors">sherikhan655778@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+923056910655" className="text-gray-200 hover:text-white underline transition-colors">+923056910655</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                <a href="https://www.linkedin.com/in/kumail-abbas-500951276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white underline transition-colors">LinkedIn</a>
              </div>
              <div className="flex space-x-4 mt-4">
                {/* Social Media Buttons (placeholder href) */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56v14.91a2.54 2.54 0 01-2.54 2.54H2.54A2.54 2.54 0 010 19.47V4.56A2.54 2.54 0 012.54 2h18.92A2.54 2.54 0 0124 4.56zM7.19 19.47V9.5l7.62 4.99-7.62 4.98z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.96 4.07 7.13 1.64 4.15c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 01-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.47c0 .01 0 .01 0 0z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A8.6 8.6 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 mt-12 pt-8 text-center">
          <p className="text-gray-200">© 2025 EduNova. All rights reserved.</p>
        </div>
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
    </footer>
  );
};

export default Footer;
