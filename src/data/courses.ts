import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    description: 'Master modern web development from scratch. Learn HTML, CSS, JavaScript, React, and Node.js through hands-on projects.',
    price: 99.99,
    duration: '12 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    instructor: 'Michael Chen',
    description: 'Deep dive into advanced React patterns, state management, and performance optimization techniques.',
    price: 149.99,
    duration: '8 weeks',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    topics: ['React', 'Redux', 'Performance', 'Testing']
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Emma Davis',
    description: 'Learn the principles of great design and create beautiful user interfaces that users will love.',
    price: 79.99,
    duration: '6 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&q=80',
    topics: ['Design Principles', 'Figma', 'Prototyping', 'User Research']
  }
];