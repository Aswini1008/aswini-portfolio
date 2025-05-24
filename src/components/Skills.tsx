
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript"],
      color: "purple"
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React", "Tailwind CSS", "Bootstrap"],
      color: "violet"
    },
    {
      title: "Backend & Database",
      skills: ["Spring Boot", "Node.js", "MySQL", "MongoDB", "REST APIs"],
      color: "indigo"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
      color: "purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl hover-lift"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700/50 hover:bg-purple-900/30 p-3 rounded-lg text-center transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50"
                  >
                    <span className="text-slate-200 font-medium text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
            Professional Skills
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { skill: "Problem Solving", level: 90 },
              { skill: "Team Collaboration", level: 85 },
              { skill: "Project Management", level: 80 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-200 font-medium">{item.skill}</span>
                  <span className="text-purple-400 text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-400 to-violet-400 h-2 rounded-full"
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
