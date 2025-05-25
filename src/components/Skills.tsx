
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
      icon: "🎨"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Java", "Spring Boot", "MongoDB", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500",
      icon: "⚡"
    },
    {
      title: "3D & Animation",
      skills: ["Three.js", "WebGL", "Blender", "GSAP", "Lottie"],
      color: "from-green-500 to-emerald-500",
      icon: "🌟"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vite", "Figma"],
      color: "from-orange-500 to-red-500",
      icon: "🛠️"
    }
  ];

  const professionalSkills = [
    { skill: "Problem Solving", level: 95 },
    { skill: "3D Development", level: 88 },
    { skill: "UI/UX Design", level: 90 },
    { skill: "Team Leadership", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
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
            <span className="gradient-text">Skills & Technologies</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cutting-edge technologies for modern web development and 3D experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="glass-card group cursor-pointer transform-3d"
            >
              <div className="flex items-center mb-6">
                <motion.span 
                  className="text-3xl mr-4"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateZ: 2,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className={`bg-gradient-to-r ${category.color} p-3 rounded-xl text-center transition-all duration-300 hover:shadow-lg cursor-pointer`}
                  >
                    <span className="text-white font-semibold text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills with animated progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Professional Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {professionalSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">{item.skill}</span>
                  <motion.span 
                    className="text-purple-400 font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
