import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  link: string;
}

const UpcomingEvents: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Holi Celebration 2025",
      date: "March 14, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Royal Palace Grounds, Dewas",
      image: "https://images.pexels.com/photos/13004580/pexels-photo-13004580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      id: 2,
      title: "Wedding Expo 2025",
      date: "January 15-16, 2025",
      time: "11:00 AM - 8:00 PM",
      location: "City Convention Center, Indore",
      image: "https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      id: 3,
      title: "New Year's Eve Gala",
      date: "December 31, 2025",
      time: "8:00 PM - 2:00 AM",
      location: "Starlight Hotel, Dewas",
      image: "https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join us for these exciting upcoming public events organized by The Royal Events.
            Experience our event management expertise firsthand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="royal-card group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3 text-royal-blue-800">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-royal-gold-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-royal-gold-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-royal-gold-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a
                  href={event.link}
                  className="btn btn-primary w-full"
                >
                  RSVP Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;