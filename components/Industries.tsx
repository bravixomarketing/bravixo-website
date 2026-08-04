'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const industries = [
  {
    title: 'FMCG & Food Beverages',
    description: 'Strategic sampling and product demonstrations to drive trial and adoption in competitive markets.',
    icon: '🥤',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Health & Wellness',
    description: 'Educational campaigns and experiential activations promoting healthy lifestyles and wellness products.',
    icon: '💊',
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Technology & Electronics',
    description: 'Immersive tech experiences that showcase innovation and build brand enthusiasm among early adopters.',
    icon: '📱',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Fashion & Lifestyle',
    description: 'Trendsetting activations that connect brands with style-conscious consumers and build brand loyalty.',
    icon: '👔',
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Automotive',
    description: 'Test drive events and interactive experiences that showcase vehicle features and drive sales.',
    icon: '🚗',
    color: 'from-red-400 to-red-600',
  },
  {
    title: 'Financial Services',
    description: 'Educational activations that build trust and awareness for banking, insurance, and investment products.',
    icon: '💳',
    color: 'from-yellow-400 to-yellow-600',
  },
];

export function Industries() {
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
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proven expertise across diverse sectors with campaigns tailored to industry-specific challenges and opportunities.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative p-8 z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{industry.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <FiArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-accent to-accent bg-opacity-10 rounded-xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-4">
            Don't see your industry?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've successfully worked with brands across numerous sectors. Let's explore how we can help yours.
          </p>
          <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Get a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
