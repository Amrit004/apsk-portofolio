"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const roles = [
  "Graduate Software Engineer",
  "Full-Stack Developer",
  "Cloud Developer",
  "Cybersecurity Enthusiast",
  "Data Analyst"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const { isDark, toggle } = useTheme();
  const [downloads, setDownloads] = useState(127);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= roles[currentRole].length) {
          setCurrentRole((r) => (r + 1) % roles.length);
          return 0;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [currentRole]);

  return (
    <>
      <button
        onClick={toggle}
        className="fixed top-24 right-6 z-50 p-3 rounded-full glass-card hover:border-cyan-500/50 transition-all"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-500" />}
      </button>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: Math.random() 
              }}
              animate={{ 
                y: [null, Math.random() * 100 + '%'],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Open to Work — Summer 2026
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-slate-900 dark:text-white">
                Hi, I'm <span className="gradient-text">Amritpal</span>
              </h1>
              
              <div className="text-xl lg:text-2xl mb-6 h-10 flex items-center">
                <span className="gradient-text font-medium">
                  {roles[currentRole].slice(0, charIndex)}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
                Multilingual developer (EN · ES · CA · PA · HI) with enterprise experience at 
                <span className="text-cyan-600 dark:text-cyan-400"> Bank of America</span>, 
                <span className="text-purple-600 dark:text-purple-400"> Amadeus</span> & 
                <span className="text-green-600 dark:text-green-400"> ENI</span>. 
                MSc Advanced CS at QMUL (2026).
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/cv.pdf"
                  download="Amritpal-Singh-Kaur-CV.pdf"
                  onClick={() => setDownloads(d => d + 1)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-cyan-500 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Amrit004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </a>
                  <a
                    href="mailto:sharysingh1144@gmail.com"
                    className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 text-center gradient-border">
                <div className="text-6xl lg:text-7xl font-bold gradient-text mb-2">23</div>
                <div className="text-slate-600 dark:text-slate-400 text-lg mb-6">GitHub Repositories</div>
                
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="bg-slate-200 dark:bg-slate-800/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">JavaScript</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">40%</div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: '40%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-800/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">TypeScript</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">25%</div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-800/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">Python</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">20%</div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '20%' }} />
                    </div>
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-800/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">Java</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">15%</div>
                    <div className="h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-16 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">3</div>
              <div className="text-slate-500 dark:text-slate-500 text-sm">Enterprise Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2</div>
              <div className="text-slate-500 dark:text-slate-500 text-sm">CS Degrees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">5</div>
              <div className="text-slate-500 dark:text-slate-500 text-sm">Languages Spoken</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">{downloads}</div>
              <div className="text-slate-500 dark:text-slate-500 text-sm">CV Downloads</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
