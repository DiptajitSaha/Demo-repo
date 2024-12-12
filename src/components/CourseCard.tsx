import React from 'react';
import { Course } from '../types';
import { Clock, BookOpen, DollarSign } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(course)}
    >
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm px-3 py-1 rounded-full ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-700">
            <BookOpen className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.instructor}</span>
          </div>
          <div className="flex items-center text-indigo-600 font-bold">
            <DollarSign className="w-4 h-4" />
            <span>{course.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}