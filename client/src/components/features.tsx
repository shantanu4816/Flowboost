import { motion } from "framer-motion";
import { Brain, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Let our advanced AI handle repetitive tasks, optimize workflows, and make intelligent decisions to boost your productivity by 500%.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Get instant insights with live dashboards, predictive analytics, and intelligent reporting that adapts to your business needs.",
    color: "green",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption, zero-trust architecture, and advanced threat detection keep your data safe in the quantum age.",
    color: "blue",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Futuristic</span> Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make FlowBoost the most advanced productivity platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`glass rounded-2xl p-8 card-3d hover:neon-glow-${feature.color} transition-all duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-[var(--neon-${feature.color})] to-[var(--neon-green)] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse`}>
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              <div className="mt-6">
                <motion.button
                  className={`text-[var(--neon-${feature.color})] hover:text-[var(--neon-green)] transition-colors duration-300 font-semibold`}
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* Featured Card */}
          <motion.div
            className="glass rounded-2xl p-8 card-3d hover:neon-glow-green transition-all duration-300 group lg:col-span-3 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-blue)] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Global Collaboration</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Connect teams across the globe with quantum-speed communication, real-time collaboration tools, and AI-powered translation.
                </p>
                <div className="mt-6">
                  <motion.button
                    className="bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-blue)] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Collaboration
                  </motion.button>
                </div>
              </div>
              <div className="relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                  alt="Digital collaboration workspace"
                  className="rounded-xl w-full h-64 object-cover neon-glow-green"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
