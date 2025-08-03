import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import DemoPreview from "@/components/demo-preview";
import AIShowcase from "@/components/ai-showcase";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white overflow-x-hidden relative">
      <AnimatedBackground />
      <Navbar />
      <motion.main
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <DemoPreview />
        <AIShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
      </motion.main>
      <Footer />
    </div>
  );
}
