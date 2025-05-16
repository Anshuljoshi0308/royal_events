import { motion } from 'framer-motion';
import { Building2, Camera, Mic2, Palette, PartyPopper, BellRing as Ring, Utensils } from 'lucide-react';
import React from 'react';
import PageHeader from '../components/common/PageHeader';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <Ring size={32} />,
      title: "Wedding Planning",
      description: "We craft bespoke wedding experiences from intimate ceremonies to grand celebrations. Our meticulous planning ensures every aspect of your special day is perfect.",
      features: [
        "Complete wedding planning and coordination",
        "Venue selection and arrangement",
        "Custom entry choreography and bridal stages",
        "Creative bride and groom entries",
        "Theme development and implementation",
        "Vendor coordination and management",
        "Comprehensive budget planning"
      ],
      image: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      icon: <Palette size={32} />,
      title: "Stage Design & Decor",
      description: "Transform your event space with our artistic flair. From subtle elegance to dramatic statement pieces, our decor services create stunning visual environments.",
      features: [
        "Custom floral arrangements and installations",
        "Themed stage designs and setups",
        "LED and lighting design",
        "Traditional mandap design and decoration",
        "Table settings and centerpieces",
        "Entrance and venue decor",
        "3D visualization of designs before execution"
      ],
      image: "https://images.unsplash.com/photo-1640355105827-2aa98e908a7b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      icon: <PartyPopper size={32} />,
      title: "Cultural Events",
      description: "Celebrate traditions with our culturally authentic event management. From vibrant Holi festivals to traditional ceremonies, we honor customs while adding creative touches.",
      features: [
        "Holi celebrations with organic colors and safety measures",
        "Rang Panchami event organization",
        "Diwali parties and light installations",
        "Traditional music and dance arrangements",
        "Authentic decor and ambiance creation",
        "Cultural food coordination",
        "Traditional dress code guidance"
      ],
      image: "https://images.unsplash.com/photo-1645264090488-a019de493023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      icon: <Building2 size={32} />,
      title: "Corporate Events",
      description: "Elevate your corporate image with professionally managed business events. From product launches to team-building activities, we deliver impactful corporate experiences.",
      features: [
        "Product launches and promotional events",
        "Corporate award ceremonies",
        "Business conferences and seminars",
        "Trade shows and exhibitions",
        "Team building activities",
        "Corporate retreats and offsites",
        "Client appreciation events"
      ],
      image: "https://images.unsplash.com/photo-1695067058684-da5a90013c57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      icon: <PartyPopper size={32} />,
      title: "Private Parties",
      description: "Make your personal celebrations unforgettable with our private party planning. We pay attention to the details that make your milestone moments special.",
      features: [
        "Birthday parties for all ages",
        "Anniversary celebrations",
        "Engagement parties",
        "Baby showers and gender reveals",
        "Surprise party planning",
        "House warming events",
        "Custom theme development and execution"
      ],
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      icon: <Mic2 size={32} />,
      title: "Entertainment & Artist Booking",
      description: "Enhance your event with top-tier entertainment. We handle artist selection, booking, and coordination to bring your event to life with exceptional performances.",
      features: [
        "DJ and music programming",
        "Live band and musician booking",
        "Celebrity appearances and hosting",
        "Professional MC and announcer services",
        "Dancers and choreographed performances",
        "Specialized acts and entertainment",
        "Sound and technical production"
      ],
      image: "https://plus.unsplash.com/premium_photo-1708589337428-fa10197b5016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      icon: <Camera size={32} />,
      title: "Photography & Cinematography",
      description: "Capture your precious moments with our professional photography and videography services. We create stunning visual memories that last a lifetime.",
      features: [
        "Professional event photography",
        "Cinematic videography",
        "Drone aerial photography and video",
        "Same-day edits and highlight reels",
        "Photo booths and interactive experiences",
        "Album design and compilation",
        "Social media-ready content delivery"
      ],
      image: "https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      icon: <Utensils size={32} />,
      title: "Catering & Hospitality",
      description: "Delight your guests with exceptional food and service. Our catering and hospitality management ensures a memorable culinary experience for your event.",
      features: [
        "Multi-cuisine menu planning and execution",
        "Specialty food stations and live counters",
        "Dietary accommodation and special meal planning",
        "Bar service and cocktail design",
        "Wait staff coordination and training",
        "Table settings and dining experiences",
        "Food presentation and styling"
      ],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Discover our comprehensive range of event management services tailored to create unforgettable experiences."
        backgroundImage="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Services Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Comprehensive Event Solutions</h2>
            <p className="text-gray-600 mb-8">
              At The Royal Events, we provide end-to-end event management services designed to
              create magical experiences. Each service is delivered with attention to detail,
              creativity, and the highest standards of quality.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#service-${service.id}`}
                  className="px-4 py-2 bg-royal-blue-50 text-royal-blue-800 rounded-full hover:bg-royal-gold-500 hover:text-white transition-colors duration-300"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Detailed Services */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                id={`service-${service.id}`}
                key={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-royal-blue-50 p-4 rounded-full mr-4">
                        {service.icon}
                      </div>
                      <h2 className="font-serif text-3xl font-bold text-royal-blue-800">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-royal-gold-500 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}
                  >
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-royal-gold-500 text-white py-3 px-6 rounded-lg shadow-lg hidden md:block">
                        <div className="font-serif font-bold text-lg">Perfection in Every Detail</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="bg-royal-blue-800 rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-white mb-6">
                    Ready to Create Your Perfect Event?
                  </h2>
                  <p className="text-gray-200 mb-8">
                    Contact us today to discuss your vision. Our team is ready to bring 
                    your dream event to life with our comprehensive services and attention 
                    to detail.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/plan-event" className="btn btn-primary">
                      Plan Your Event
                    </a>
                    <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-royal-blue-800">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative hidden md:block">
                <img
                  src="https://images.pexels.com/photos/1484528/pexels-photo-1484528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Royal Events Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-royal-blue-900/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;