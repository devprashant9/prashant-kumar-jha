import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

// Import default project image
import defaultProjectImage from '../assets/default-project.jpg';

const Projects = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      image: "/projects/ecommerce.jpg",
      fallbackImage: defaultProjectImage,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      repoLink: "https://github.com/yourusername/ecommerce-platform",
      deployedLink: "https://ecommerce-project.com",
      youtubeLink: "https://youtube.com/watch?v=..."
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool that creates unique artwork based on text descriptions using OpenAI's DALL-E API.",
      image: "/projects/ai-image.jpg",
      fallbackImage: defaultProjectImage,
      tags: ["React", "OpenAI", "TailwindCSS", "Node.js"],
      repoLink: "https://github.com/yourusername/ai-image-generator",
      deployedLink: "https://ai-image-gen.com",
      youtubeLink: "https://youtube.com/watch?v=..."
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/projects/task-app.jpg",
      fallbackImage: defaultProjectImage,
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      repoLink: "https://github.com/yourusername/task-manager",
      deployedLink: "https://task-manager-pro.com",
      youtubeLink: "https://youtube.com/watch?v=..."
    },
    // Add more projects as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development, 
            design, and problem-solving. Each project comes with a detailed video explanation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-4">
            Interested in working together? Let's build something amazing!
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 