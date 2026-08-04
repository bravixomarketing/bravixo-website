'use client';

import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiTarget, FiBarChart3, FiMapPin, FiBox } from 'react-icons/fi';

const services = [
  {
    icon: FiTrendingUp,
    title: 'Field Activation',
    description: 'On-ground brand experiences that create lasting impressions and drive immediate engagement with your target audience.',
  },
  {
    icon: FiBox,
    title: 'Product Demonstrations',
    description: 'Interactive product showcases that educate consumers and convert them into loyal brand advocates.',
  },
  {
    icon: FiUsers,
    title: 'Experiential Marketing',
    description: 'Immersive brand experiences that engage multiple senses and create memorable customer interactions.',
  },
  {
    icon: FiTarget,
    title: 'Sampling Campaigns',
    description: 'Strategic product sampling initiatives designed to increase trial rates and drive market penetration.',
  },
  {
    icon: FiMapPin,
    title: 'Rural & Urban Reach',
    description: 'Tailored campaigns for both rural and urban markets with localized strategies and cultural sensitivity.',
  },
  {
    icon: FiBarChart3,
    title: 'Growth Analytics',
    description: 'Data-driven insights and comprehensive performance metrics to measure ROI and optimize campaigns.',
  },
];

export function Services() {
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark">
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions designed to connect your brand with real customers through innovative field activation strategies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-primary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Border Animation */}
                <div className="mt-6 h-1 bg-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to transform your marketing strategy?
          </p>
          <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
