import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServiceCards from '../components/home/ServiceCards';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import UpcomingEvents from '../components/home/UpcomingEvents';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServiceCards />
      <GalleryPreview />
      <TestimonialsSlider />
      <UpcomingEvents />
      <CallToAction />
    </>
  );
};

export default Home;