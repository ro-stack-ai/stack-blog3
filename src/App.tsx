import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreatePostPage from './pages/admin/CreatePostPage';
import EditPostPage from './pages/admin/EditPostPage';
import LoginPage from './pages/admin/LoginPage';

const App = () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <div className="min-h-screen bg-[#0a0a0a] relative">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <HomePage />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Navbar />
                  <BlogPage />
                </>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <>
                  <Navbar />
                  <BlogPostPage />
                </>
              }
            />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/posts/new"
              element={
                <ProtectedRoute>
                  <CreatePostPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/posts/:id/edit"
              element={
                <ProtectedRoute>
                  <EditPostPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </BlogProvider>
    </AuthProvider>
  );
};

export default App;