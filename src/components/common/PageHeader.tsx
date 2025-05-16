import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}

        <div className="flex items-center justify-center text-sm text-white">
          <Link to="/" className="hover:text-royal-gold-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-royal-gold-500">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;