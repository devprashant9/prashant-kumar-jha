import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const SKILLS = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const BorderSkills = () => {
  return (
    <>
      <motion.div 
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {SKILLS.map((skill, index) => {
          const angle = (index * (360 / SKILLS.length));
          const radian = (angle * Math.PI) / 180;
          // Smaller radius for mobile, larger for desktop
          const baseRadius = 160;
          const mobileRadius = 120;
          const radius = window.innerWidth < 768 ? mobileRadius : baseRadius;
          
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                width: window.innerWidth < 768 ? '30px' : '40px',
                height: window.innerWidth < 768 ? '30px' : '40px',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                left: '50%',
                top: '50%',
              }}
            >
              <div 
                className="relative group"
                style={{
                  transform: `rotate(-${angle}deg)`
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                  }}
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="bg-gray-900/90 text-white text-xs px-2 py-1 rounded">
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 overflow-x-hidden"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 py-4 lg:py-8 lg:mt-[-3rem] max-w-[95%] sm:max-w-[85%] lg:max-w-[1000px]">
        {/* Text Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Prashant Kumar Jha
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6"
          >
            Full Stack Developer specializing in{' '}
            <span className="text-blue-500">MERN</span> &{' '}
            <span className="text-green-600">Node.js</span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Crafting beautiful, responsive web experiences with modern technologies and clean, efficient code.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
          >
            <Link 
              to="/projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-colors duration-300 text-center text-sm sm:text-base"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 hover:border-blue-700 rounded-full text-white font-semibold transition-colors duration-300 text-center text-sm sm:text-base"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end mb-8 sm:mb-0"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src="/01_Profile_Picture.jpg"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
            <BorderSkills />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 