export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  status: 'draft' | 'published';
  publishedAt?: string;
}