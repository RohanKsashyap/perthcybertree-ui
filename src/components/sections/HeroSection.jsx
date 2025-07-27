import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const handleContactClick = () => {
    toast({
      title: "🚧 Contact form coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30"
              >
                <span className="text-cyan-400 text-sm font-medium">🇮🇳 → 🇦🇺 Now Expanding to Australia</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  CyberTree
                </span>
                <br />
                <span className="text-white">Digital Solutions</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Innovative Indian tech company bringing cutting-edge website development and custom mobile applications to the Australian market. Transform your digital presence with our expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl shadow-purple-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg rounded-xl"
              >
                View Our Work
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img  alt="Modern tech workspace with developers coding" className="w-full h-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;