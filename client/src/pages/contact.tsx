import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch with our team",
    contact: "hello@flowboost.ai",
    color: "blue"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our experts",
    contact: "+1 (555) 123-4567",
    color: "green"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    contact: "San Francisco, CA",
    color: "blue"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "24/7 instant support",
    contact: "Available now",
    color: "green"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white relative">
      <AnimatedBackground variant="minimal" />
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your productivity? Get in touch with our team of experts 
              and discover how FlowBoost can revolutionize your workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form */}
            <motion.div
              className="glass rounded-2xl p-8 border border-[var(--neon-green)]/30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      className="bg-[var(--dark-bg)]/50 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--neon-green)]" 
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      className="bg-[var(--dark-bg)]/50 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--neon-green)]" 
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    className="bg-[var(--dark-bg)]/50 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--neon-green)]" 
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <Input 
                    type="text" 
                    className="bg-[var(--dark-bg)]/50 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--neon-green)]" 
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    rows={6}
                    className="bg-[var(--dark-bg)]/50 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--neon-green)] resize-none" 
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 neon-glow-blue animate-glow flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={`glass rounded-xl p-6 border border-[var(--neon-${info.color})]/30 hover:border-[var(--neon-${info.color})] transition-all duration-300 group`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-[var(--neon-${info.color})] to-[var(--neon-green)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-pulse`}>
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
                        <p className="text-gray-300 mb-2">{info.description}</p>
                        <p className={`text-[var(--neon-${info.color})] font-semibold`}>{info.contact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                className="glass rounded-xl p-6 border border-[var(--neon-blue)]/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-6 text-center">Why Choose FlowBoost?</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--neon-green)] mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--neon-blue)] mb-1">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--neon-green)] mb-1">&lt;24h</div>
                    <div className="text-gray-400 text-sm">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--neon-blue)] mb-1">50+</div>
                    <div className="text-gray-400 text-sm">Countries</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center glass rounded-2xl p-12 border border-[var(--neon-green)]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teams already using FlowBoost to achieve unprecedented productivity gains
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 neon-glow-blue animate-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="glass px-8 py-4 rounded-xl font-semibold text-lg border border-[var(--neon-blue)] hover:neon-glow-blue transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}