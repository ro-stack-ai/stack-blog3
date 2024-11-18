import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Tag, Clock, Save, Send } from 'lucide-react';
import { categories } from '../../data/blogData';
import { BlogPost } from '../../types/blog';

interface PostFormProps {
  formData: Partial<BlogPost> & { tags: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent, status: 'draft' | 'published') => void;
  isEditing?: boolean;
}

const PostForm: React.FC<PostFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  isEditing = false
}) => {
  const navigate = useNavigate();

  return (
    <form className="space-y-8">
      {/* Titre */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
          Titre de l'article *
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-secondary bg-[#0a0a0a] rounded-md text-white focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Entrez le titre de l'article"
        />
      </div>

      {/* Extrait */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">
          Extrait *
        </label>
        <textarea
          name="excerpt"
          id="excerpt"
          rows={3}
          value={formData.excerpt}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-secondary bg-[#0a0a0a] rounded-md text-white focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Un bref résumé de l'article"
        />
      </div>

      {/* Image */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-300">
          URL de l'image *
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-secondary bg-secondary/30 text-gray-300">
            <Image className="h-4 w-4" />
          </span>
          <input
            type="url"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="flex-1 block w-full px-3 py-2 border border-secondary bg-[#0a0a0a] rounded-r-md text-white focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      {/* Catégorie */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-300">
          Catégorie *
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-secondary bg-[#0a0a0a] rounded-md text-white focus:outline-none focus:ring-primary focus:border-primary"
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Temps de lecture */}
      <div>
        <label htmlFor="readTime" className="block text-sm font-medium text-gray-300">
          Temps de lecture *
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-secondary bg-secondary/30 text-gray-300">
            <Clock className="h-4 w-4" />
          </span>
          <input
            type="text"
            name="readTime"
            id="readTime"
            value={formData.readTime}
            onChange={handleChange}
            className="flex-1 block w-full px-3 py-2 border border-secondary bg-[#0a0a0a] rounded-r-md text-white focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="5 min"
          />
        </div>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-300">
          Tags (séparés par des virgules)
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-secondary bg-secondary/30 text-gray-300">
            <Tag className="h-4 w-4" />
          </span>
          <input
            type="text"
            name="tags"
            id="tags"
            value={formData.tags}
            onChange={handleChange}
            className="flex-1 block w-full px-3 py-2 border border-secondary bg-[#0a0a0a] rounded-r-md text-white focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="IA, Automatisation, Innovation"
          />
        </div>
      </div>

      {/* Contenu */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-300">
          Contenu de l'article *
        </label>
        <textarea
          name="content"
          id="content"
          rows={15}
          value={formData.content}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-secondary bg-[#0a0a0a] rounded-md text-white focus:outline-none focus:ring-primary focus:border-primary font-mono"
          placeholder="Le contenu de votre article en HTML..."
        />
        <p className="mt-2 text-sm text-gray-400">
          Utilisez du HTML pour le formatage (h2, p, ul, li, etc.)
        </p>
      </div>

      {/* Boutons */}
      <div className="flex justify-end gap-4 pt-6">
        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-white hover:bg-gray-800"
        >
          Annuler
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, 'draft')}
          className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-white hover:bg-gray-800"
        >
          <Save className="w-4 h-4 mr-2" />
          Enregistrer comme brouillon
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, 'published')}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary bg-primary hover:bg-primary/90"
        >
          <Send className="w-4 h-4 mr-2" />
          {isEditing ? 'Mettre à jour' : 'Publier'}
        </button>
      </div>
    </form>
  );
};

export default PostForm;