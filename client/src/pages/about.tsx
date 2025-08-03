import { motion } from "framer-motion";
import { Users, Award, Target, Rocket, Heart, Globe } from "lucide-react";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Former AI researcher at Google with 10+ years in machine learning and automation."
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612c96e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Expert in quantum computing and distributed systems. Former Tesla engineer."
  },
  {
    name: "Marcus Johnson",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "PhD in Machine Learning from MIT. Pioneer in neural network optimization."
  }
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI and automation",
    color: "blue"
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your productivity gains are our primary measure of success",
    color: "green"
  },
  {
    icon: Heart,
    title: "Human-Centric",
    description: "Technology should enhance human potential, not replace it",
    color: "blue"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building solutions that scale to help millions worldwide",
    color: "green"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white relative">
      <AnimatedBackground variant="minimal" />
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">About</span> FlowBoost
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to revolutionize productivity through AI-powered automation, 
              helping teams achieve more than they ever thought possible.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            className="glass rounded-2xl p-12 mb-20 border border-[var(--neon-green)]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Founded in 2023 by a team of AI researchers and productivity experts, FlowBoost emerged from a simple observation: 
                  despite incredible advances in technology, most people still struggle with repetitive tasks and inefficient workflows.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We set out to change that by creating an AI platform that doesn't just automate tasks—it learns, adapts, 
                  and evolves with your needs, delivering unprecedented productivity gains while keeping humans at the center of every decision.
                </p>
              </div>
              <div className="relative">
                <motion.div
                  className="glass rounded-xl p-8 border border-[var(--neon-blue)]/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Award className="w-8 h-8 text-[var(--neon-green)]" />
                      <div>
                        <div className="text-2xl font-bold text-white">10K+</div>
                        <div className="text-gray-400">Happy Customers</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Rocket className="w-8 h-8 text-[var(--neon-blue)]" />
                      <div>
                        <div className="text-2xl font-bold text-white">500%</div>
                        <div className="text-gray-400">Avg. Productivity Increase</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Globe className="w-8 h-8 text-[var(--neon-green)]" />
                      <div>
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="text-gray-400">Countries Served</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className={`glass rounded-2xl p-6 text-center border border-[var(--neon-${value.color})]/30 hover:border-[var(--neon-${value.color})] transition-all duration-300 group`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-[var(--neon-${value.color})] to-[var(--neon-green)] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}>
                    <value.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-2xl p-8 text-center border border-gray-600 hover:border-[var(--neon-green)]/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[var(--neon-green)] object-cover neon-glow-green"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-[var(--neon-green)] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center glass rounded-2xl p-12 border border-[var(--neon-blue)]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the <span className="gradient-text">Future</span> of Work
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to experience the next generation of productivity? Start your journey with FlowBoost today.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 neon-glow-blue animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}