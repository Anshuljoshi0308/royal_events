import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">We Create Memories That Last a Lifetime</h2>
            <p className="text-gray-600 mb-6">
              The Royal Events has been transforming dreams into reality for over 5 years. 
              Our passion for perfection and attention to detail has made us one of the 
              leading event management companies in the region.
            </p>
            <p className="text-gray-600 mb-6">
              We're proud of our exclusive tie-up with Royal Palace, Dewas, and other premium 
              venues across the region, allowing us to create truly magical experiences for 
              our clients.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-center">
                <p className="font-serif text-royal-blue-800 text-4xl font-bold">500+</p>
                <p className="text-gray-600">Events Organized</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-royal-blue-800 text-4xl font-bold">5+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-royal-blue-800 text-4xl font-bold">50+</p>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary">
              More About Us
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Wedding decoration"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Corporate event"
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cultural celebration"
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/6322984/pexels-photo-6322984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Holi celebration"
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;