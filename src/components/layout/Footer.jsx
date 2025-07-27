
import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CyberTree</span>
            </Link>
            <p className="text-gray-400">
              Innovative digital solutions from India to Australia.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Services</span>
            <div className="space-y-2">
              <p className="text-gray-400">Website Development</p>
              <p className="text-gray-400">Mobile Applications</p>
              <p className="text-gray-400">Custom Solutions</p>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Company</span>
            <div className="space-y-2">
              <p className="text-gray-400">About Us</p>
              <p className="text-gray-400">Our Projects</p>
              <p className="text-gray-400">Contact</p>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Connect</span>
            <div className="space-y-2">
              <p className="text-gray-400">hello@cybertree.com.au</p>
              <p className="text-gray-400">+61 (0) 123 456 789</p>
              <p className="text-gray-400">Sydney, Australia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CyberTree. All rights reserved. Proudly expanding from India to Australia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
