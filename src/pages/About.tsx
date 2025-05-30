import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { Crown, Target, Heart, Star } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Vikram Singh",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Rahul Gupta",
      role: "Event Manager",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Meera Kapoor",
      role: "Décor Specialist",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Discover our journey, our values, and the dedicated team bringing your dream events to life."
        backgroundImage="https://images.pexels.com/photos/5935741/pexels-photo-5935741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Since our inception in 2019, The Royal Events has been dedicated to creating 
                extraordinary experiences that leave lasting impressions. What started as a 
                small team with big dreams has now evolved into one of the region's most 
                sought-after event management companies.
              </p>
              <p className="text-gray-600 mb-6">
                Over 5+ years, we've successfully orchestrated more than 500 events, ranging 
                from intimate gatherings to grand celebrations with thousands of attendees. 
                Our journey has been one of passion, creativity, and unwavering commitment 
                to excellence.
              </p>
              <p className="text-gray-600">
                We take immense pride in our exclusive tie-up with Royal Palace, Dewas, and 
                other premium venues, which enables us to offer truly spectacular settings 
                for our clients' special moments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/2412825/pexels-photo-2412825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="The Royal Events story"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <div className="flex justify-between mb-4">
                  <div className="text-center">
                    <p className="font-serif text-royal-blue-800 text-3xl font-bold">500+</p>
                    <p className="text-gray-600 text-sm">Events</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-royal-blue-800 text-3xl font-bold">5+</p>
                    <p className="text-gray-600 text-sm">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-royal-blue-800 text-3xl font-bold">50+</p>
                    <p className="text-gray-600 text-sm">Team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle">
              At The Royal Events, we're guided by a clear mission and core values that 
              define who we are and how we work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-royal-blue-800"
            >
              <div className="bg-royal-blue-50 p-4 rounded-full inline-block mb-6">
                <Crown className="h-8 w-8 text-royal-blue-800" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-royal-blue-800">Our Mission</h3>
              <p className="text-gray-600">
                To transform ordinary moments into extraordinary memories by delivering 
                exceptional event experiences that exceed expectations and create lasting joy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-royal-gold-500"
            >
              <div className="bg-royal-gold-50 p-4 rounded-full inline-block mb-6">
                <Target className="h-8 w-8 text-royal-gold-500" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-royal-blue-800">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as the premier event management company in India, setting 
                new standards of creativity, elegance, and seamless execution in every celebration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-royal-purple-800"
            >
              <div className="bg-royal-purple-50 p-4 rounded-full inline-block mb-6">
                <Heart className="h-8 w-8 text-royal-purple-800" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 text-royal-blue-800">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-royal-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Excellence in every detail</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-royal-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Creativity and innovation</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-royal-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-royal-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Client-centered approach</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The creative minds and dedicated professionals behind The Royal Events. Our diverse 
              team brings together expertise from various fields to create magical experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-center space-x-4">
                      <a href="#" className="text-white hover:text-royal-gold-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-royal-gold-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-royal-gold-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-royal-blue-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;