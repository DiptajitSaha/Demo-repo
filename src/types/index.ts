export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  topics: string[];
}