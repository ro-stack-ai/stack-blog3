import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const { id, title, excerpt, date, readTime, image, category } = post;

  return (
    <Link 
      to={`/blog/${id}`}
      className={`group block overflow-hidden rounded-[15px] border border-secondary bg-[#0a0a0a] hover:border-primary transition-colors duration-300 ${
        featured ? 'col-span-2 row-span-2' : ''
      }`}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-8">
        <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em] mb-4">
          {category}
        </span>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>

        <h3 className={`${featured ? 'text-3xl' : 'text-2xl'} font-montserrat font-bold text-white mb-4 group-hover:text-primary transition-colors`}>
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
    </Link>
  );
};

export default BlogCard;