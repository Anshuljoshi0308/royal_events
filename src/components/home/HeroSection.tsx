import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern z-9"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source
            src="https://player.vimeo.com/external/459388380.hd.mp4?s=39098f2feda8d236ed8843a2dc4f3015a228cabe&profile_id=175&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Turning Dreams into{" "}
            <span className="text-royal-gold-500">Royal Celebrations</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            From intimate gatherings to grand celebrations, we create unforgettable
            experiences tailored to your vision. With over 5 years of experience,
            we handle every detail with royal perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/gallery" className="btn btn-primary">
              Explore Our Work
            </Link>
            <Link to="/plan-event" className="btn btn-outline">
              Plan Your Event
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToServices}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-royal-gold-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;