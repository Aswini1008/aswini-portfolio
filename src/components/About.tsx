
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate developer with a strong foundation in both frontend and backend technologies. 
                My journey in software development has been driven by curiosity and a constant desire to learn 
                and create innovative solutions.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                With hands-on experience in modern web frameworks like React, combined with robust backend 
                development in Java, I bring a full-stack perspective to every project. I believe in writing 
                clean, maintainable code and creating user experiences that are both functional and delightful.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Quick Facts</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Based in India, open to remote opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Experienced in Agile development methodologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Strong problem-solving and analytical skills
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Continuous learner with a passion for emerging technologies
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
