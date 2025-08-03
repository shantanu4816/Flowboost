import { motion } from "framer-motion";
import { Play, Monitor, Smartphone } from "lucide-react";

export default function DemoPreview() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">See FlowBoost</span> in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of productivity with our interactive dashboard
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Mockup */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* MacBook Frame */}
            <div className="relative bg-gray-800 rounded-2xl p-4 shadow-2xl neon-glow-blue">
              {/* Screen */}
              <div className="bg-[var(--dark-bg)] rounded-xl overflow-hidden relative aspect-video">
                {/* Top Bar */}
                <div className="bg-[var(--dark-card)] p-4 flex items-center justify-between border-b border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">FlowBoost Dashboard</div>
                  <div className="flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-[var(--neon-blue)]" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Welcome back, Alex</h3>
                      <p className="text-gray-400">Your productivity increased by 47% this week</p>
                    </div>
                    <motion.button
                      className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-6 py-2 rounded-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Watch Demo
                    </motion.button>
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Tasks Automated", value: "127", color: "green" },
                      { label: "Time Saved", value: "18.5h", color: "blue" },
                      { label: "Efficiency", value: "94%", color: "green" },
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        className={`glass p-4 rounded-xl border border-[var(--neon-${metric.color})]/30`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`text-2xl font-bold text-[var(--neon-${metric.color})]`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mini Chart */}
                  <div className="glass p-4 rounded-xl">
                    <h4 className="text-white font-semibold mb-3">Productivity Trend</h4>
                    <div className="h-20 bg-[var(--dark-card)] rounded-lg relative overflow-hidden">
                      <motion.div
                        className="absolute bottom-0 left-0 bg-gradient-to-t from-[var(--neon-green)] to-[var(--neon-blue)] opacity-60"
                        initial={{ width: 0, height: "60%" }}
                        whileInView={{ width: "100%", height: "80%" }}
                        transition={{ duration: 2, delay: 1 }}
                        viewport={{ once: true }}
                      />
                      <div className="absolute inset-0 flex items-end justify-between p-2">
                        {[40, 60, 80, 90, 75, 95, 100].map((height, index) => (
                          <motion.div
                            key={index}
                            className="bg-[var(--neon-green)] w-2 rounded-t"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keyboard */}
              <div className="mt-2 bg-gray-700 rounded-lg h-4"></div>
            </div>

            {/* Floating Play Button */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-20 h-20 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] rounded-full flex items-center justify-center shadow-2xl neon-glow-green"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px var(--neon-green)",
                    "0 0 40px var(--neon-green)",
                    "0 0 20px var(--neon-green)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <Play className="w-8 h-8 text-black ml-1" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            className="absolute -bottom-8 -right-4 md:-right-12"
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-48 bg-gray-800 rounded-3xl p-2 shadow-2xl neon-glow-green">
              {/* Phone Screen */}
              <div className="bg-[var(--dark-bg)] rounded-2xl overflow-hidden aspect-[9/19]">
                {/* Status Bar */}
                <div className="bg-[var(--dark-card)] p-2 flex items-center justify-between text-xs text-white">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-[var(--neon-green)] rounded-sm"></div>
                  </div>
                </div>

                {/* Mobile Content */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-[var(--neon-blue)]" />
                    <span className="text-white text-sm font-semibold">FlowBoost Mobile</span>
                  </div>

                  <div className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        className="glass p-2 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1 + item * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-white">Task {item}</div>
                          <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] p-2 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-black text-xs font-semibold text-center">
                      AI Assistant Active
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Ready to transform your workflow? Start your free trial today.
          </p>
          <motion.button
            className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300 neon-glow-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}