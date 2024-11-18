import React from 'react';
import { Layers, Target, FastForward } from 'lucide-react';

const TimelineStep = ({ step, title, description, isLast = false }: { 
  step: string; 
  title: string; 
  description: string; 
  isLast?: boolean; 
}) => (
  <div className="relative pl-20">
    {/* Ligne verticale continue */}
    {!isLast && (
  <div className="absolute left-5 top-0 w-[1px] h-[calc(100%+8rem)] bg-secondary" />
)}
    
    {/* Cercle vert */}
    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary" />
    
    {/* Contenu */}
    <div className="relative">
      <span className="text-sm text-gray-400 uppercase tracking-wider">{step}</span>
      <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-300 max-w-2xl">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string; 
}) => (
  <div className="flex flex-col gap-6 items-start"> {/* Retiré sm:flex-row */}
    <Icon className="w-10 h-10 text-primary" strokeWidth={2} /> {/* Utilisé une taille Tailwind valide */}
    <div>
      <h3 className="text-xl font-montserrat font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300 font-lato leading-relaxed">
        {description}
      </p>
    </div>  
  </div>
);

const Collaboration = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border border-secondary rounded-[15px] bg-[#0a0a0a] overflow-hidden">
        <div className="px-8 sm:px-12 lg:px-16 pt-24 pb-24">
          <div>
            <div className="inline-block">
              <span className="bg-secondary text-white px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
                COLLABORATION
              </span>
            </div>

            {/* Premier modèle */}
            <div className="mt-16">
              <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white">
                Modèle <span className="text-primary">Assemblage et Livraison</span>
              </h2>
              <p className="mt-4 text-gray-300 font-lato">
                Idéal pour les projets ponctuels, précis et rapides
              </p>
              
              {/* Container de la timeline */}
              <div className="mt-24 relative space-y-32">
                <TimelineStep 
                  step="ETAPE 1"
                  title="Appel d'introduction"
                  description="Premier rendez-vous de 30 min afin de comprendre vos besoins. Si entente, envoi d'une proposition complète en moins de 24h."
                />
                <TimelineStep 
                  step="ETAPE 2"
                  title="Set-up & Lancement"
                  description="Selon la complexité des tâches et du projet global, la mise en place et le lancement se font généralement entre 10-30 jours."
                />
                <TimelineStep 
                  step="ETAPE 3"
                  title="Suivi"
                  description="Nous fournissons un rapport de projet et tous les éléments de formations nécessaires au bon maintient du système mis en place."
                  isLast={true}
                />
              </div>
            </div>

            {/* Deuxième modèle */}
            <div className="mt-32">
              <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white">
                Modèle <span className="text-primary">Growth Partner</span>
              </h2>
              <p className="mt-4 text-gray-300 font-lato">
                Partenariat et collaboration sur des projets à moyen & long terme
              </p>

              <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
                <FeatureCard 
                  icon={Layers}
                  title="Accompagnement"
                  description="Un suivi continu pour adapter et affiner les stratégies en fonction de vos objectifs et de l'évolution du marché."
                />
                <FeatureCard 
                  icon={Target}
                  title="Flexibilité"
                  description="Des compétences pointues et une réactivité optimale sans les contraintes d'un recrutement interne."
                />
                <FeatureCard 
                  icon={FastForward}
                  title="Proactivité"
                  description="Des conseils et initiatives en amont pour anticiper les besoins et saisir les opportunités avant vos concurrents."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;