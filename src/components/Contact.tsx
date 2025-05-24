
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-600 focus:border-purple-400 text-slate-100"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-slate-600 focus:border-purple-400 text-slate-100"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-slate-800/50 border-slate-600 focus:border-purple-400 text-slate-100 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg hover-lift"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Let's Connect
              </h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-slate-300 leading-relaxed">
                  I'm always interested in hearing about new opportunities, 
                  interesting projects, or just having a chat about technology and development.
                </p>
                
                <p className="text-slate-300 leading-relaxed">
                  Whether you're a company looking to hire, a fellow developer wanting to collaborate, 
                  or someone with a project idea, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-slate-200 mb-4">Find me on:</h4>
                
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-slate-300" />
                    <span className="text-slate-300">GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-slate-300" />
                    <span className="text-slate-300">LinkedIn</span>
                  </motion.a>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                <p className="text-sm text-purple-300">
                  💡 <strong>Quick tip:</strong> Include details about your project timeline and budget 
                  to help me provide the most accurate response.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
