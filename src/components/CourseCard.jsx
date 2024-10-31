// src/components/CourseCard.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Imagen del curso */}
      <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
      
      {/* Información del curso */}
      <div className="p-4">
        <h4 className="font-semibold text-primary text-lg">{course.title}</h4>
        <p className="text-gray-600 text-sm mb-2">Prof. {course.instructor}</p>
        <p className="text-primary font-bold text-xl mb-4">S/ {course.price}</p>
        
        {/* Botón para comenzar el curso */}
        <button 
          onClick={handleStartCourse} 
          className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition-colors">
          Comienza Ahora
        </button>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    instructor: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;
