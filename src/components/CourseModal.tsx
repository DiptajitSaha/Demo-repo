import React from 'react';
import { Course } from '../types';
import { X, Clock, BookOpen, DollarSign, CheckCircle } from 'lucide-react';

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

export function CourseModal({ course, onClose }: CourseModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className={`text-sm px-3 py-1 rounded-full ${
              course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {course.level}
            </span>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{course.instructor}</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h2>
          <p className="text-gray-600 mb-6">{course.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-6">
            <div className="flex items-center text-2xl font-bold text-indigo-600">
              <DollarSign className="w-6 h-6" />
              <span>{course.price}</span>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}