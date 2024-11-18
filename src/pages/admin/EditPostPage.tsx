import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { useBlog } from '../../contexts/BlogContext';
import PostForm from '../../components/admin/PostForm';
import { BlogPost } from '../../types/blog';

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = useBlog();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: '',
    readTime: '',
    tags: ''
  });

  useEffect(() => {
    const post = posts.find(post => post.id === id);
    if (!post) {
      toast.error('Article non trouvé');
      navigate('/admin');
      return;
    }

    setFormData({
      ...post,
      tags: post.tags.join(', ')
    });
  }, [id, navigate, posts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.category) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const updatedPost: BlogPost = {
      ...posts.find(post => post.id === id)!,
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      image: formData.image,
      category: formData.category,
      readTime: formData.readTime,
      date: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      tags: formData.tags.split(',').map(tag => tag.trim()),
    };

    updatePost(id!, updatedPost);
    toast.success('Article mis à jour avec succès');
    navigate('/admin');
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
                Modifier l'article
              </h1>
              <p className="mt-2 text-gray-400">
                Modifiez les informations de l'article ci-dessous
              </p>
            </div>

            <PostForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isEditing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostPage;