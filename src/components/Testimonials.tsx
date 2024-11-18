import React from 'react';

const Testimonials = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border border-[#083110] rounded-[15px] bg-[#0a0a0a] overflow-hidden">
        <div className="px-8 sm:px-12 lg:px-16 pt-24 pb-24">
          <div>
            <div className="inline-block">
              <span className="bg-[#083110] text-white px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
                TESTIMONIALS
              </span>
            </div>
            
            <div className="mt-16">
              <blockquote className="relative">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-montserrat text-white/80 italic leading-relaxed">
                  "Stack Solutions a transformé notre gestion client avec une solution IA et automatisation sur mesure, simple à intégrer. Une décision clé pour notre succès !"
                </p>
                
                <footer className="mt-8">
                  <div className="flex items-center">
                    <div>
                      <p className="text-[#baf463] font-montserrat font-bold text-xl">
                        Gregory Perego
                      </p>
                      <p className="text-gray-400 font-lato mt-1">
                        Directeur, PeregoCars
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;