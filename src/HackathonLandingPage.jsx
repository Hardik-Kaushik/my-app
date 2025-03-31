import React, { useRef } from 'react';
import { 
  Clock, 
  ExternalLink, 
  Info,
  Target
} from 'lucide-react';
import EventDetailedTimeline from './EventDetailTimeline';
import EventHeader from './EventHeader';

const HackathonLandingPage = () => {
  const registrationRef = useRef(null);
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen gap-y-24  flex flex-col text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-4">
            <img 
              src="/api/placeholder/50/50" 
              alt="Hackathon Logo" 
              className="w-10 h-10 rounded-full ring-2 ring-green-500"
            />
            <h1 className="text-2xl font-bold text-white tracking-wider">CODE 2.0</h1>
          </div>
          <div className="flex space-x-6 items-center">
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-green-400 transition-colors flex items-center space-x-2"
            >
              <Info size={18} />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection(timelineRef)}
              className="hover:text-green-400 transition-colors flex items-center space-x-2"
            >
              <Clock size={18} />
              <span>Timeline</span>
            </button>
            <button 
              onClick={() => scrollToSection(registrationRef)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all flex items-center space-x-2"
            >
              <Target size={18} />
              <span>Register</span>
            </button>
          </div>
        </div>
      </nav>
     <EventHeader/>
      {/* Hero Section */}
      

      {/* About Section */}
      <section 
        ref={aboutRef} 
        className="container mx-auto px-6 py-16 bg-gray-900/50 backdrop-blur-md"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center text-green-500">
            About the Event
          </h3>
          <div className="bg-gray-800/60 p-8 rounded-xl shadow-2xl border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
              euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, 
              euismod aliquam nisl nunc euismod. Sed euismod, nisi vel 
              consectetur interdum, nisl nunc egestas nisi, euismod aliquam 
              nisl nunc euismod.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
              iaculis vel consectetur vitae, facilisis at erat. Nulla facilisi. 
              Duis aliquet egestas purus in blandit.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={timelineRef} 
        className="container mx-auto px-6 py-16"
      >
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center text-green-500 flex items-center justify-center">
            <Clock className="mr-3" /> Event Timeline
          </h3>
          <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-gray-700/50">
            <div className="grid grid-cols-2 gap-4">
              <span className="font-medium text-gray-300">Date:</span>
              <span className="text-right text-white">1st & 2nd April 2025</span>
              
              <span className="font-medium text-gray-300">Time:</span>
              <span className="text-right text-white">8:00 AM Onwards</span>
              
              <span className="font-medium text-gray-300">Venue:</span>
              <span className="text-right text-white">Kamaraj Auditorium</span>
            </div>
          </div>
        </div>
      </section>
      <EventDetailedTimeline/>
     

      {/* Registration Section */}
      <section 
        ref={registrationRef} 
        className="container mx-auto px-6 py-16"
      >
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center text-green-500">
            Registration
          </h3>
          <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-gray-700/50 text-center">
            <a 
              href="https://www.hackerrank.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 space-x-3"
            >
              <span>Register on HackerRank</span>
              <ExternalLink />
            </a>
            <p className="text-gray-400 mt-4 text-sm">
              Click above to proceed to HackerRank registration
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md p-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Contact: events.sw@vit.ac.in
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:ieee.ias@vit.ac.in" 
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                IEEE IAS
              </a>
              <a 
                href="mailto:ieee.pes@vit.ac.in" 
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                IEEE PES
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HackathonLandingPage;