"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Cloud Developer",
  "AI Enthusiast"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative py-8 md:py-0">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="relative"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-2 md:mb-3">
              Amritpal Singh Kaur
            </h1>
            <p className="text-cyan-400 font-medium mb-3 md:mb-4">Based in London, United Kingdom</p>

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold gradient-text mb-3 md:mb-4">
              Full-Stack Software Developer
            </h2>
            <p className="text-lg md:text-xl text-purple-400 mb-3 md:mb-4">MSc Computer Science – Queen Mary University of London</p>
            
            <p className="text-slate-400 mb-3 md:mb-4 max-w-lg">
              I design and build scalable web applications, REST APIs, and AI-powered systems using modern JavaScript technologies.
            </p>
            
            <p className="text-slate-400 mb-4 md:mb-6 max-w-lg">
              I am a Computer Science postgraduate specialising in full-stack development and AI-integrated applications. I am currently seeking graduate and junior software engineering opportunities.
            </p>

            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/cv.pdf"
                download="Amritpal-Singh-Kaur-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 mt-4 md:mt-5">
              <a
                href="https://github.com/Amrit004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />GitHub
              </a>
              <a
                href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />LinkedIn
              </a>
              <a
                href="mailto:sharysingh1144@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />Email
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
          >
            <div className="glass-card rounded-xl p-5 text-center gradient-border">
              <div className="text-5xl font-bold gradient-text mb-1">23</div>
              <div className="text-slate-400 text-sm mb-4">GitHub Repositories</div>
              
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-cyan-400">JavaScript</div>
                  <div className="text-slate-500 text-xs">40%</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-purple-400">TypeScript</div>
                  <div className="text-slate-500 text-xs">25%</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-green-400">Python</div>
                  <div className="text-slate-500 text-xs">20%</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-yellow-400">Java</div>
                  <div className="text-slate-500 text-xs">15%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-4 md:mt-8 gap-6 md:gap-12 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-cyan-400">3</div>
            <div className="text-slate-500 text-xs">Enterprise</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">2</div>
            <div className="text-slate-500 text-xs">CS Degrees</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">5</div>
            <div className="text-slate-500 text-xs">Languages</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
