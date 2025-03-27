import React from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';
import pes from './assets/pes.svg';
// import vit from './assets/vit.svg';
// import ias from './assets/ias.svg';

const EventHeader = () => {
  return (
    <header className="container mx-auto pt-16 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900/80 to-gray-900/60 
        backdrop-blur-xl 
        rounded-3xl 
        border border-gray-700/50 
        shadow-2xl 
        overflow-hidden">
        {/* Logo Section */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700/30">
          <div className="flex items-center space-x-6">
            {/* VIT Logo */}
            <div className="bg-white rounded-full p-2 shadow-lg">
              <img 
                src={pes} 
                alt="VIT Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            
            {/* IEEE Logos */}
            <div className="flex space-x-4">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <img 
                  src={pes}
                  alt="IEEE IAS Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="bg-white rounded-full p-2 shadow-lg">
                <img 
                  src={pes} 
                  alt="IEEE PES Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="mailto:events.sw@vit.ac.in" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ieeeiasvit" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Event Details */}
        <div className="px-12 py-12 text-center">
          <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            CODE 2.0
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            An Innovative Coding Challenge Presented by IEEE Industry Applications Society and Power & Energy Society
          </p>
          
          {/* Event Highlights */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-6 h-6 text-green-500" />
              <span className="text-lg">Kamaraj Auditorium</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Calendar className="w-6 h-6 text-blue-500" />
              <span className="text-lg">1st & 2nd April 2025</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/60 p-6 text-center">
          <div className="flex justify-center space-x-8 text-gray-300 mb-2">
            <div>
              <span className="font-semibold text-green-500 mr-2">Coordinator:</span> 
              Juhi Umrao, +91-8791468813
            </div>
            <div>
              <span className="font-semibold text-blue-500 mr-2">Co-Coordinator:</span> 
              Byri Neeraj, +91-9360739332
            </div>
          </div>
          <p className="text-gray-500">
            Contact: events.sw@vit.ac.in
          </p>
        </div>
      </div>
    </header>
  );
};

export default EventHeader;