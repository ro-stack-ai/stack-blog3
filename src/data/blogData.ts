import { BlogPost, BlogCategory } from '../types/blog';

export const categories: BlogCategory[] = [
  {
    id: 'automation',
    name: 'Automatisation',
    description: 'Optimisez vos processus métier grâce à l\'automatisation intelligente'
  },
  {
    id: 'ai',
    name: 'Intelligence Artificielle',
    description: 'Découvrez comment l\'IA transforme le monde des affaires'
  },
  {
    id: 'crm',
    name: 'CRM',
    description: 'Améliorez votre gestion de la relation client'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'ia-service-client-2024',
    title: 'Comment l\'IA révolutionne le service client en 2024',
    excerpt: 'Découvrez comment l\'intelligence artificielle transforme radicalement l\'expérience client et permet aux entreprises d\'offrir un service personnalisé 24/7.',
    content: `
      <h2>L'évolution du service client à l'ère de l'IA</h2>
      <p>Le service client connaît une transformation majeure grâce à l'intelligence artificielle. Les chatbots nouvelle génération, les assistants virtuels et les systèmes de traitement automatique du langage naturel permettent désormais d'offrir une expérience client personnalisée et disponible en permanence.</p>
      
      <h2>Les avantages clés de l'IA dans le service client</h2>
      <ul>
        <li>Disponibilité 24/7 sans interruption</li>
        <li>Réponses instantanées aux questions fréquentes</li>
        <li>Personnalisation accrue des interactions</li>
        <li>Réduction des coûts opérationnels</li>
      </ul>
      
      <h2>Comment implémenter l'IA dans votre service client</h2>
      <p>L'intégration de l'IA dans votre stratégie de service client nécessite une approche réfléchie. Voici les étapes essentielles pour réussir cette transformation...</p>
    `,
    date: '15 Mars 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2000',
    category: 'ai',
    author: {
      name: 'Sophie Martin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      role: 'Experte IA'
    },
    tags: ['IA', 'Service Client', 'Automatisation', 'Innovation']
  },
  {
    id: 'meilleures-pratiques-automatisation',
    title: 'Les meilleures pratiques d\'automatisation pour votre business',
    excerpt: 'Guide complet des stratégies d\'automatisation qui permettent aux entreprises de gagner en efficacité tout en réduisant leurs coûts opérationnels.',
    content: `
      <h2>Pourquoi automatiser vos processus métier ?</h2>
      <p>L'automatisation des processus métier est devenue un élément clé de la transformation digitale. Elle permet non seulement d'optimiser les opérations mais aussi de libérer du temps précieux pour les tâches à haute valeur ajoutée.</p>
      
      <h2>Les domaines clés à automatiser</h2>
      <ul>
        <li>Gestion des leads et prospection</li>
        <li>Facturation et comptabilité</li>
        <li>Service client et support</li>
        <li>Marketing et communication</li>
      </ul>
      
      <h2>Comment démarrer votre stratégie d'automatisation</h2>
      <p>La mise en place d'une stratégie d'automatisation efficace nécessite une approche méthodique...</p>
    `,
    date: '12 Mars 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000',
    category: 'automation',
    author: {
      name: 'Thomas Dubois',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      role: 'Expert en Automatisation'
    },
    tags: ['Automatisation', 'Productivité', 'Transformation Digitale']
  }
];