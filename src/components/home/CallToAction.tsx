import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Event background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-royal-blue-900/80"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Plan Your <span className="text-royal-gold-500">Royal Event</span>?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Let us help you create an unforgettable experience. Our team of experts is ready
            to turn your vision into a magnificent celebration. Contact us today to get started!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/plan-event" className="btn btn-primary">
              Plan Your Event
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;