import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-800/90 backdrop-blur-sm text-white fixed w-full top-0 z-50 shadow-lg"
    >
      <div className="max-w-[85%] lg:max-w-[1000px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="text-xl font-bold">Prashant Kumar Jha</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" text="Home" isActive={location.pathname === '/'} />
            <NavLink to="/about" text="About" isActive={location.pathname === '/about'} />
            <NavLink to="/projects" text="Projects" isActive={location.pathname === '/projects'} />
            <NavLink to="/contact" text="Contact" isActive={location.pathname === '/contact'} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink 
              to="/" 
              text="Home" 
              isActive={location.pathname === '/'} 
              onClick={() => setIsOpen(false)} 
            />
            <MobileNavLink 
              to="/about" 
              text="About" 
              isActive={location.pathname === '/about'} 
              onClick={() => setIsOpen(false)} 
            />
            <MobileNavLink 
              to="/projects" 
              text="Projects" 
              isActive={location.pathname === '/projects'} 
              onClick={() => setIsOpen(false)} 
            />
            <MobileNavLink 
              to="/contact" 
              text="Contact" 
              isActive={location.pathname === '/contact'} 
              onClick={() => setIsOpen(false)} 
            />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

// Desktop NavLink component
const NavLink = ({ to, text, isActive }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      className={`transition-colors duration-200 ${
        isActive 
          ? 'text-white font-medium' 
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {text}
    </Link>
  </motion.div>
);

// Mobile NavLink component
const MobileNavLink = ({ to, text, isActive, onClick }) => (
  <motion.div
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
        isActive
          ? 'text-white bg-gray-700'
          : 'text-gray-300 hover:text-white hover:bg-gray-700'
      }`}
    >
      {text}
    </Link>
  </motion.div>
);

export default Navbar; 