import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { ChatBot } from './components/ChatBot';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setMounted(true);
    // Check system preference or default to dark
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
       setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-200 antialiased selection:bg-indigo-500/30 selection:text-indigo-800 dark:selection:text-indigo-200 transition-colors duration-300">
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main className="flex flex-col gap-0">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* AI Assistant */}
      <ChatBot />
      
    </div>
  );
};

export default App;