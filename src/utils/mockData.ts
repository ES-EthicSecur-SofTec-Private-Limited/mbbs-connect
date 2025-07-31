import { Post, College, User } from '../types/navigation';

export const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Dr. Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      college: 'Harvard Medical School',
      year: '3rd Year'
    },
    content: 'Just completed my first surgery rotation! The experience was incredible. Any tips for upcoming surgical residents? #MBBS #Surgery #MedicalSchool',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    likes: 45,
    comments: [
      {
        id: '1',
        author: {
          id: '2',
          name: 'Dr. Michael Chen',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
        },
        content: 'Congratulations! Surgery rotation is definitely challenging but rewarding. Focus on suturing techniques!',
        timestamp: '2 hours ago'
      }
    ],
    timestamp: '3 hours ago',
    tags: ['MBBS', 'Surgery', 'MedicalSchool']
  },
  {
    id: '2',
    author: {
      id: '3',
      name: 'Dr. Priya Patel',
      avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face',
      college: 'AIIMS Delhi',
      year: '2nd Year'
    },
    content: 'Studying for anatomy finals. The human body is fascinating! Anyone want to form a study group? #Anatomy #MBBS #StudyGroup',
    likes: 32,
    comments: [
      {
        id: '2',
        author: {
          id: '4',
          name: 'Dr. Rajesh Kumar',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
        },
        content: 'I\'m in! Anatomy is my favorite subject. Let\'s meet in the library tomorrow.',
        timestamp: '1 hour ago'
      }
    ],
    timestamp: '5 hours ago',
    tags: ['Anatomy', 'MBBS', 'StudyGroup']
  },
  {
    id: '3',
    author: {
      id: '5',
      name: 'Dr. Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      college: 'Johns Hopkins University',
      year: '4th Year'
    },
    content: 'Match Day is approaching! Nervous but excited about residency applications. Any advice from current residents? #MatchDay #Residency #MedicalSchool',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    likes: 67,
    comments: [
      {
        id: '3',
        author: {
          id: '6',
          name: 'Dr. David Kim',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        content: 'Good luck! Remember to rank programs based on your preferences, not just prestige.',
        timestamp: '30 minutes ago'
      }
    ],
    timestamp: '1 day ago',
    tags: ['MatchDay', 'Residency', 'MedicalSchool']
  }
];

export const mockColleges: College[] = [
  {
    id: '1',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'New Delhi, India',
    rating: 4.8,
    totalStudents: 15000,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
    description: 'Premier medical institution in India, known for excellence in medical education and research.',
    admissionRate: 0.1,
    fees: {
      domestic: 1500,
      international: 50000
    },
    facilities: ['Modern Labs', 'Research Centers', 'Hospital', 'Library', 'Sports Complex'],
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Pediatrics', 'Surgery']
  },
  {
    id: '2',
    name: 'Harvard Medical School',
    location: 'Boston, Massachusetts, USA',
    rating: 4.9,
    totalStudents: 8000,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
    description: 'World-renowned medical school with cutting-edge research and clinical training.',
    admissionRate: 0.05,
    fees: {
      domestic: 65000,
      international: 65000
    },
    facilities: ['Research Labs', 'Teaching Hospital', 'Simulation Center', 'Library', 'Student Center'],
    specialties: ['Internal Medicine', 'Surgery', 'Psychiatry', 'Radiology', 'Emergency Medicine']
  },
  {
    id: '3',
    name: 'Johns Hopkins University School of Medicine',
    location: 'Baltimore, Maryland, USA',
    rating: 4.8,
    totalStudents: 6000,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    description: 'Leading medical school known for research and clinical excellence.',
    admissionRate: 0.08,
    fees: {
      domestic: 58000,
      international: 58000
    },
    facilities: ['Research Institute', 'Hospital', 'Medical Library', 'Simulation Lab', 'Student Housing'],
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Infectious Disease', 'Public Health']
  },
  {
    id: '4',
    name: 'Christian Medical College (CMC)',
    location: 'Vellore, Tamil Nadu, India',
    rating: 4.7,
    totalStudents: 12000,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    description: 'Premier medical college with excellent clinical training and research opportunities.',
    admissionRate: 0.15,
    fees: {
      domestic: 8000,
      international: 40000
    },
    facilities: ['Teaching Hospital', 'Research Labs', 'Library', 'Sports Complex', 'Hostel'],
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Community Medicine']
  },
  {
    id: '5',
    name: 'Maulana Azad Medical College',
    location: 'New Delhi, India',
    rating: 4.6,
    totalStudents: 10000,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop',
    description: 'Government medical college with excellent clinical exposure and affordable education.',
    admissionRate: 0.2,
    fees: {
      domestic: 2000,
      international: 25000
    },
    facilities: ['Hospital', 'Labs', 'Library', 'Auditorium', 'Sports Ground'],
    specialties: ['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Psychiatry']
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@harvard.edu',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    college: 'Harvard Medical School',
    year: '3rd Year',
    specialization: 'Surgery',
    bio: 'Passionate about surgical innovation and patient care. Love teaching and mentoring junior students.',
    connections: 245,
    posts: 18
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    email: 'michael.chen@stanford.edu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    college: 'Stanford University',
    year: '4th Year',
    specialization: 'Cardiology',
    bio: 'Cardiology resident with interest in interventional procedures. Always eager to learn and share knowledge.',
    connections: 189,
    posts: 12
  },
  {
    id: '3',
    name: 'Dr. Priya Patel',
    email: 'priya.patel@aiims.edu',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face',
    college: 'AIIMS Delhi',
    year: '2nd Year',
    specialization: 'Anatomy',
    bio: 'Medical student passionate about anatomy and teaching. Love helping fellow students understand complex concepts.',
    connections: 156,
    posts: 8
  }
]; 