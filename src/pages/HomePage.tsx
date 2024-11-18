import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import Collaboration from '../components/Collaboration';
import Booking from '../components/Booking';

function HomePage() {
  return (
    <>
      <div className="mb-[100px]"></div>
      <Hero />
      <div className="mb-[100px]"></div>
      <Features />
      <div className="mb-[100px]"></div>
      <Services />
      <div className="mb-[100px]"></div>
      <UseCases />
      <div className="mb-[100px]"></div>
      <Testimonials />
      <div className="mb-[100px]"></div>
      <Collaboration />
      <div className="mb-[100px]"></div>
      <Booking />
    </>
  );
}

export default HomePage;