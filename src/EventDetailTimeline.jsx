import React from 'react';
import { Clock, Code, Utensils, Laptop, Coffee, UserCheck, VideoIcon } from 'lucide-react';

const EventDetailedTimeline = () => {
  const timelineEvents = [
    { time: "8:00 am - 9:30 am", title: "Participant Arrival", icon: <Coffee className="w-6 h-6 text-blue-500" />, description: "Participants arrive and settle down" },
    { time: "9:30 am - 10:00 am", title: "Introduction", icon: <UserCheck className="w-6 h-6 text-green-500" />, description: "Rules Explanation and Event Briefing" },
    { time: "10:00 am - 12:00 pm", title: "Coding Round", icon: <Code className="w-6 h-6 text-purple-500" />, description: "HackerRank challenge with Mixed Difficulty" },
    { time: "12:00 pm - 1:30 pm", title: "Lunch Break", icon: <Utensils className="w-6 h-6 text-red-500" />, description: "Refreshment and Networking" },
    { time: "2:00 pm - 3:00 pm", title: "Track Selection", icon: <Laptop className="w-6 h-6 text-yellow-500" />, description: "Tracks assigned based on Leaderboard" },
    { time: "3:00 pm - 7:00 pm", title: "Ideation and Development Phase", icon: <Code className="w-6 h-6 text-indigo-500" />, description: "Project Development Phase" },
    { time: "6:00 pm", title: "Review 0", icon: <VideoIcon className="w-6 h-6 text-pink-500" />, description: "Initial Project Review" },
    { time: "7:00 pm - 8:30 pm", title: "Dinner Break", icon: <Utensils className="w-6 h-6 text-orange-500" />, description: "Evening Meal and Relaxation" }
  ];

  const dayTwoEvents = [
    { time: "11:00 am", title: "Review 1", icon: <VideoIcon className="w-6 h-6 text-pink-500" />, description: "Online Project Review" },
    { time: "2:00 pm", title: "Qualification Announcement", icon: <UserCheck className="w-6 h-6 text-green-500" />, description: "Qualifying Teams List on WhatsApp" },
    { time: "4:30 pm - 7:00 pm", title: "Final Presentation", icon: <Laptop className="w-6 h-6 text-blue-500" />, description: "Final Pitching and Judging round" }
  ];

  const tracks = [
    "Artificial Intelligence", "Blockchain", "Cybersecurity", "FinTech", "HealthTech", "AgriTech", "EdTech", "IoT & Smart Cities", "SDG - Sustainable Development"
  ];

  const renderTimeline = (events, title) => (
    <div className="relative">
      <h3 className="text-2xl font-bold text-center text-white mb-8">{title}</h3>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-green-500 h-full opacity-30"></div>
      {events.map((event, index) => (
        <div key={index} className="mb-8 flex items-center w-full relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'}`}></div>
          <div className={`w-1/2 pl-12 pr-4 py-4 ${index % 2 === 0 ? 'text-left mr-auto' : 'text-right ml-auto'} bg-gray-800/60 rounded-xl shadow-lg`}>
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
        <h2 className="text-4xl font-bold text-center mb-12 text-green-500">Event Timeline</h2>
        <div className="mb-16">{renderTimeline(timelineEvents, "Day 1")}</div>
        <div>{renderTimeline(dayTwoEvents, "Day 2")}</div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-8">Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg text-center text-white font-semibold">{track}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetailedTimeline;
