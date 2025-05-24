
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Aswini.dev</h3>
            <p className="text-slate-400 leading-relaxed">
              Passionate developer creating modern web experiences with clean code and innovative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-slate-400">Ready to work together?</p>
              <a
                href="#contact"
                className="inline-block text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Send me a message →
              </a>
              
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-slate-400 hover:text-purple-400" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-purple-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-slate-400 text-sm">
            © 2025 Aswini. Built with React & Tailwind CSS.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 flex items-center space-x-2 bg-purple-600/20 hover:bg-purple-600/30 px-4 py-2 rounded-lg transition-colors duration-200 border border-purple-500/30"
          >
            <ArrowUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
