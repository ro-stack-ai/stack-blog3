import React from 'react';
import { BlogCategory } from '../../types/blog';

interface BlogHeaderProps {
  categories: BlogCategory[];
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-16">
      <div className="inline-block">
        <span className="bg-secondary text-white px-4 py-3 rounded-full text-[12px] font-lato font-bold uppercase tracking-[0.1em]">
          BLOG
        </span>
      </div>

      <h1 className="mt-10 text-4xl sm:text-5xl font-montserrat font-bold text-white leading-tight">
        Derniers Articles
      </h1>

      <p className="mt-8 text-lg text-gray-300 font-lato max-w-4xl">
        Découvrez nos derniers articles sur l'automatisation, l'IA et l'optimisation des processus métier
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-lato font-medium transition-colors ${
            selectedCategory === null
              ? 'bg-primary text-secondary'
              : 'bg-secondary/50 text-white hover:bg-secondary'
          }`}
        >
          Tous les articles
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-lato font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary text-secondary'
                : 'bg-secondary/50 text-white hover:bg-secondary'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;