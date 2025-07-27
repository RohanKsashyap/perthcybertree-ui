import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MessageSquare as MessageSquareText, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const FloatingCTA = () => {
  const handleScheduleAudit = () => {
    toast({
      title: "🚧 Schedule Audit feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleWhatsApp = () => {
    toast({
      title: "🚧 WhatsApp chat integration coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleCallback = () => {
    toast({
      title: "🚧 Request Callback feature coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3"
    >
      <Button
        onClick={handleScheduleAudit}
        className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg py-3 px-6 rounded-full flex items-center justify-center space-x-2 text-md font-semibold"
      >
        <CalendarCheck className="w-5 h-5" />
        <span>Schedule Free Security Audit</span>
      </Button>
      <div className="flex space-x-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleWhatsApp}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 shadow-lg"
          aria-label="WhatsApp Chat"
        >
          <MessageSquareText className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCallback}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 shadow-lg"
          aria-label="Request Callback"
        >
          <PhoneCall className="w-6 h-6" />
        </Button>
      </div>
    </motion.div>
  );
};

export default FloatingCTA;