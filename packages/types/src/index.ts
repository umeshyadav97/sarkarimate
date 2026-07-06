export interface Job {
  id: string;
  title: string;
  slug: string;
  category: string;
  department: string;
  publishedAt: string;
}

export interface Result {
  id: string;
  title: string;
  status: 'upcoming' | 'published' | 'completed';
}

export interface Category {
  id: string;
  name: string;
}

export interface Department {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Notification {
  id: string;
  message: string;
  createdAt: string;
}
