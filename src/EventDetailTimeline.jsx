import React from 'react';
import { Clock, Code, Utensils, Laptop, Coffee, UserCheck, VideoIcon } from 'lucide-react';

const EventDetailedTimeline = () => {
  const timelineEvents = [
    {
      time: "8:00 am - 9:30 am",
      title: "Participant Arrival",
      icon: <Coffee className="w-6 h-6 text-blue-500" />,
      description: "Participants arrive and settle down"
    },
    {
      time: "9:30 am - 10:00 am",
      title: "Introduction",
      icon: <UserCheck className="w-6 h-6 text-green-500" />,
      description: "Rules explanation and event briefing"
    },
    {
      time: "10:00 am - 12:00 pm",
      title: "Coding Round",
      icon: <Code className="w-6 h-6 text-purple-500" />,
      description: "HackerRank challenge with mixed difficulty"
    },
    {
      time: "12:00 pm - 1:30 pm",
      title: "Lunch Break",
      icon: <Utensils className="w-6 h-6 text-red-500" />,
      description: "Refreshment and networking"
    },
    {
      time: "2:00 pm - 3:00 pm",
      title: "Track Selection",
      icon: <Laptop className="w-6 h-6 text-yellow-500" />,
      description: "Teams assigned based on leaderboard"
    },
    {
      time: "3:00 pm - 7:00 pm",
      title: "Ideation & Coding",
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      description: "Project development phase"
    },
    {
      time: "6:00 pm",
      title: "Review 0",
      icon: <VideoIcon className="w-6 h-6 text-pink-500" />,
      description: "Initial project review"
    },
    {
      time: "7:00 pm - 8:30 pm",
      title: "Dinner Break",
      icon: <Utensils className="w-6 h-6 text-orange-500" />,
      description: "Evening meal and relaxation"
    }
  ];

  const dayTwoEvents = [
    {
      time: "11:00 am",
      title: "Review 1",
      icon: <VideoIcon className="w-6 h-6 text-pink-500" />,
      description: "Online project review"
    },
    {
      time: "2:00 pm",
      title: "Qualification Announcement",
      icon: <UserCheck className="w-6 h-6 text-green-500" />,
      description: "Qualifying teams list on WhatsApp"
    },
    {
      time: "4:30 pm - 7:00 pm",
      title: "Final Presentation",
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
      description: "Concluding project presentations"
    }
  ];

  const renderTimeline = (events, title, day) => (
    <div className="relative">
      <h3 className="text-2xl font-bold text-center text-white mb-8">{title}</h3>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-green-500 h-full opacity-30"></div>
      
      {events.map((event, index) => (
        <div 
          key={index} 
          className="mb-8 flex items-center w-full relative"
        >
          <div className={`
            absolute left-1/2 transform -translate-x-1/2 
            w-4 h-4 rounded-full 
            ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'}
          `}></div>
          
          <div className={`
            w-1/2 pl-12 pr-4 py-4 
            ${index % 2 === 0 ? 'text-left mr-auto' : 'text-right ml-auto'}
            bg-gray-800/60 rounded-xl shadow-lg
          `}>
            <div className="flex items-center space-x-3">
              {event.icon}
              <h4 className="text-lg font-semibold text-white">{event.title}</h4>
            </div>
            <p className="text-gray-400 mt-2">{event.time}</p>
            <p className="text-gray-300 mt-1">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-500">
          Event Timeline
        </h2>
        
        <div className="mb-16">
          {renderTimeline(timelineEvents, "Day 1", 1)}
        </div>
        
        <div>
          {renderTimeline(dayTwoEvents, "Day 2", 2)}
        </div>

        <div className="mt-12 bg-gray-800/60 p-6 rounded-xl">
          <h4 className="text-xl font-semibold text-white mb-4">Technical Details</h4>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <strong>Website Editing:</strong> Technical Team
            </div>
            <div>
              <strong>Design:</strong> Instagram Grid & Stories
            </div>
            <div>
              <strong>Venue & Funds:</strong> IEEE IAS
            </div>
            <div>
              <strong>Sponsors:</strong> IEEE – PES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailedTimeline;