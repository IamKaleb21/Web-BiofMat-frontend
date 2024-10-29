// src/components/CourseCard.jsx
import PropTypes from 'prop-types';

function CourseCard({ course }) {
  return (
    <div className="border border-primary overflow-hidden shadow-md p-4 flex flex-col">
      <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover mb-4" />
      <h4 className="font-semibold text-primary text-md">{course.title}</h4>
      <p className="text-primary font-semibold text-lg my-2">S/. {course.price}</p>
      <button className="mt-auto bg-primary text-white font-semibold py-2 hover:bg-blue-800">
        Comienza Ahora
      </button>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CourseCard;
