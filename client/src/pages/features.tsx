import { motion } from "framer-motion";
import { Brain, Zap, Shield, Globe, Cpu, Target, BarChart3, Users } from "lucide-react";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const featuresData = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Advanced machine learning algorithms that analyze your workflow patterns and automatically optimize repetitive tasks, helping you achieve up to 500% productivity gains.",
    color: "blue",
    features: ["Smart task recognition", "Automated workflows", "Predictive analytics", "Custom AI models"]
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Get instant insights with live dashboards, predictive analytics, and intelligent reporting that adapts to your business needs in real-time.",
    color: "green",
    features: ["Live data visualization", "Custom dashboards", "Predictive insights", "Export capabilities"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption, zero-trust architecture, and advanced threat detection keep your data safe in the quantum age.",
    color: "blue",
    features: ["256-bit encryption", "Zero-trust security", "SOC 2 compliance", "Advanced threat detection"]
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Connect teams across the globe with quantum-speed communication, real-time collaboration tools, and AI-powered translation.",
    color: "green",
    features: ["Real-time sync", "Multi-language support", "Global CDN", "Offline capabilities"]
  },
  {
    icon: Cpu,
    title: "Quantum Processing",
    description: "Harness the power of quantum computing for complex calculations and data processing that traditional systems can't handle.",
    color: "blue",
    features: ["Quantum algorithms", "Parallel processing", "Advanced computations", "Scalable architecture"]
  },
  {
    icon: Target,
    title: "Smart Optimization",
    description: "AI-driven optimization engine that continuously improves your workflows, processes, and resource allocation automatically.",
    color: "green",
    features: ["Resource optimization", "Performance tuning", "Cost reduction", "Efficiency metrics"]
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description: "Comprehensive reporting suite with customizable templates, automated generation, and AI-powered insights for better decision making.",
    color: "blue",
    features: ["Custom templates", "Automated reports", "Data visualization", "Trend analysis"]
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Powerful team management tools with role-based access, performance tracking, and collaborative workspace features.",
    color: "green",
    features: ["Role management", "Team analytics", "Collaboration tools", "Performance tracking"]
  }
];

export default function Features() {
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
              <span className="gradient-text">Powerful</span> Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the cutting-edge capabilities that make FlowBoost the most advanced productivity platform in the world
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className={`glass rounded-2xl p-8 border border-[var(--neon-${feature.color})]/30 hover:border-[var(--neon-${feature.color})] transition-all duration-300 group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-[var(--neon-${feature.color})] to-[var(--neon-green)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:animate-pulse`}>
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-[var(--neon-${feature.color})] rounded-full`}></div>
                          <span className="text-gray-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to <span className="gradient-text">Transform</span> Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teams already using FlowBoost to revolutionize their productivity
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