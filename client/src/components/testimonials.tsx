import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    quote: "FlowBoost transformed our entire operation. We saw a 400% increase in productivity within the first month. The AI capabilities are simply revolutionary.",
    borderColor: "blue",
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO, DataCore",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612c96e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    quote: "The security features are unmatched. We handle sensitive data for Fortune 500 companies, and FlowBoost gives us complete peace of mind.",
    borderColor: "green",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, InnovateLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    quote: "The collaborative features are incredible. Our global team feels more connected than ever, and the AI insights help us make better decisions faster.",
    borderColor: "blue",
  },
];

export default function Testimonials() {
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
            <span className="gradient-text">Trusted</span> by Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what industry pioneers are saying about FlowBoost
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`glass rounded-2xl p-8 border border-[var(--neon-${testimonial.borderColor})]/30 hover:border-[var(--neon-${testimonial.borderColor})] transition-all duration-300 animate-float`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ animationDelay: `${index * 0.5}s` }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-6">
                <motion.img
                  src={testimonial.image}
                  alt={`${testimonial.name} headshot`}
                  className={`w-16 h-16 rounded-full border-2 border-[var(--neon-${testimonial.borderColor})] object-cover neon-glow-${testimonial.borderColor}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className={`text-[var(--neon-${testimonial.borderColor})]`}>{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{testimonial.quote}</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + starIndex * 0.1 }}
                  >
                    <Star className={`w-5 h-5 text-[var(--neon-${testimonial.borderColor === 'blue' ? 'green' : 'blue'})] fill-current`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
