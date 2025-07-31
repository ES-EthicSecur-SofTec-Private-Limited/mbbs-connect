export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
  PostDetail: { postId: string };
  CreatePost: undefined;
};

export type TabParamList = {
  Home: undefined;
  Colleges: undefined;
  Profile: undefined;
};

export type Post = {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    college: string;
    year: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  tags: string[];
};

export type Comment = {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
};

export type College = {
  id: string;
  name: string;
  location: string;
  rating: number;
  totalStudents: number;
  image: string;
  description: string;
  admissionRate: number;
  fees: {
    domestic: number;
    international: number;
  };
  facilities: string[];
  specialties: string[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  college: string;
  year: string;
  specialization?: string;
  bio?: string;
  connections: number;
  posts: number;
}; 