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
      title: "E-Commerce & Paypal Integration",
      description:
        "A full stack e-commerce application with Paypal integration and modular UI admin dashboard",
      image:
        "https://res.cloudinary.com/ditvn8zww/image/upload/v1756151437/ecommerce-with-paypal_a0hyk1.png",
      fallbackImage: defaultProjectImage,
      tags: ["react", "node js", "mongoDB", "express js"],
      repoLink: "https://github.com/devprashant9/e-commerce-project",
      deployedLink: "https://e-commerce-project-red-iota.vercel.app/",
      youtubeLink: "https://youtube.com/watch?v=...",
    },
    {
      title: "Job Tracker Application",
      description:
        "A streamlined full-stack CRUD app to manage job applications, track statuses, and organize career progress.",
      image:
        "https://res.cloudinary.com/ditvn8zww/image/upload/v1756062276/job-tracker-image_a86b1q.png",
      fallbackImage: defaultProjectImage,
      tags: ["react", "node js", "mongoDB", "express js"],
      repoLink: "https://github.com/devprashant9/mern-assignment",
      deployedLink: "https://mern-assignment-ten.vercel.app/",
      youtubeLink: "https://youtube.com/watch?v=...",
    },
    {
      title: "Countries API Project",
      description:
        "A frontend project displaying country data via REST Countries API with search, filter, and details",
      image:
        "https://res.cloudinary.com/ditvn8zww/image/upload/v1756062276/countries-api-image_lwkklv.png",
      fallbackImage: defaultProjectImage,
      tags: ["webpack", "reactrouter", "tailwind", "hooks"],
      repoLink: "https://github.com/devprashant9/country-api-project",
      deployedLink: "https://country-api-project-black.vercel.app/",
      youtubeLink: "https://youtube.com/watch?v=...",
    },

    {
      title: "Expense Tracker Application",
      description:
        "A web application for tracking personal expenses and managing budgets",
      image:
        "https://res.cloudinary.com/ditvn8zww/image/upload/v1756062277/expense-tracker-image_vnc8pe.png",
      fallbackImage: defaultProjectImage,
      tags: ["React", "Node.js", "Parcel", "LocalStorage"],
      repoLink: "https://github.com/devprashant9/expense-tracker-project",
      deployedLink: "https://expense-tracker-project-silk.vercel.app/",
      youtubeLink: "https://youtube.com/watch?v=...",
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