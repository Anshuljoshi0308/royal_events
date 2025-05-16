import { Crown, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-royal-gold-500" />
            <span className="font-serif text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gold-gradient">
              The Royal Events
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
            <NavLink to="/testimonials" className="nav-link">
              Testimonials
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/plan-event" className="btn btn-primary">
              Plan Your Event
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-royal-blue-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-gray-100 shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-6">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/gallery"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/testimonials"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink
                to="/plan-event"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan Your Event
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;