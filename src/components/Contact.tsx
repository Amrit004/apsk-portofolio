"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.open(`mailto:sharysingh1144@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Looking for a driven graduate who is comfortable in enterprise environments and eager to write real software? Let us talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:sharysingh1144@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Email</p>
                    <p className="font-medium text-slate-900 dark:text-white">sharysingh1144@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">LinkedIn</p>
                    <p className="font-medium text-slate-900 dark:text-white">amritpal-singh-kaur</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Amrit004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-300/50 dark:bg-slate-700/50 flex items-center justify-center">
                    <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">GitHub</p>
                    <p className="font-medium text-slate-900 dark:text-white">Amrit004</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Location</p>
                    <p className="font-medium text-slate-900 dark:text-white">London, UK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Availability</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                I am actively applying for graduate software engineering, cloud/DevOps, data, and cybersecurity roles. 
                Happy to discuss any opportunity.
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available from Summer 2026
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors text-slate-900 dark:text-white placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors text-slate-900 dark:text-white placeholder-slate-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors resize-none text-slate-900 dark:text-white placeholder-slate-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-300 dark:border-slate-800 text-center"
        >
          <p className="text-slate-600 dark:text-slate-500">
            © 2026 Amritpal Singh Kaur — London, UK
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
