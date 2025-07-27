import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, LogOut } from 'lucide-react';
import { AuthContext } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="" alt="" />
              </div>
              <span className="text-xl font-bold text-white">CyberTree</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="/#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
            <a href="/#services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
            <a href="/#projects" className="text-white hover:text-cyan-400 transition-colors">Projects</a>
            <a href="/#testimonials" className="text-white hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="/#casestudies" className="text-white hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="/#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
            <a href="/#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
            {user ? (
              <>
                <Link to="/admin" className="text-cyan-400 hover:text-white transition-colors font-semibold">Admin</Link>
                <Button onClick={handleLogout} variant="ghost" size="sm" className="text-pink-400 hover:text-white hover:bg-pink-400/20">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : null}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;