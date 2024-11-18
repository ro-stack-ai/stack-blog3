import React from 'react';

const CaseCard = ({ 
  title, 
  subtitle, 
  description, 
  image,
  isMain = false
}: { 
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isMain?: boolean;
}) => (
  <div className={`relative overflow-hidden rounded-[15px] group h-full ${isMain ? 'h-full' : ''}`}>
    <div 
      className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
      style={{ 
        backgroundImage: `url(${image})`,
      }}
    />
    {/* Filtre vert plus prononcé */}
    <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply z-[1]" />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/40 transition-colors duration-300 z-[2]" />
    <div className="relative z-[3] p-8 h-full flex flex-col">
      <div className="flex-grow">
        <p className="text-[12px] uppercase tracking-[0.1em] text-primary mb-3 font-lato font-bold">
          {subtitle}
        </p>
        <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
          {title}
        </h3>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
        <p className="text-white/90 font-lato leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

// Rest of the UseCases component remains the same
const UseCases = () => {
  const cases = [
    {
      title: "Système CCRM",
      subtitle: "UNE NOUVELLE NORME DE COMMUNICATION",
      description: "En alliant la puissance d'un canal de communication comme WhatsApp avec un CRM aux possibilités infinies et des automatisations pertinentes, vos stratégies de marketing et communications s'amélioreront considérablement !",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Contenu en Mode Auto",
      subtitle: "VIVEZ AVEC VOTRE TEMPS SANS VOUS EPUISER",
      description: "Au lieu de vous perdre dans des activités chronophages, vous pouvez opter pour la version automatisée tout en respectant votre ton et votre personnalité.",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Processus Autonome",
      subtitle: "REPRENEZ EN MAIN VOTRE ACTIVITE",
      description: "Gérer votre comptabilité, créer/envoyer vos rapports ou encore générer des devis personnalisés ne doivent plus constituer une partie importante de votre temps de travail.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div>
            <div className="inline-block">
              <span className="bg-[#083110] text-white px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
                CAS PRATIQUES
              </span>
            </div>
            
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
              <div className="lg:h-full">
                <CaseCard {...cases[0]} isMain={true} />
              </div>
              <div className="grid grid-cols-1 gap-8 h-full">
                {cases.slice(1).map((caseItem, index) => (
                  <CaseCard key={index} {...caseItem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;