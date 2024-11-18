import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  image, 
  category 
}: { 
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}) => (
  <div className="group relative overflow-hidden rounded-[15px] border border-secondary bg-[#0a0a0a] hover:border-primary transition-colors duration-300">
    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="bg-secondary text-white px-3 py-1 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
          {category}
        </span>
        <div className="flex items-center text-gray-400 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {readTime}
        </div>
      </div>
      <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 font-lato mb-6">
        {excerpt}
      </p>
      <div className="flex items-center text-primary font-lato font-bold group-hover:gap-2 transition-all">
        Lire l'article
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const Blog = () => {
  const articles = [
    {
      title: "Comment l'IA révolutionne le service client en 2024",
      excerpt: "Découvrez comment l'intelligence artificielle transforme l'expérience client et permet aux entreprises d'offrir un support 24/7 personnalisé.",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2000",
      category: "Intelligence Artificielle"
    },
    {
      title: "Les meilleures pratiques d'automatisation pour les PME",
      excerpt: "Guide complet des stratégies d'automatisation pour optimiser vos processus métier et augmenter votre productivité.",
      date: "12 Mars 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
      category: "Automatisation"
    },
    {
      title: "Intégration CRM : Guide pour débutants",
      excerpt: "Tout ce que vous devez savoir pour réussir l'intégration de votre CRM et maximiser son potentiel pour votre entreprise.",
      date: "8 Mars 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
      category: "CRM"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32">
      <div className="max-w-7xl mx-auto px-4 smI'll help you create a blog section that matches the design aesthetic of the main page. First, let's update the necessary files to add routing and create the blog page.

<boltArtifact id="add-blog-section" title="Add Blog Section">
<boltAction type="file" filePath="package.json">
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}