'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
  ],
  Resources: [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ],
};

const socialLinks = [
  { icon: FiFacebook, href: '#facebook', label: 'Facebook' },
  { icon: FiTwitter, href: '#twitter', label: 'Twitter' },
  { icon: FiLinkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: FiInstagram, href: '#instagram', label: 'Instagram' },
];

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-primary dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-accent mb-2">Bravixo</h3>
                <p className="text-gray-400">
                  Connecting brands with real customers through innovative field activation campaigns.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
                  <FiPhone className="w-4 h-4" />
                  <a href="tel:+915551234567">+91 (555) 123-4567</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
                  <FiMail className="w-4 h-4" />
                  <a href="mailto:hello@bravixo.com">hello@bravixo.com</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FiMapPin className="w-4 h-4" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-accent transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-8"></div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-6 md:mb-0">
              <p>
                &copy; {new Date().getFullYear()} Bravixo Marketing. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    variants={itemVariants}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-accent bg-opacity-10 text-accent hover:bg-opacity-20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Top Scroll Button */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center pb-6"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-accent hover:text-white transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </motion.div>
    </footer>
  );
}
