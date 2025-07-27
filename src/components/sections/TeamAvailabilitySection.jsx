import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamAvailabilitySection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  // Generate next 30 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const timeSlots = [
    { time: '09:00 AM', available: true, team: ['Rohan', 'Santosh'] },
    { time: '10:00 AM', available: true, team: ['Rohan', 'Priya'] },
    { time: '11:00 AM', available: true, team: ['Rohan', 'Santosh', 'Priya'] },
    { time: '12:00 PM', available: false, team: [] },
    { time: '01:00 PM', available: true, team: ['Santosh', 'Priya'] },
    { time: '02:00 PM', available: true, team: ['Rohan', 'Santosh'] },
    { time: '03:00 PM', available: true, team: ['Rohan', 'Priya'] },
    { time: '04:00 PM', available: true, team: ['Santosh', 'Priya'] },
    { time: '05:00 PM', available: true, team: ['Rohan', 'Santosh', 'Priya'] }
  ];

  const teamMembers = [
    { name: 'Rohan Kumar', role: 'Founder & CEO', availability: 'Mon-Fri, 9AM-6PM' },
    { name: 'Santosh', role: 'Lead Developer', availability: 'Mon-Fri, 9AM-6PM' },
    { name: 'Priya Singh', role: 'UI/UX Designer', availability: 'Mon-Fri, 10AM-7PM' },
    { name: 'Rohan Mehta', role: 'Mobile App Specialist', availability: 'Mon-Fri, 9AM-6PM' }
  ];

  const getAvailabilityStatus = (date) => {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    if (isWeekend) return 'weekend';
    
    // Simulate some busy days
    const day = date.getDate();
    if (day % 7 === 0) return 'busy';
    if (day % 5 === 0) return 'limited';
    
    return 'available';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-green-400';
      case 'limited': return 'text-yellow-400';
      case 'busy': return 'text-red-400';
      case 'weekend': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available': return <CheckCircle className="w-4 h-4" />;
      case 'limited': return <AlertCircle className="w-4 h-4" />;
      case 'busy': return <XCircle className="w-4 h-4" />;
      case 'weekend': return <Calendar className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <section id="availability" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Team <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Availability</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Check our team's availability and schedule a consultation. We're here to help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-cyan-400 mr-3" />
                Schedule a Consultation
              </h3>

              {/* Date Selection */}
              <div className="mb-8">
                <h4 className="text-white font-medium mb-4">Select a Date</h4>
                <div className="grid grid-cols-5 gap-2">
                  {generateDates().slice(0, 15).map((date, index) => {
                    const status = getAvailabilityStatus(date);
                    const isSelected = selectedDate.toDateString() === date.toDateString();
                    
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(date)}
                        disabled={status === 'weekend'}
                        className={`p-3 rounded-lg text-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-cyan-400 text-black font-bold'
                            : status === 'weekend'
                            ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        } ${isToday(date) ? 'ring-2 ring-cyan-400' : ''}`}
                      >
                        <div className="text-xs font-medium">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-lg font-bold">
                          {date.getDate()}
                        </div>
                        <div className={`text-xs ${getStatusColor(status)}`}>
                          {status === 'available' && 'Available'}
                          {status === 'limited' && 'Limited'}
                          {status === 'busy' && 'Busy'}
                          {status === 'weekend' && 'Weekend'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <h4 className="text-white font-medium mb-4">Available Time Slots</h4>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTimeSlot(slot.time)}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg text-center transition-all duration-300 ${
                        selectedTimeSlot === slot.time
                          ? 'bg-cyan-400 text-black font-bold'
                          : slot.available
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-white/5 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <div className="text-sm font-medium">{slot.time}</div>
                      <div className="text-xs text-gray-400">
                        {slot.available ? `${slot.team.length} team members` : 'Unavailable'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <Button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                disabled={!selectedTimeSlot}
                className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-cyan-400 mr-3" />
                Our Team Schedule
              </h3>

              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                      <p className="text-cyan-400">{member.role}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Available</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{member.availability}</span>
                  </div>
                </motion.div>
              ))}

              {/* Availability Legend */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 mt-8">
                <h4 className="text-white font-medium mb-4">Availability Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Available - Full team ready</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Limited - Some team members available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span className="text-gray-300 text-sm">Busy - High workload, limited availability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">Weekend - Team off, emergency support only</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-xl p-6">
                <h4 className="text-white font-medium mb-3">Need Immediate Assistance?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  For urgent projects or emergency support, contact us directly.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">📧</span>
                    <span className="text-gray-300">cybertreeindia001@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">📱</span>
                    <span className="text-gray-300">+91 7087383637</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamAvailabilitySection; 