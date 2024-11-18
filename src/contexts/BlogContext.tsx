import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  deleteDoc, 
  updateDoc, 
  onSnapshot,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { BlogPost } from '../types/blog';

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  updatePost: (id: string, post: BlogPost) => Promise<void>;
  createPost: (post: BlogPost) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
}

const BlogContext = createContext<BlogContextType | null>(null);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts'),
      (snapshot) => {
        const postsData = snapshot.docs.map(doc => {
          const data = doc.data();
          
          // Conversion sécurisée du timestamp
          let publishedAt: string | undefined = undefined;
          if (data.publishedAt) {
            if (data.publishedAt instanceof Timestamp) {
              publishedAt = data.publishedAt.toDate().toISOString();
            } else if (typeof data.publishedAt === 'string') {
              publishedAt = data.publishedAt;
            }
          }
          
          return {
            id: doc.id,
            ...data,
            publishedAt,
            // Assurez-vous que les autres champs sont du bon type
            title: data.title || '',
            excerpt: data.excerpt || '',
            content: data.content || '',
            date: data.date || '',
            readTime: data.readTime || '',
            image: data.image || '',
            category: data.category || '',
            author: data.author || {
              name: "Roger",
              avatar: "https://storage.googleapis.com/msgsndr/jtuiI8nTYnHeufhSh7iZ/media/673b0a78d88b4144e6eaaaac.png"
            },
            tags: Array.isArray(data.tags) ? data.tags : [],
            status: data.status || 'draft'
          } as BlogPost;
        });
        
        // Tri des articles
        postsData.sort((a, b) => {
          if (!a.publishedAt) return 1;
          if (!b.publishedAt) return -1;
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });
        
        setPosts(postsData);
        setLoading(false);
      },
      (error) => {
        console.error("Erreur lors de l'écoute des articles:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const createPost = async (newPost: BlogPost) => {
    try {
      const postRef = doc(collection(db, 'posts'));
      const timestamp = serverTimestamp();
      
      const postData = {
        ...newPost,
        id: postRef.id,
        createdAt: timestamp,
        updatedAt: timestamp,
        publishedAt: newPost.status === 'published' ? timestamp : null,
        author: {
          name: "Roger",
          avatar: "https://storage.googleapis.com/msgsndr/jtuiI8nTYnHeufhSh7iZ/media/673b0a78d88b4144e6eaaaac.png"
        }
      };

      await setDoc(postRef, postData);
      return postRef.id;
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      throw error;
    }
  };

  const updatePost = async (id: string, updatedPost: BlogPost) => {
    try {
      const postRef = doc(db, 'posts', id);
      const timestamp = serverTimestamp();
      
      const postData = {
        ...updatedPost,
        updatedAt: timestamp,
        publishedAt: updatedPost.status === 'published' 
          ? updatedPost.publishedAt || timestamp 
          : null
      };

      await updateDoc(postRef, postData);
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      throw error;
    }
  };

  const deletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      throw error;
    }
  };

  return (
    <BlogContext.Provider value={{ 
      posts, 
      loading, 
      updatePost, 
      createPost, 
      deletePost 
    }}>
      {children}
    </BlogContext.Provider>
  );
};