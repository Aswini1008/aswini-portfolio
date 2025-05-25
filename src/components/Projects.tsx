
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "An immersive portfolio experience featuring Three.js 3D models, particle systems, and advanced animations. Built with React and modern web technologies.",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Task Manager",
      description: "Smart task management application with AI suggestions, real-time collaboration, and advanced analytics dashboard.",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "E-Commerce 3D Configurator",
      description: "Interactive 3D product configurator allowing customers to customize products in real-time with photorealistic rendering.",
      technologies: ["React", "Three.js", "Blender", "Spring Boot", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Weather Visualization Dashboard",
      description: "Beautiful weather dashboard with 3D globe visualization, interactive charts, and real-time weather data from multiple APIs.",
      technologies: ["React", "D3.js", "Three.js", "Node.js", "Weather APIs"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Showcasing cutting-edge web applications with modern technologies and 3D experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`glass-card group cursor-pointer transform-3d overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with buttons */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    Featured
                  </motion.div>
                )}
              </div>
              
              <div className="space-y-4">
                <motion.h3 
                  className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button 
                      className="w-full glow-button text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button 
                      variant="outline"
                      className="w-full glass-morphism border-purple-400/50 text-white hover:bg-purple-500/20 text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </motion.div>
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
