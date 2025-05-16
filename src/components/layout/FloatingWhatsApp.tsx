import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = 'https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20event%20planning%20services.';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <MessageCircle size={28} />
        <span className="absolute -top-10 right-0 bg-white text-green-600 text-sm px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;