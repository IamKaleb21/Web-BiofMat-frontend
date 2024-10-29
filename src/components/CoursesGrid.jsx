// src/components/CoursesGrid.jsx
import CourseCard from './CourseCard';
import PropTypes from 'prop-types';

function CoursesGrid({ courses }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

CoursesGrid.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoursesGrid;
