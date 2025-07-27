import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

const CyberAlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  const alerts = [
    "⚠️ Recent phishing attacks targeting Perth SMEs – Learn how to stay protected.",
    "🚨 Critical zero-day vulnerability detected – Update your systems now!",
    "🔒 Data breaches are on the rise – Secure your assets with CyberTree.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length);
    }, 5000); // Change alert every 5 seconds

    return () => clearInterval(interval);
  }, [alerts.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white p-3 text-center text-sm font-medium flex items-center justify-center space-x-3 z-[60]"
      >
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        <span className="flex-grow">
          {alerts[currentAlertIndex]}
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default CyberAlertBanner;