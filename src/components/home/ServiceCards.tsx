import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BellRing as Ring, Palette, Music, Building2, PartyPopper, Mic2, Camera, Utensils } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="royal-card p-6 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="bg-royal-blue-50 text-royal-blue-800 p-4 rounded-full inline-block mb-4 group-hover:bg-royal-gold-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold mb-2 text-royal-blue-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="text-royal-gold-500 hover:text-royal-gold-600 font-medium inline-flex items-center"
      >
        Learn More
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

const ServiceCards: React.FC = () => {
  const services = [
    {
      icon: <Ring size={24} />,
      title: "Wedding Planning",
      description: "From intimate ceremonies to grand celebrations, we create dream weddings with perfect choreography, stunning stages, and memorable experiences.",
    },
    {
      icon: <Palette size={24} />,
      title: "Stage Design & Decor",
      description: "Transform spaces with our exquisite floral setups, LED stages, mandap designs, and theme-based decorations that captivate and impress.",
    },
    {
      icon: <PartyPopper size={24} />,
      title: "Cultural Events",
      description: "Vibrant Holi parties, traditional Rang Panchami celebrations, festive Diwali nights, and other cultural events with authentic experiences.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Corporate Events",
      description: "Professional product launches, award ceremonies, seminars, and exhibitions designed to elevate your brand and impress stakeholders.",
    },
    {
      icon: <PartyPopper size={24} />,
      title: "Private Parties",
      description: "Memorable birthdays, anniversaries, baby showers, and surprise parties tailored to your personal style and preferences.",
    },
    {
      icon: <Mic2 size={24} />,
      title: "Entertainment & Artists",
      description: "Book top DJs, celebrities, anchors, and performers to add star power and entertainment value to your special events.",
    },
    {
      icon: <Camera size={24} />,
      title: "Photography & Cinematography",
      description: "Capture precious moments with our professional photography services, drone shots, cinematic reels, and highlight films.",
    },
    {
      icon: <Utensils size={24} />,
      title: "Catering & Hospitality",
      description: "Delight your guests with our multi-cuisine catering options and impeccable hospitality management for a complete experience.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Royal Services</h2>
          <p className="section-subtitle">
            From conception to execution, we offer a complete range of event management services 
            tailored to create unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;