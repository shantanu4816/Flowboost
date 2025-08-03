import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Youtube } from "lucide-react";
import { Link } from "wouter";
import fbLogo from "@assets/ChatGPT Image Aug 3, 2025, 02_23_21 PM_1754211943978.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: Twitter, href: "#", color: "blue" },
    { icon: Github, href: "#", color: "green" },
    { icon: Linkedin, href: "#", color: "blue" },
    { icon: Youtube, href: "#", color: "green" },
  ];

  const footerLinks = {
    product: [
      { name: "Features", href: "/features", isExternal: false },
      { name: "Pricing", href: "/#pricing", isExternal: false },
      { name: "API", href: "#", isExternal: false },
      { name: "Integrations", href: "#", isExternal: false },
    ],
    company: [
      { name: "About", href: "/about", isExternal: false },
      { name: "Careers", href: "#", isExternal: false },
      { name: "Blog", href: "#", isExternal: false },
      { name: "Contact", href: "/contact", isExternal: false },
    ],
  };

  return (
    <footer id="contact" className="bg-[#1a1a1a] border-t border-gray-700 py-16 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <div className="flex items-center space-x-3 mb-6 cursor-pointer">
                <img 
                  src={fbLogo} 
                  alt="FlowBoost Logo" 
                  className="w-10 h-10 neon-glow-green animate-pulse-glow"
                />
                <span className="text-xl font-bold gradient-text">FlowBoost</span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Revolutionizing productivity with AI-powered automation. Join the future of work today.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-black px-6 py-2 rounded-r-lg font-semibold hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  {!link.isExternal && link.href.startsWith('/') ? (
                    <Link href={link.href}>
                      <motion.button
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {!link.isExternal && link.href.startsWith('/') ? (
                    <Link href={link.href}>
                      <motion.button
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-left"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">© 2024 FlowBoost. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-gray-400 hover:text-${social.color}-400 transition-colors duration-300`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
