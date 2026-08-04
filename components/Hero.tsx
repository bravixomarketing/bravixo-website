'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-accent bg-opacity-10 text-accent rounded-full text-sm font-semibold">
            🎯 Marketing Beyond Screens
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary dark:text-white mb-6 leading-tight"
        >
          Connect with{' '}
          <span className="text-accent">Real Customers</span> in Real Places
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Field activation campaigns that drive engagement, build brand loyalty, and deliver measurable results. From rural markets to urban centers, we bring your brand to life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Start Your Campaign
            <FiArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-all"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">500+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Successful Campaigns</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">50+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Brands Partnered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">2M+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lives Touched</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
