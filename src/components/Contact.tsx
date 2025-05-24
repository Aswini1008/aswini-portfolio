
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-2"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-sm font-medium">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                className="inline-flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </motion.div>
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl opacity-30 blur-lg group-hover:opacity-40 transition duration-500"
            />
            
            <motion.div
              variants={itemVariants}
              className="relative glass-effect rounded-xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
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
                    className="bg-slate-800/50 border-slate-600 focus:border-purple-400 text-slate-100 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Your full name"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
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
                    className="bg-slate-800/50 border-slate-600 focus:border-purple-400 text-slate-100 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
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
                    className="bg-slate-800/50 border-slate-600 focus:border-purple-400 text-slate-100 transition-all duration-300 focus:ring-2 focus:ring-purple-500/20 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    className={cn(
                      "w-full py-6 text-lg relative overflow-hidden group bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all duration-300",
                      isSubmitting ? "opacity-80 cursor-not-allowed" : "hover-lift"
                    )}
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </span>
                    <motion.div
                      initial={{ left: "-100%" }}
                      whileHover={{ left: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 z-0 w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl border border-slate-700/50 relative overflow-hidden group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500"
              />
              
              <div className="relative">
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
                
                <div className="space-y-6 mt-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <a 
                        href="mailto:aswini@example.com" 
                        className="text-slate-200 hover:text-purple-400 transition-colors"
                      >
                        aswini@example.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-slate-200">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-medium text-slate-200 mb-4">Find me on:</h4>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, backgroundColor: "#6b21a8" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2 bg-slate-800/80 hover:bg-purple-900 px-4 py-3 rounded-lg transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-slate-300" />
                      <span className="text-slate-300">GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, backgroundColor: "#6b21a8" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2 bg-slate-800/80 hover:bg-purple-900 px-4 py-3 rounded-lg transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-slate-300" />
                      <span className="text-slate-300">LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 via-violet-800/30 to-purple-900/30 border border-purple-500/30"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 p-3 bg-purple-500/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-300 mb-2">Ready to collaborate?</h4>
                  <p className="text-sm text-purple-200/80">
                    Include details about your project timeline and budget for a faster response. I typically reply within 24-48 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
