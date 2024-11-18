import React from 'react';
import { Users, LayoutGrid, Settings, MessageCircle, Pencil, FolderKanban } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="relative p-8 lg:p-10 rounded-[15px] transition-all duration-300 hover:transform hover:scale-[1.02] group">
    {/* Background with blur effect */}
    <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[2px] rounded-[15px] border border-white/5"></div>
    
    {/* Content */}
    <div className="relative">
      <div className="flex items-start gap-5">
        <div className="bg-[#baf463] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
          <Icon className="h-5 w-5 text-[#083110]" />
        </div>
        <div>
          <h3 className="text-xl font-montserrat font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-gray-300 font-lato leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Plus de Leads",
      description: "Des systèmes de marketing et de prospection évolutifs et abordables pour faire croître votre entreprise en pilote automatique."
    },
    {
      icon: LayoutGrid,
      title: "Intégration CRM",
      description: "Centralisez, automatisez et améliorez la gestion de vos relations clients avec un système solide et des données accessibles."
    },
    {
      icon: Settings,
      title: "Automatisation",
      description: "Des processus fluides et sans erreurs pour libérer votre équipe des tâches fastidieuses sans efforts supplémentaires."
    },
    {
      icon: MessageCircle,
      title: "Assistant IA",
      description: "Un service client réactif et disponible 24/7 pour accueillir, qualifier et orienter vos contacts sans votre intervention."
    },
    {
      icon: Pencil,
      title: "Contenu Auto",
      description: "Des textes générés automatiquement pour alimenter vos publications sans effort manuel."
    },
    {
      icon: FolderKanban,
      title: "Gestion de Projet",
      description: "Un suivi de projets simple et précis pour garantir le respect de vos délais et objectifs."
    }
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border border-[#083110] rounded-[15px] bg-[#0a0a0a] overflow-hidden">
        <div className="px-8 sm:px-12 lg:px-16 pt-24 pb-24">
          <div>
            <div className="inline-block">
              <span className="bg-[#083110] text-white px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
                SERVICES
              </span>
            </div>
            
            <h2 className="mt-10 text-4xl sm:text-5xl font-montserrat font-bold text-white leading-tight">
              Qu'est-ce que nos clients obtiennent
            </h2>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;