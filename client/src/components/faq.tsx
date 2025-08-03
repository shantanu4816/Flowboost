import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does FlowBoost's AI automation work?",
    answer: "FlowBoost uses advanced machine learning algorithms to analyze your workflow patterns and automatically optimize repetitive tasks. Our AI learns from your behavior and suggests improvements in real-time, helping you achieve up to 500% productivity gains."
  },
  {
    question: "Is my data secure with FlowBoost?",
    answer: "Absolutely. We use military-grade encryption, zero-trust architecture, and quantum-resistant security protocols. All data is encrypted both at rest and in transit, and we comply with SOC 2, GDPR, and other industry standards."
  },
  {
    question: "Can FlowBoost integrate with my existing tools?",
    answer: "Yes! FlowBoost seamlessly integrates with over 200+ popular tools including Slack, Microsoft Office, Google Workspace, Salesforce, and many more. Our API-first approach ensures smooth integration with any custom systems."
  },
  {
    question: "What's the difference between Free and Pro plans?",
    answer: "The Free plan includes basic AI assistance for up to 3 team members and 5GB storage. Pro unlocks unlimited team members, advanced AI automation, unlimited storage, priority support, real-time analytics, and custom integrations."
  },
  {
    question: "How quickly can I see results?",
    answer: "Most users see immediate improvements within the first 24 hours. Our AI starts learning your patterns right away, and significant productivity gains typically become apparent within the first week of usage."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! Free users get community support, while Pro users enjoy 24/7 priority support with dedicated success managers. We also provide comprehensive documentation, video tutorials, and regular training sessions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked</span> Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about FlowBoost's AI-powered platform
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl border border-gray-600 hover:border-[var(--neon-green)]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[var(--neon-green)]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[var(--neon-blue)]" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-[var(--neon-green)]/30 to-transparent mb-4"></div>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <motion.button
            className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 neon-glow-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}