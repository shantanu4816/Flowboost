import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = {
  free: {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for getting started",
    features: [
      "Up to 3 team members",
      "Basic AI assistance",
      "5GB storage",
      "Community support",
    ],
  },
  pro: {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For scaling teams",
    features: [
      "Unlimited team members",
      "Advanced AI automation",
      "Unlimited storage",
      "Priority support",
      "Real-time analytics",
      "Custom integrations",
    ],
  },
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Future-Ready</span> Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your journey to the future
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-300">Monthly</span>
            <motion.button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                isYearly ? "bg-[var(--neon-green)]" : "bg-gray-600"
              }`}
              onClick={() => setIsYearly(!isYearly)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                animate={{ x: isYearly ? 20 : 4 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            <span className="text-white">
              Yearly <span className="text-[var(--neon-green)] text-sm">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div
            className="glass rounded-2xl p-8 border border-gray-600 hover:border-[var(--neon-blue)] transition-all duration-300 hover:neon-glow-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plans.free.name}</h3>
              <div className="text-4xl font-bold gradient-text mb-4">
                <span>$0</span>
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-300">{plans.free.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plans.free.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="w-5 h-5 text-[var(--neon-green)] mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="w-full glass border border-[var(--neon-blue)] px-6 py-3 rounded-xl font-semibold hover:bg-[var(--neon-blue)]/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="glass rounded-2xl p-8 border-2 border-[var(--neon-green)] hover:neon-glow-green transition-all duration-300 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-blue)] text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plans.pro.name}</h3>
              <div className="text-4xl font-bold gradient-text mb-4">
                <motion.span
                  key={isYearly ? "yearly" : "monthly"}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ${isYearly ? plans.pro.yearlyPrice : plans.pro.monthlyPrice}
                </motion.span>
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-gray-300">{plans.pro.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plans.pro.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="w-5 h-5 text-[var(--neon-green)] mr-3" />
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="w-full bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-blue)] text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Pro Trial
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
