import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: 'default' | 'minimal' | 'intense';
}

export default function AnimatedBackground({ variant = 'default' }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base animated background */}
      <div className="absolute inset-0 animated-bg"></div>
      
      {/* Particle background */}
      <div className="particle-bg"></div>
      
      {/* Aurora-style animated overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-0 left-0 w-full h-full ${
            variant === 'minimal' ? 'opacity-10' : 
            variant === 'intense' ? 'opacity-30' : 'opacity-20'
          }`}
          style={{
            background: `linear-gradient(45deg, 
              transparent 30%, 
              var(--neon-green) 50%, 
              transparent 70%),
              linear-gradient(-45deg, 
              transparent 30%, 
              var(--neon-blue) 50%, 
              transparent 70%)`
          }}
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%']
          }}
          transition={{
            duration: variant === 'minimal' ? 30 : variant === 'intense' ? 15 : 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Elements */}
      {variant !== 'minimal' && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-[var(--neon-blue)] rounded-full opacity-20"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-[var(--neon-green)] rounded-full opacity-20"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-12 h-12 bg-[var(--neon-blue)] rounded-full opacity-10"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}
    </div>
  );
}