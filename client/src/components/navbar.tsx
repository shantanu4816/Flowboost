import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import fbLogo from "@assets/ChatGPT Image Aug 3, 2025, 02_23_21 PM_1754211943978.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass backdrop-blur-xl" : "glass"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={fbLogo} 
                alt="FlowBoost Logo" 
                className="w-10 h-10 neon-glow-green animate-pulse-glow"
              />
              <span className="text-xl font-bold gradient-text">FlowBoost</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  className={`text-white hover:text-[var(--neon-blue)] transition-colors duration-300 ${
                    location === item.path ? 'text-[var(--neon-green)]' : ''
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            {location === "/" && (
              <>
                <button
                  onClick={() => scrollToSection("ai-showcase")}
                  className="text-white hover:text-[var(--neon-blue)] transition-colors duration-300"
                >
                  AI Showcase
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-white hover:text-[var(--neon-blue)] transition-colors duration-300"
                >
                  Pricing
                </button>
              </>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 neon-glow-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass rounded-lg mt-2 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-white hover:text-[var(--neon-blue)] transition-colors duration-300 text-left ${
                      location === item.path ? 'text-[var(--neon-green)]' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
              {location === "/" && (
                <>
                  <button
                    onClick={() => scrollToSection("ai-showcase")}
                    className="text-white hover:text-[var(--neon-blue)] transition-colors duration-300 text-left"
                  >
                    AI Showcase
                  </button>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-white hover:text-[var(--neon-blue)] transition-colors duration-300 text-left"
                  >
                    Pricing
                  </button>
                </>
              )}
              <button className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-black px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
