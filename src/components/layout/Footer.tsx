import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Instagram, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal-blue-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Crown className="h-8 w-8 text-royal-gold-500" />
              <span className="font-serif text-xl font-bold text-royal-gold-500">
                The Royal Events
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Turning Dreams into Royal Celebrations. We specialize in creating memorable 
              events including weddings, corporate functions, cultural celebrations and more.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/royal_events29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:info@theroyalevents.com"
                className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-royal-gold-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-royal-gold-500">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-royal-gold-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Royal Avenue, Dewas, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-royal-gold-500 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-royal-gold-500 flex-shrink-0" />
                <a
                  href="mailto:info@theroyalevents.com"
                  className="text-gray-300 hover:text-royal-gold-500 transition-colors"
                >
                  info@theroyalevents.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-royal-gold-500">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on events and promotions.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-royal-blue-800 border border-royal-blue-700 focus:outline-none focus:border-royal-gold-500 rounded-l-md text-white"
                required
              />
              <button
                type="submit"
                className="bg-royal-gold-500 hover:bg-royal-gold-600 p-2 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-royal-blue-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} The Royal Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;