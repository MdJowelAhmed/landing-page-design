"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className=" top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo Icon */}
            <div className="w-16 h-16  flex items-center justify-center">
              <Image
                src="/assets/navbar-logo.png"
                alt="Duty Hour App"
                width={64}
                height={64}
                // className="w-10 h-10 rounded-full border-2 border-[#0D9488] flex items-center justify-center"
              />
            </div>
            <span className="hidden lg:block text-xl font-bold text-[#1E293B]">
              Duty Hour App
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-2 lg:px-4 py-2 rounded-lg   font-medium transition-all duration-200 ${isActive
                        ? "text-accent-foreground font-bold"
                        : "text-secondary hover:text-[#1E293B]"
                      }`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link target="_blank" href="https://business.dutyhourapp.com/">
              <Button className="bg-gradient-to-r from-primary to-primary-foreground text-white rounded-sm lg:px-6 lg:py-6 px-4 py-3 shadow-lg shadow-teal-500/20">
                Start Your Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 8 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="w-full h-0.5 bg-[#1E293B] origin-left"
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                className="w-full h-0.5 bg-[#1E293B]"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -8 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="w-full h-0.5 bg-[#1E293B] origin-left"
              />
              {/* <Menu className="w-6 h-6 text-[#1E293B]" /> */}
              {/* <X className="w-6 h-6 text-[#1E293B]" /> */}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                          ? "bg-[#0D9488]/10 text-[#0D9488] font-semibold"
                          : "text-[#64748B] hover:text-[#1E293B] hover:bg-gray-50"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-full">
                    Start Your Free Trial
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
