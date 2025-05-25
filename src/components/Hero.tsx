
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeBackground from './ThreeBackground';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    "Frontend Developer",
    "Java Developer", 
    "3D Enthusiast",
    "UI/UX Designer"
  ];
  
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typeText = () => {
      const currentFullText = texts[textIndex];
      
      if (isTyping) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, isTyping, textIndex, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Animated Background */}
      <ThreeBackground />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="section-container content-overlay">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 transform-3d">
                <motion.span 
                  className="block text-white drop-shadow-2xl"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span 
                  className="block gradient-text text-8xl md:text-9xl font-black"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Aswini
                </motion.span>
              </h1>
            </motion.div>
            
            <div className="text-3xl md:text-5xl font-medium text-white/90 h-20 flex items-center justify-center">
              <span className="mr-3">I'm a </span>
              <motion.span 
                className="gradient-text min-w-[400px] text-left font-bold"
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentText}
                <span className="animate-pulse text-purple-400">|</span>
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-morphism p-8 rounded-3xl mb-12 max-w-3xl mx-auto"
          >
            <p className="text-xl text-white/80 leading-relaxed">
              Passionate developer crafting immersive digital experiences with cutting-edge technologies. 
              Specialized in React, 3D animations, and modern web development with a focus on performance and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="glow-button text-lg px-10 py-4 group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateZ: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="glass-morphism border-2 border-purple-400/50 text-white hover:bg-purple-500/20 hover:border-purple-300 text-lg px-10 py-4 group backdrop-blur-md"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-20"
          >
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center text-white/70 hover:text-purple-400 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <span className="text-sm mb-3 font-medium">Discover More</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-3 glass-morphism rounded-full group-hover:bg-purple-500/20"
              >
                <ArrowDown className="w-6 h-6" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
