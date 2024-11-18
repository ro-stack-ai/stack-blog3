import React from 'react';

const Features = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border border-[#083110] rounded-[15px] bg-[#0a0a0a] overflow-hidden">
        <div className="px-8 sm:px-12 lg:px-16 pt-24 pb-24">
          <div>
            <div className="inline-block">
              <span className="bg-[#083110] text-white px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
                DÉLÉGUEZ VOS OPÉRATIONS
              </span>
            </div>
            
            <h2 className="mt-10 text-4xl sm:text-5xl font-montserrat font-bold text-white leading-tight max-w-4xl">
              Une meilleure façon de gérer votre business
            </h2>
            
            <p className="mt-8 text-lg text-gray-300 font-lato max-w-4xl">
              Combien d'heures par semaine perdez-vous à gérer des tâches répétitives sans réelles plus-values ? Passez à une approche plus efficiente qui optimise votre temps et offre de meilleurs retours.
            </p>
            
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative">
                <div className="h-[2px] w-full bg-secondary mb-12"></div>
                <div className="bg-[#baf463] w-8 h-8 rounded-full flex items-center justify-center text-[#083110] font-bold mb-8">
                  1
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">
                  Gain de Temps
                </h3>
                <p className="text-gray-300 font-lato leading-relaxed">
                  Réduisez de 30 % le temps passé sur l'administratif en automatisant les tâches récurrentes, pour mieux vous concentrer sur vos priorités stratégiques.
                </p>
              </div>

              <div className="relative">
                <div className="h-[2px] w-full bg-secondary mb-12"></div>
                <div className="bg-[#baf463] w-8 h-8 rounded-full flex items-center justify-center text-[#083110] font-bold mb-8">
                  2
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">
                  Précision Optimisée
                </h3>
                <p className="text-gray-300 font-lato leading-relaxed">
                  Minimisez les erreurs en centralisant et en structurant vos données. Une automatisation sans faille, pour des processus fiables et cohérents.
                </p>
              </div>

              <div className="relative">
                <div className="h-[2px] w-full bg-secondary mb-12"></div>
                <div className="bg-[#baf463] w-8 h-8 rounded-full flex items-center justify-center text-[#083110] font-bold mb-8">
                  3
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-6">
                  Relation Renforcée
                </h3>
                <p className="text-gray-300 font-lato leading-relaxed">
                  Assurez un service client sans interruption : préqualification, prise de rendez-vous, suivis automatisés. Une relation client accessible et réactive, 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;