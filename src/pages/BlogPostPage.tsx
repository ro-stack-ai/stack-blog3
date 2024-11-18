import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = useBlog();
  const post = posts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-montserrat font-bold text-white">Article non trouvé</h1>
            <button 
              onClick={() => navigate('/blog')}
              className="mt-8 inline-flex items-center text-primary font-lato font-bold hover:gap-2 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux articles
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-secondary rounded-[15px] bg-[#0a0a0a] overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
          </div>
          
          <div className="px-8 sm:px-12 lg:px-16 py-16">
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center text-primary font-lato font-bold hover:gap-2 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux articles
            </button>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
                {post.category}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-montserrat font-bold text-white mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-12 border-b border-secondary pb-8">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-lato font-medium">{post.author.name}</p>
                <p className="text-gray-400 text-sm">{post.author.role}</p>
              </div>
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-none font-lato mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/30 text-gray-300 text-sm"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;