'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We dive deep into understanding your brand, target audience, and market dynamics to create a tailored strategy.',
    details: ['Brand Audit', 'Market Research', 'Audience Segmentation', 'Competitive Analysis'],
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Our team crafts a comprehensive field activation strategy aligned with your business goals and brand values.',
    details: ['Campaign Planning', 'Budget Allocation', 'Timeline Creation', 'KPI Definition'],
  },
  {
    number: '03',
    title: 'Execution & Activation',
    description: 'We deploy your campaign across selected locations with trained teams ensuring flawless on-ground execution.',
    details: ['Team Training', 'On-Ground Activation', 'Real-time Monitoring', 'Quality Assurance'],
  },
  {
    number: '04',
    title: 'Analysis & Optimization',
    description: 'We continuously monitor performance and optimize campaigns in real-time for maximum impact and ROI.',
    details: ['Performance Tracking', 'Data Analysis', 'Optimization', 'Reporting'],
  },
  {
    number: '05',
    title: 'Reporting & Insights',
    description: 'Comprehensive reports showcase results, learnings, and actionable insights for future campaigns.',
    details: ['Detailed Analytics', 'ROI Measurement', 'Key Learnings', 'Recommendations'],
  },
];

export function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary">
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
            Our Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A structured approach to delivering exceptional field activation campaigns that drive real results.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line - Hidden on Mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-light dark:bg-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Step Number & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl font-bold text-accent opacity-20">{step.number}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FiCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Circle - Hidden on Mobile */}
                <div className="hidden lg:flex w-1/2 items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Ready to start your field activation journey?
          </p>
          <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
