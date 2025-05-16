import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  event: string;
  rating: number;
  featured?: boolean;
  video?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya & Rahul",
      role: "Wedding Couple",
      avatar: "https://images.pexels.com/photos/3779421/pexels-photo-3779421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "The Royal Events created our dream wedding! Every detail was meticulously planned and executed to perfection. From the breathtaking mandap to the elegant reception setup, their team went above and beyond to make our special day truly magical. We received countless compliments from our guests on how beautiful everything looked.",
      event: "Wedding",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Rajesh Sharma",
      role: "CEO, TechSolutions Inc.",
      avatar: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "We trusted The Royal Events with our annual corporate gala, and they exceeded all expectations. The venue transformation was spectacular, and the event ran flawlessly from start to finish. Their attention to our brand details and company culture showed in every aspect of the event. We've already booked them for next year!",
      event: "Corporate Event",
      rating: 5
    },
    {
      id: 3,
      name: "Meera Kapoor",
      role: "Birthday Celebrant",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "The surprise birthday party organized by The Royal Events was beyond my wildest dreams! The themed decorations were magical, the entertainment was top-notch, and the catering was absolutely delicious. They managed to keep everything a secret while coordinating with my family. It was truly the best birthday I've ever had!",
      event: "Private Party",
      rating: 5,
      featured: true,
      video: "https://player.vimeo.com/external/400197791.hd.mp4?s=2a926e2c790e51f5200a753b0f1e5a42b9a01e20&profile_id=175&oauth2_token_id=57447761"
    },
    {
      id: 4,
      name: "Anil & Friends",
      role: "Holi Celebration Group",
      avatar: "https://images.pexels.com/photos/4969888/pexels-photo-4969888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "Our Holi event organized by The Royal Events was the highlight of our year! From the organic colors to the amazing music and dance performances, everything was perfectly arranged. The safety measures were impressive, and everyone had a fantastic time. The Royal Events truly knows how to honor our traditions while adding their creative touch!",
      event: "Cultural Event",
      rating: 5
    },
    {
      id: 5,
      name: "Sunita & Vikram",
      role: "25th Anniversary",
      avatar: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "For our 25th anniversary, we wanted something truly special. The Royal Events created an intimate, romantic celebration that perfectly reflected our journey together. The attention to personalized details was remarkable - they incorporated photos from our wedding and important milestones in the decorations. It was an emotional and beautiful evening.",
      event: "Anniversary Celebration",
      rating: 5
    },
    {
      id: 6,
      name: "Arjun Malhotra",
      role: "Product Manager, InnoTech",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "Our product launch event was critical to our company's success this quarter, and The Royal Events delivered beyond our expectations. The technical setup was flawless, the staging impressive, and the overall experience for our clients was outstanding. Their team's professionalism and attention to detail made all the difference.",
      event: "Corporate Launch",
      rating: 5,
      featured: true
    },
    {
      id: 7,
      name: "Ritu Agarwal",
      role: "Mother of the Bride",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "From our first meeting to the last dance at my daughter's wedding, The Royal Events team was exceptional. They listened to all our wishes and concerns, provided creative solutions, and managed the entire planning process seamlessly. The wedding day was stress-free and absolutely beautiful. Worth every penny!",
      event: "Wedding",
      rating: 5,
      video: "https://player.vimeo.com/external/497780498.hd.mp4?s=9833ec1610faedd1bfee26bc9cea86a825aa5f73&profile_id=175&oauth2_token_id=57447761"
    },
    {
      id: 8,
      name: "Deepak & Friends",
      role: "New Year's Party",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      comment: "The New Year's Eve event organized by The Royal Events was spectacular! The venue decoration, countdown arrangements, and after-party were all top-notch. The DJ they arranged kept everyone dancing all night long. It was the perfect way to ring in the new year with friends and family.",
      event: "Holiday Event",
      rating: 4
    }
  ];

  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);
  const regularTestimonials = testimonials.filter(testimonial => !testimonial.featured);

  return (
    <>
      <PageHeader
        title="Client Testimonials"
        subtitle="Hear what our clients have to say about their experiences with The Royal Events."
        backgroundImage="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Featured Testimonials */}
      <section className="py-20">
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
              We take pride in creating memorable experiences for all our clients. Here are 
              some of their thoughts about working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-royal-gold-500"
              >
                {testimonial.video ? (
                  <div className="aspect-video relative">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      poster={testimonial.avatar}
                    >
                      <source src={testimonial.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : null}
                <div className="p-6">
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
                        {testimonial.event}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-royal-gold-500' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regular Testimonials */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-royal-blue-800"
              >
                {testimonial.video ? (
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      poster={testimonial.avatar}
                    >
                      <source src={testimonial.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : null}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-base text-royal-blue-800">
                      {testimonial.name}
                    </h3>
                    <div className="flex flex-wrap items-center">
                      <p className="text-gray-600 text-xs mr-2">{testimonial.role}</p>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-royal-blue-50 text-royal-blue-800 text-xs">
                        {testimonial.event}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm mb-3">"{testimonial.comment}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'text-royal-gold-500' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Experience Our Service for Yourself</h2>
              <p className="text-gray-600 mb-8">
                Join our growing list of satisfied clients. Contact us today to discuss your 
                event needs and let us create an unforgettable experience for you and your guests.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/plan-event" className="btn btn-primary">
                  Plan Your Event
                </a>
                <a href="/contact" className="btn btn-outline">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;