import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import AnimatedBackground from "@/components/animated-background";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--dark-bg)] text-white relative">
      <AnimatedBackground variant="minimal" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-bold gradient-text mb-8"
            animate={{ 
              textShadow: [
                "0 0 20px var(--neon-blue)",
                "0 0 40px var(--neon-green)",
                "0 0 20px var(--neon-blue)"
              ]
            }}
            transition={{ 
              textShadow: { duration: 2, repeat: Infinity }
            }}
          >
            404
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Looks like you've ventured into uncharted digital territory. 
            The page you're looking for doesn't exist in our quantum realm.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/">
              <motion.button
                className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 neon-glow-blue animate-glow flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => window.history.back()}
              className="glass px-8 py-4 rounded-xl font-semibold text-lg border border-[var(--neon-blue)] hover:neon-glow-blue transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Floating error elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-32 h-32 bg-[var(--neon-blue)] rounded-full opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-24 h-24 bg-[var(--neon-green)] rounded-full opacity-10"
          animate={{
            y: [0, -15, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </div>
  );
}