import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { courses } from './data/courses';
import { CourseCard } from './components/CourseCard';
import { CourseModal } from './components/CourseModal';
import type { Course } from './types';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">LearnHub</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Expand Your Knowledge
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of premium courses taught by industry experts
            and take your skills to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={setSelectedCourse}
            />
          ))}
        </div>
      </main>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}

export default App;