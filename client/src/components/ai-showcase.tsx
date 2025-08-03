import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, MessageSquare, BarChart, Settings, Send } from "lucide-react";

export default function AIShowcase() {
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const fullText = "Based on the analysis, I've identified key optimization opportunities...";

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const interval = setInterval(() => {
        setTypingText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isTyping, fullText]);

  const startTyping = () => {
    setTypingText("");
    setIsTyping(true);
  };

  const capabilities = [
    {
      icon: MessageSquare,
      title: "Natural Language",
      description: "Communicate naturally with our AI",
      color: "blue",
    },
    {
      icon: BarChart,
      title: "Smart Analytics",
      description: "Instant insights and predictions",
      color: "green",
    },
    {
      icon: Settings,
      title: "Auto Optimization",
      description: "Continuous improvement suggestions",
      color: "blue",
    },
  ];

  return (
    <section id="ai-showcase" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI in Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of our AI assistant. Ask anything, automate everything.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* AI Chat Interface */}
          <motion.div
            className="glass rounded-2xl p-8 neon-glow-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* User Message */}
              <div className="flex justify-end">
                <motion.div
                  className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-6 py-3 rounded-2xl max-w-xs lg:max-w-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-medium">Analyze my team's productivity and suggest optimizations</p>
                </motion.div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <motion.div
                  className="glass px-6 py-4 rounded-2xl max-w-2xl border border-[var(--neon-green)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-4 h-4 text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white mb-4">
                        {isTyping ? (
                          <span className="typing-animation">{typingText}</span>
                        ) : (
                          <span onClick={startTyping} className="cursor-pointer">
                            {fullText}
                          </span>
                        )}
                      </div>
                      <div className="space-y-3">
                        <motion.div
                          className="glass p-3 rounded-lg border border-[var(--neon-blue)]/30"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Task Automation</span>
                            <span className="text-[var(--neon-green)] font-bold">+45% efficiency</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                            <motion.div
                              className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "75%" }}
                              transition={{ duration: 1, delay: 0.7 }}
                            />
                          </div>
                        </motion.div>
                        <motion.div
                          className="glass p-3 rounded-lg border border-[var(--neon-green)]/30"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">Communication Flow</span>
                            <span className="text-[var(--neon-blue)] font-bold">+32% faster</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                            <motion.div
                              className="bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-blue)] h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "65%" }}
                              transition={{ duration: 1, delay: 0.9 }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input Field */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <input
                  type="text"
                  placeholder="Ask FlowBoost AI anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-[var(--dark-card)] border border-gray-600 rounded-xl px-6 py-4 pr-16 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]/20 transition-all duration-300"
                />
                <motion.button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black p-2 rounded-lg hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* AI Capabilities Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className={`glass rounded-xl p-6 text-center hover:neon-glow-${capability.color} transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <capability.icon className={`w-12 h-12 text-[var(--neon-${capability.color})] mx-auto mb-4`} />
                <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
