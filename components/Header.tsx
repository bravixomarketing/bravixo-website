'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-primary shadow-lg dark:shadow-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-primary dark:text-white hidden sm:inline">
                Bravixo
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                variants={itemVariants}
                className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300 font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <Link
              href="#contact"
              className="px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 text-primary dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 pt-4"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300 font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all text-center"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
