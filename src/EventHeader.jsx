import React from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';
import pes from './assets/pes.svg';
import vit from './assets/vit.svg';
import ias from './assets/IAS-logo-shadowbg.svg';

const EventHeader = () => {
  return (
    <header className="container mx-auto pt-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-md rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
        
        {/* Logo Section */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center px-6 py-4 border-b border-gray-700/30 space-y-4 sm:space-y-0">
          <img src={vit} alt="VIT Logo" className="h-12 sm:h-16 object-contain" />
          
          <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-4">
            <img src={ias} alt="IEEE IAS Logo" className="h-14 sm:h-20 object-contain" />
            <img src={pes} alt="IEEE PES Logo" className="h-14 sm:h-20 object-contain" />
          </div>
        </div>

        {/* Event Details */}
        <div className="px-6 sm:px-12 py-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            CODEDOC 2.0
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            An Innovative Coding Challenge Presented by IEEE Industry Applications Society and Power & Energy Society
          </p>
          
          {/* Event Highlights */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-6">
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-green-500" />
              <span className="text-sm sm:text-lg">Kamaraj Auditorium</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500" />
              <span className="text-sm sm:text-lg">1st & 2nd April 2025</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700/30 p-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-gray-300 mb-2">
            <div>
              <span className="font-semibold text-green-500">Coordinator:</span> Juhi Umrao, +91-8791468813
            </div>
            <div>
              <span className="font-semibold text-blue-500">Co-Coordinator:</span> Byri Neeraj, +91-9360739332
            </div>
          </div>
          <p className="text-gray-500 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" /> ieee.ias@vit.ac.in
            <Mail className="w-5 h-5 text-gray-400" /> ieee.pes@vit.ac.in
          </p>
        </div>
      </div>
    </header>
  );
};

export default EventHeader;