import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative border border-[#083110] rounded-[15px] bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden">
        <div className="px-8 sm:px-12 lg:px-16 pt-24 pb-24">
          <div className="text-center">
            <div className="inline-block">
              <div className="bg-[#083110] px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em] badge-glow">
                <span>AUTOMATISEZ VOTRE BUSINESS</span>
              </div>
            </div>
            
            <h1 className="mt-10 text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight max-w-5xl mx-auto">
              Nous créons des systèmes de croissance automatisés{' '}
              <span className="text-primary">clés en main</span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              Optimisez vos processus, améliorez vos acquisitions & vos relations clients
            </p>
            
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-[#baf463] text-[#083110] rounded-[15px] text-lg font-lato font-bold hover:bg-[#a5e052] transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                Prenez contact
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;