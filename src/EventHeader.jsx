import React from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';
import pes from './assets/pes.svg';
import vit from './assets/vit.svg';
import ias from './assets/ias.svg';

const EventHeader = () => {
  return (
    <header className="container mx-auto pt-16 px-6">
      <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-md
        rounded-3xl 
        border border-white/40
        shadow-2xl 
        overflow-hidden">
        {/* Logo Section */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700/30">
            {/* VIT Logo */} 
              <img 
                src={vit} 
                alt="VIT Logo" 
                className="w-auto h-full max-h-16 object-contain"
              />
            
            {/* IEEE Logos */}
            <div className="flex space-x-4">
                <img 
                  src={ias}
                  alt="IEEE IAS Logo" 
                  className="w-auto h-24 object-contain"
                />
                <img 
                  src={pes} 
                  alt="IEEE PES Logo" 
                  className="w-auto h-24 object-contain"
                />
            </div>
        </div>

        {/* Event Details */}
        <div className="px-12 py-12 text-center">
          <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            CODEDOC 2.0
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
        <div className="border-t border-gray-700/30 p-6 text-center">
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