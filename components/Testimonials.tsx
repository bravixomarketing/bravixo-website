'use client';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Marketing Director, TechVision India',
    company: 'TechVision India',
    content: 'Bravixo transformed our product launch strategy. Their on-ground activations reached over 50,000 consumers in just 30 days. The ROI was exceptional.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Priya Sharma',
    role: 'Brand Manager, FreshEats Foods',
    company: 'FreshEats Foods',
    content: 'Working with Bravixo was a game-changer. Their team understood our brand and executed flawlessly across rural and urban markets.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Amit Patel',
    role: 'CEO, HealthPlus Wellness',
    company: 'HealthPlus Wellness',
    content: 'The data-driven approach and real-time optimization gave us insights we never had before. Highly recommended for any brand serious about field activation.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Sneha Desai',
    role: 'Head of Marketing, StyleHub Fashion',
    company: 'StyleHub Fashion',
    content: 'Bravixo\'s experiential campaigns created genuine connections with our customers. The engagement metrics were beyond our expectations.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Vikram Singh',
    role: 'Sales Director, AutoElite Motors',
    company: 'AutoElite Motors',
    content: 'Their test drive events and experiential activations drove significant foot traffic to our dealerships. Professional, efficient, and results-oriented.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Anjali Gupta',
    role: 'Marketing Head, FinServe Bank',
    company: 'FinServe Bank',
    content: 'Bravixo brought credibility and engagement to our financial services campaigns. Customer acquisition cost dropped significantly.',
    rating: 5,
    image: '👩‍💼',
  },
];

export function Testimonials() {
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
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-primary">
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real success stories from brands that partnered with us to achieve their marketing goals.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-light dark:bg-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header with Avatar and Stars */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Role */}
              <p className="text-sm text-accent font-medium mb-4">{testimonial.role}</p>

              {/* Quote */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Decorative Quote Mark */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-primary flex justify-end opacity-30">
                <span className="text-4xl font-bold text-accent">"</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-bold text-accent mb-2">98%</p>
            <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent mb-2">50+</p>
            <p className="text-gray-600 dark:text-gray-400">Brand Partners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent mb-2">2M+</p>
            <p className="text-gray-600 dark:text-gray-400">Consumers Engaged</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
