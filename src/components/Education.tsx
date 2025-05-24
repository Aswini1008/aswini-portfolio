
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Academic foundation that shaped my technical journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-xl blur-xl"></div>
            
            <div className="relative glass-effect p-8 rounded-xl border border-purple-500/30 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">
                    Bachelor of Technology in Computer Science
                  </h3>
                  
                  <p className="text-lg text-purple-400 mb-2">Your College Name</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <span className="text-slate-400">Graduation Year: 2020</span>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <span className="text-slate-300 mr-2">CGPA:</span>
                      <span className="text-2xl font-bold gradient-text">8.5/10</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Comprehensive study of computer science fundamentals including data structures, 
                    algorithms, software engineering, database management, and web technologies. 
                    Active participation in coding competitions and technical projects.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Web Development', 'Object-Oriented Programming'].map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
