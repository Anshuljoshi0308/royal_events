import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState<GalleryItem[]>([]);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Royal Garden Wedding",
      category: "wedding",
      image: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Palace Gardens, Dewas",
      year: "2024"
    },
    {
      id: 2,
      title: "Corporate Annual Gala",
      category: "corporate",
      image: "https://images.pexels.com/photos/7647673/pexels-photo-7647673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Grand Hotel, Indore",
      year: "2024"
    },
    {
      id: 3,
      title: "Holi Festival Celebration",
      category: "cultural",
      image: "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Community Grounds, Dewas",
      year: "2024"
    },
    {
      id: 4,
      title: "Luxury Wedding Reception",
      category: "wedding",
      image: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Royal Palace, Dewas",
      year: "2023"
    },
    {
      id: 5,
      title: "Product Launch Event",
      category: "corporate",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Tech Park, Indore",
      year: "2023"
    },
    {
      id: 6,
      title: "Traditional Mandap Decoration",
      category: "decor",
      image: "https://images.pexels.com/photos/5157652/pexels-photo-5157652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Heritage Resort, Dewas",
      year: "2023"
    },
    {
      id: 7,
      title: "Celebrity Performance",
      category: "entertainment",
      image: "https://images.pexels.com/photos/2909367/pexels-photo-2909367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Amphitheater, Indore",
      year: "2023"
    },
    {
      id: 8,
      title: "Corporate Team Building",
      category: "corporate",
      image: "https://images.pexels.com/photos/8553865/pexels-photo-8553865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Adventure Resort, Mhow",
      year: "2023"
    },
    {
      id: 9,
      title: "Fairy Tale Wedding Theme",
      category: "wedding",
      image: "https://images.pexels.com/photos/1456477/pexels-photo-1456477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Lakeside Manor, Indore",
      year: "2022"
    },
    {
      id: 10,
      title: "Award Night Ceremony",
      category: "corporate",
      image: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Business Tower, Indore",
      year: "2022"
    },
    {
      id: 11,
      title: "Engagement Celebration",
      category: "wedding",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Luxury Resort, Maheshwar",
      year: "2022"
    },
    {
      id: 12,
      title: "Cultural Dance Performance",
      category: "cultural",
      image: "https://images.pexels.com/photos/7024767/pexels-photo-7024767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Community Center, Dewas",
      year: "2022"
    },
    {
      id: 13,
      title: "Luxurious Birthday Celebration",
      category: "private",
      image: "https://images.pexels.com/photos/5711255/pexels-photo-5711255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Mansion House, Indore",
      year: "2022"
    },
    {
      id: 14,
      title: "Corporate Conference",
      category: "corporate",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Convention Center, Indore",
      year: "2021"
    },
    {
      id: 15,
      title: "Destination Wedding",
      category: "wedding",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Beachside Resort, Goa",
      year: "2021"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'cultural', name: 'Cultural Celebrations' },
    { id: 'decor', name: 'Decorations' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'private', name: 'Private Parties' }
  ];

  useEffect(() => {
    filterItems(activeFilter);
  }, [activeFilter]);

  const filterItems = (category: string) => {
    const filtered = category === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === category);
    
    setVisibleItems(filtered);
  };

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="Browse through our portfolio showcasing our finest events and creations."
        backgroundImage="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-20">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-royal-blue-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-royal-gold-500 hover:text-white'
                } shadow-sm`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {visibleItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md"
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-royal-gold-500 capitalize">{item.category}</p>
                        <div className="flex space-x-2 text-gray-300 text-sm">
                          <span>{item.location}</span>
                          <span>•</span>
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Lightbox */}
          {selectedItem && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div 
                className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black transition-colors z-10"
                  onClick={closeLightbox}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="relative aspect-[16/9]">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-royal-blue-800 mb-2">
                    {selectedItem.title}
                  </h3>
                  <div className="flex flex-wrap gap-y-2 justify-between items-center">
                    <div className="flex items-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-royal-blue-50 text-royal-blue-800 text-sm mr-3">
                        {selectedItem.category}
                      </span>
                      <span className="text-gray-600">{selectedItem.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{selectedItem.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No Results */}
          {visibleItems.length === 0 && (
            <div className="text-center py-16">
              <h3 className="font-serif text-2xl text-royal-blue-800 mb-4">No Events Found</h3>
              <p className="text-gray-600">There are no events available in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;