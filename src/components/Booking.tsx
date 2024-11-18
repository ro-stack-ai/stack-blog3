import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Booking = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Effet de lumière en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative border border-secondary rounded-[15px] bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden">
        <div className="px-8 sm:px-12 lg:px-16 pt-24 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block float-animation">
              <span className="bg-secondary text-white px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em] glow-effect">
                RÉSERVEZ UN APPEL GRATUIT
              </span>
            </div>
            
            <h2 className="mt-10 text-4xl sm:text-5xl font-montserrat font-bold text-white leading-tight">
              Prêt à automatiser votre croissance ?
            </h2>
            
            <p className="mt-8 text-lg text-gray-300 font-lato">
              Découvrez comment nous pouvons transformer votre business en une machine de croissance automatisée
            </p>
            
            <div className="mt-12">
              <a
                href="https://link.stack-solutions.ai/widget/booking/9iZ3JlEDD9bE5bZKBbMX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary text-secondary rounded-[15px] text-lg font-lato font-bold hover:bg-primary/90 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Réserver mon appel découverte
                <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              30 minutes gratuites pour explorer vos besoins et définir des solutions sur mesure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;