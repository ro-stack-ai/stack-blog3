import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useBlog } from '../../contexts/BlogContext';
import { Pencil, Trash2, Plus, LogOut, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { posts, deletePost, updatePost } = useBlog();
  const [showDrafts, setShowDrafts] = useState(false);

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      deletePost(id);
      toast.success('Article supprimé avec succès');
    }
  };

  const handlePublish = async (id: string) => {
    const post = posts.find(p => p.id === id);
    if (post && window.confirm('Voulez-vous publier cet article ?')) {
      const now = new Date();
      await updatePost(id, {
        ...post,
        status: 'published',
        publishedAt: now.toISOString(),
        date: now.toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
      toast.success('Article publié avec succès');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const filteredPosts = posts.filter(post => 
    showDrafts ? post.status === 'draft' : post.status === 'published'
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="border border-secondary rounded-[15px] bg-[#0a0a0a] overflow-hidden">
          <div className="px-8 py-12">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-3xl font-montserrat font-bold text-white">
                  Gestion des Articles
                </h1>
                <p className="mt-2 text-gray-400">
                  Gérez vos articles de blog depuis cette interface
                </p>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/admin/posts/new')}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary bg-primary hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvel Article
                </button>
                
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-white hover:bg-gray-800"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex gap-4">
                <button
                  onClick={() => setShowDrafts(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    !showDrafts
                      ? 'bg-primary text-secondary'
                      : 'bg-secondary/50 text-white hover:bg-secondary'
                  }`}
                >
                  Articles publiés
                </button>
                <button
                  onClick={() => setShowDrafts(true)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    showDrafts
                      ? 'bg-primary text-secondary'
                      : 'bg-secondary/50 text-white hover:bg-secondary'
                  }`}
                >
                  Brouillons
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Article
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-900/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-md object-cover"
                            src={post.image}
                            alt=""
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">
                              {post.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-secondary/30 text-white">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {post.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-4">
                          {post.status === 'draft' && (
                            <button
                              onClick={() => handlePublish(post.id)}
                              className="text-primary hover:text-primary/80"
                              title="Publier"
                            >
                              <Send className="h-4 w-4" />
                            </button>
                          )}
                          <button
                            onClick={() => navigate(`/admin/posts/${post.id}/edit`)}
                            className="text-primary hover:text-primary/80"
                            title="Modifier"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="text-red-500 hover:text-red-400"
                            title="Supprimer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;