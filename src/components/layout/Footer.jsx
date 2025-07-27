
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
              <Link to="/#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link>
              <Link to="/#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Our Projects</Link>
              <Link to="/#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
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

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} CyberTree. All rights reserved. Proudly expanding from India to Australia.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
