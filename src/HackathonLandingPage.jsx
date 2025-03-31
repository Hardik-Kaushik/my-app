import React, { useRef, useState } from 'react';
import { Clock, ExternalLink, Info, Target, Menu, X } from 'lucide-react';
import EventDetailedTimeline from './EventDetailTimeline';
import EventHeader from './EventHeader';
import pic from './assets/Untitled design.png';

const HackathonLandingPage = () => {
  const registrationRef = useRef(null);
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className="min-h-screen flex flex-col text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={pic} alt="Hackathon Logo" className="w-10 h-10 rounded-full ring-2 ring-green-500" />
            <h1 className="text-2xl font-bold text-white tracking-wider">CODEDOC 2.0</h1>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links (Desktop & Mobile) */}
          <div className={`absolute md:static top-16 left-0 right-0 bg-black/90 md:bg-transparent transition-transform transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0 md:flex md:items-center md:space-x-6 text-center md:text-left`}>
            <button onClick={() => scrollToSection(aboutRef)} className="block py-3 md:py-0 text-white hover:text-green-400 transition-colors flex justify-center md:justify-start items-center space-x-2">
              <Info size={18} />
              <span>About</span>
            </button>
            <button onClick={() => scrollToSection(timelineRef)} className="block py-3 md:py-0 text-white hover:text-green-400 transition-colors flex justify-center md:justify-start items-center space-x-2">
              <Clock size={18} />
              <span>Timeline</span>
            </button>
            <button onClick={() => scrollToSection(registrationRef)} className="block py-3 md:py-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all flex justify-center md:justify-start items-center space-x-2">
              <Target size={18} />
              <span>Register</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Offset for Navbar */}
      <div className="pt-20 md:pt-24">
        <EventHeader />

        {/* About Section */}
<section ref={aboutRef} className="container mx-auto px-6 py-16 bg-gray-900/50 backdrop-blur-md">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      About the Event
    </h3>
    <div className="bg-gray-800/60 p-8 rounded-xl shadow-2xl border border-gray-700/50">
      <p className="text-xl text-gray-200 leading-relaxed mb-6 font-light tracking-wide text-center">
        CodeDoc 2.0 is the second edition of IEEE IAS’s flagship hackathon, CodeDoc—a high-energy coding battleground where logic meets speed, and innovation takes the spotlight. This time, IEEE IAS and IEEE PES come together to present an even bigger, bolder, and more challenging edition.
        <br></br><br></br>
        This hackathon isn’t just about coding; it’s about solving real-world problems, optimizing solutions, and pushing the boundaries of technical excellence. Whether you're a seasoned programmer or an aspiring developer, CodeDoc 2.0 is your chance to build, collaborate, and outcode the competition.
        <br></br><br></br>
      </p>
      <div className="space-y-3 text-left text-xl text-gray-200 mb-6">
        <p className="flex items-center justify-center"><span className="text-blue-400 text-2xl mr-3">🔹</span> <span>Competitive Coding Meets Innovation – Solve algorithmic challenges and apply your problem-solving skills.</span></p>
        <p className="flex items-center justify-center"><span className="text-blue-400 text-2xl mr-3">🔹</span> <span>Hack, Build, and Pitch – Develop impactful solutions and showcase them to industry experts.</span></p>
        <p className="flex items-center justify-center"><span className="text-blue-400 text-2xl mr-3">🔹</span> <span>Real-World Challenges – Work on projects that can create meaningful change.</span></p>
      </div>
      <p className="text-xl text-gray-200 leading-relaxed font-light tracking-wide text-center">
        Get ready to think fast, code smart, and innovate fearlessly—because only the best will rise to claim the ultimate coding crown! 🚀
      </p>
      <div className="space-y-2 mt-8">
        <h4 className="text-xl font-semibold mb-4 text-green-400">Rules & Guidelines</h4>
        <ul className="space-y-3 text-center flex flex-col items-center">
          <li className="flex items-start justify-center"><span className="text-blue-400 text-xl font-bold mr-3">•</span> <span className="text-gray-200 text-lg">Each team must have 2 to 4 members.</span></li>
          <li className="flex items-start justify-center"><span className="text-blue-400 text-xl font-bold mr-3">•</span> <span className="text-gray-200 text-lg">All projects must be original. Plagiarism or copying will lead to disqualification.</span></li>
          <li className="flex items-start justify-center"><span className="text-blue-400 text-xl font-bold mr-3">•</span> <span className="text-gray-200 text-lg">All coding, ideation and submission deadlines must be strictly followed.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>


        {/* Timeline Section */}
        <section ref={timelineRef} className="container mx-auto px-6 py-16">
          <div className="max-w-xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-center text-green-500 flex items-center justify-center"><Clock className="mr-3" /> Schedule at a Glance</h3>
            <div className="bg-light-blue-800/60 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-gray-700/50">
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
        <EventDetailedTimeline />

        {/* Registration Section */}
        <section ref={registrationRef} className="container mx-auto px-6 py-16">
          <div className="max-w-xl mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-center text-green-500">Registration</h3>
            <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-gray-700/50 text-center">
              <a href="https://www.hackerrank.com/codedoc-2-0" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 space-x-3">
                <span>Register on HackerRank</span>
                <ExternalLink />
              </a>
              <p className="text-gray-400 mt-4 text-sm">Click above to proceed to HackerRank registration</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HackathonLandingPage;
