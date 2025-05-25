
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Send, Sparkles, Instagram, Twitter, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    hidden: { opacity: 0, y: 30 },
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
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you and bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants} className="relative">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                    <label className="absolute -top-3 left-4 px-2 bg-gradient-to-r from-slate-900 to-slate-800 text-sm text-purple-300 font-medium">
                      Name
                    </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                    <label className="absolute -top-3 left-4 px-2 bg-gradient-to-r from-slate-900 to-slate-800 text-sm text-purple-300 font-medium">
                      Email
                    </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell me about your project or just say hello!"
                      className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    />
                    <label className="absolute -top-3 left-4 px-2 bg-gradient-to-r from-slate-900 to-slate-800 text-sm text-purple-300 font-medium">
                      Message
                    </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            <span>Send Message</span>
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </div>
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
              className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-10 border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                
                <p className="text-slate-300 leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities, 
                  exciting projects, or just having a chat about technology and development.
                </p>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Email</p>
                      <a 
                        href="mailto:smaswini006@gmail.com" 
                        className="text-white hover:text-purple-400 transition-colors text-lg"
                      >
                        smaswini006@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">Location</p>
                      <p className="text-white text-lg">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-xl font-semibold text-white mb-6">Find me on:</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      href="https://github.com/Aswini1008"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-slate-300" />
                      <span className="text-slate-300 font-medium">GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-slate-300" />
                      <span className="text-slate-300 font-medium">LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Social Media Section */}
            <motion.div
              variants={itemVariants}
              className="relative backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20"
            >
              <h4 className="text-xl font-semibold text-purple-300 mb-6">Social Media</h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#", color: "from-pink-500 to-purple-500" },
                  { icon: Twitter, href: "#", color: "from-blue-400 to-blue-600" },
                  { icon: Facebook, href: "#", color: "from-blue-600 to-blue-800" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
