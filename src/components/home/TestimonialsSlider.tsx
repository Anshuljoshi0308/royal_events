import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  eventType: string;
}

const TestimonialsSlider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya & Rahul",
      role: "Wedding Couple",
      avatar: "https://images.pexels.com/photos/3779421/pexels-photo-3779421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "The Royal Events turned our wedding into a dream. From the mandap design to the reception setup, every detail was perfect. Their team's dedication and creativity exceeded our expectations.",
      eventType: "Wedding"
    },
    {
      id: 2,
      name: "Rajesh Sharma",
      role: "CEO, TechSolutions Inc.",
      avatar: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "Our product launch event managed by The Royal Events was exceptional. Professional, timely, and innovative - they delivered beyond what we imagined. Our clients were impressed with the production quality.",
      eventType: "Corporate Event"
    },
    {
      id: 3,
      name: "Meera Kapoor",
      role: "Birthday Celebrant",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "The surprise birthday party organized by The Royal Events was magical! The themed decorations, entertainment, and catering were all spectacular. My guests still talk about it months later.",
      eventType: "Private Party"
    },
    {
      id: 4,
      name: "Anil & Friends",
      role: "Holi Celebration Group",
      avatar: "https://images.pexels.com/photos/4969888/pexels-photo-4969888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "Their Holi event was the highlight of our year! Amazing arrangements, safety measures, brilliant colors, and great music. The Royal Events truly knows how to celebrate our cultural traditions in style.",
      eventType: "Cultural Event"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Love from Our Clients</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about their 
            experience working with The Royal Events.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col border-t-4 border-royal-gold-500">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-royal-blue-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-royal-blue-50 text-royal-blue-800 text-xs mt-1">
                      {testimonial.eventType}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 italic flex-grow">"{testimonial.comment}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-royal-gold-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;