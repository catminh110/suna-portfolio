import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Trigger canvas-confetti blast
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#06b6d4', '#ec4899', '#ffffff']
      });

      // Reset state after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Connect
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-glow">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Contents Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Let's launch a project
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Have a job opening, a project idea, or just want to talk about system scaling? Drop me a message and I'll warp right back to you.
              </p>
            </div>

            {/* Coordinates / Channels */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300 text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Send a message</div>
                  <a href="mailto:contact@suna.dev" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    contact@suna.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300 text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Call channels</div>
                  <div className="text-sm font-semibold text-white">+84 123 456 789</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all duration-300 text-pink-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Current Grid</div>
                  <div className="text-sm font-semibold text-white">Milky Way Galaxy, Earth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-8 rounded-3xl border border-white/5 hover:neon-border-purple transition-all duration-300">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-cyan-400 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white tracking-wide">Transmission Received!</h3>
                  <p className="text-gray-400 max-w-xs">
                    Your message was beamed successfully. I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-purple-950/10 outline-none transition-all duration-300 text-white text-sm"
                        placeholder="Leo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-purple-950/10 outline-none transition-all duration-300 text-white text-sm"
                        placeholder="leo@space.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-purple-950/10 outline-none transition-all duration-300 text-white text-sm resize-none"
                      placeholder="Beam your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 font-semibold text-white flex items-center justify-center gap-2 group shadow-md shadow-purple-500/10 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>Beaming...</span>
                    ) : (
                      <>
                        <span>Beam Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
