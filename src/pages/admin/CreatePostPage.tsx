import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import PostForm from '../../components/admin/PostForm';
import { useBlog } from '../../contexts/BlogContext';
import { BlogPost } from '../../types/blog';

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { createPost } = useBlog();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: '',
    readTime: '',
    tags: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent, status: 'draft' | 'published') => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.category) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    try {
      const now = new Date();
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        image: formData.image,
        category: formData.category,
        readTime: formData.readTime,
        date: now.toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        author: {
          name: "Roger",
          avatar: "https://storage.googleapis.com/msgsndr/jtuiI8nTYnHeufhSh7iZ/media/673b0a78d88b4144e6eaaaac.png"
        },
        status,
        publishedAt: status === 'published' ? now.toISOString() : undefined
      };

      await createPost(newPost);
      toast.success(status === 'published' ? 'Article publié avec succès' : 'Brouillon enregistré');
      navigate('/admin');
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      toast.error('Erreur lors de la création de l\'article');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border border-secondary rounded-[15px] bg-[#0a0a0a] overflow-hidden">
          <div className="px-8 py-12">
            <button 
              onClick={() => navigate('/admin')}
              className="inline-flex items-center text-primary font-lato font-bold hover:gap-2 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au dashboard
            </button>

            <div className="mb-12">
              <h1 className="text-3xl font-montserrat font-bold text-white">
                Créer un nouvel article
              </h1>
              <p className="mt-2 text-gray-400">
                Remplissez le formulaire ci-dessous pour créer un article
              </p>
            </div>

            <PostForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;