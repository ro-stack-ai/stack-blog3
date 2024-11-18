import React, { useState, useMemo } from 'react';
import BlogCard from '../components/blog/BlogCard';
import BlogHeader from '../components/blog/BlogHeader';
import { categories } from '../data/blogData';
import { useBlog } from '../contexts/BlogContext';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { posts } = useBlog();

  const filteredPosts = useMemo(() => {
    // Ne montrer que les articles publiés
    const publishedPosts = posts.filter(post => post.status === 'published');
    
    if (!selectedCategory) return publishedPosts;
    return publishedPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory, posts]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-secondary rounded-[15px] bg-[#0a0a0a] overflow-hidden">
          <div className="px-8 sm:px-12 lg:px-16 pt-24 pb-24">
            <BlogHeader
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.id} 
                  post={post}
                  featured={index === 0} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;