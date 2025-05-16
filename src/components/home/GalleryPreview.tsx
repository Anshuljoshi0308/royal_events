import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
}

const GalleryPreview: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "wedding",
      title: "Elegant Wedding Ceremony"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "holi",
      title: "Colorful Holi Celebration"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "corporate",
      title: "Annual Corporate Gala"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "decor",
      title: "Elegant Stage Decoration"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "wedding",
      title: "Luxurious Wedding Reception"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5935792/pexels-photo-5935792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "corporate",
      title: "Product Launch Event"
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'holi', name: 'Holi Events' },
    { id: 'decor', name: 'Decorations' }
  ];

  const filteredImages = galleryImages.filter(image => 
    activeFilter === 'all' || image.category === activeFilter
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Browse through our portfolio of magnificent events we've had the honor to organize.
            From weddings to corporate events, each celebration tells a unique story.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-royal-blue-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-royal-gold-500 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-serif text-xl font-bold">{image.title}</h3>
                  <p className="text-royal-gold-500 capitalize">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="btn btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;