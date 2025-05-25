
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management System",
      description: "A comprehensive project management tool with real-time collaboration features, drag-and-drop functionality, and team productivity analytics.",
      technologies: ["React", "Spring Boot", "MySQL", "WebSocket", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive dashboard displaying real-time weather data with advanced charts, forecasting, and location-based insights using external APIs.",
      technologies: ["React", "D3.js", "Python", "Flask", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "A data visualization platform that analyzes social media trends and engagement metrics with beautiful interactive charts and real-time updates.",
      technologies: ["React", "Java", "PostgreSQL", "Redis", "Recharts"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-100">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 text-white flex-1"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
