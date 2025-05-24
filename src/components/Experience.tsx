
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "ICF (Indian Railway Catering and Tourism Corporation)",
      position: "Software Developer",
      period: "2022 - Present",
      description: "Developing and maintaining web applications for railway services. Working with modern technologies to improve user experience and system efficiency.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
      color: "purple"
    },
    {
      company: "Test Yatra",
      position: "Full Stack Developer",
      period: "2021 - 2022",
      description: "Built comprehensive web solutions for educational platforms. Focused on creating responsive user interfaces and robust backend systems.",
      technologies: ["JavaScript", "Node.js", "React", "MongoDB", "Express"],
      color: "violet"
    },
    {
      company: "BSNL (Bharat Sanchar Nigam Limited)",
      position: "Junior Developer",
      period: "2020 - 2021",
      description: "Contributed to telecommunications software projects. Gained experience in enterprise-level development and system integration.",
      technologies: ["Java", "SQL", "HTML/CSS", "JavaScript"],
      color: "indigo"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My journey through various roles and organizations, building expertise in modern web development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-violet-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 z-10"></div>

                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect p-6 rounded-xl hover-lift"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-purple-400">{exp.company}</h3>
                      <span className="text-sm text-slate-400 mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-slate-200 mb-3">{exp.position}</h4>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
