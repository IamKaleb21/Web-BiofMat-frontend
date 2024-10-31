// src/components/CourseHeader.jsx
function CourseHeader({ course }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-14">
            {/* Columna Izquierda: Imagen y Botón */}
            <div className="flex flex-col">
                <div className="uppercase text-primary">
                    <h1 className="text-4xl font-extrabold mb-1">{course.title}</h1>
                    <p className="text-lg font-semibold mb-4">Prof. {course.instructor}</p>
                </div>

                <img src={course.mainImage} alt={course.title} className="w-full h-auto max-w-md rounded-md shadow-md mb-4" />

                <p className="text-primary font-semibold my-4">M1: {course.title}</p>
                <button className="bg-primary-1000 text-white py-2 px-8 rounded-md font-semibold text-lg hover:bg-blue-800 transition-colors w-1/2 h-12">
                    Comenzar Clase
                </button>
            </div>

            {/* Columna Derecha: Descripción */}
            <div className="text-left lg:text-left leading-relaxed text-primary">
                <p className="mb-4">{course.description}</p>
            </div>
        </div>
    );
}

export default CourseHeader;
