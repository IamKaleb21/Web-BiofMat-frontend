// src/components/CourseAbout.jsx
function CourseAbout({ course }) {
    return (
        <div className="bg-gray-50 p-10 rounded-lg">
            <h2 className="text-3xl font-extrabold text-primary mb-8 text-left">Te invitamos a iniciar el curso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Acerca de la Clase */}
                <div className="p-6 bg-white rounded-md shadow-[-3px_4px_6px_rgba(0,0,0,0.25)]">
                    <h3 className="text-gray-800 font-semibold mb-4 text-lg">Acerca de la Clase</h3>
                    <div className="space-y-4 text-gray-700">
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="font-semibold">Nivel</span>
                            <span>{course.level}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="font-semibold">Nº Estudiantes</span>
                            <span>{course.students}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="font-semibold">Profesor</span>
                            <span>{course.instructor}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="font-semibold">Idioma</span>
                            <span>{course.language}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Duración</span>
                            <span>{course.duration}</span>
                        </div>
                    </div>
                </div>

                {/* Acerca del Profesor */}
                <div className="p-6 bg-white rounded-md shadow-[-3px_4px_6px_rgba(0,0,0,0.25)]">
                    <h3 className="text-primary font-semibold mb-3 text-lg">Acerca del Profesor</h3>
                    <p className="text-gray-700 leading-relaxed">{course.instructorDescription}</p>
                </div>

                {/* Valoración del Curso */}
                <div className="p-6 bg-white rounded-md shadow-[-3px_4px_6px_rgba(0,0,0,0.25)] text-center">
                    <h3 className="text-primary font-semibold mb-3 text-lg">Valoración del Curso</h3>
                    <p className="text-yellow-500 text-3xl font-bold">⭐ {course.rating} / 5</p>
                    <button className="mt-6 bg-primary text-white py-2 px-8 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                        Valorar Curso
                    </button>
                </div>
            </div>

            {/* Secciones adicionales de contenido */}
            <div className="p-8 bg-white rounded-md shadow-[-3px_4px_6px_rgba(0,0,0,0.25)] mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">¿QUÉ APRENDERÁS EN ESTE CURSO?</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    ¿Quieres fortalecer tus habilidades matemáticas antes de ingresar a la universidad? ¿Te preguntas cómo aplicar conceptos clave en diversas disciplinas? En este curso gratuito, te proporcionaremos las herramientas necesarias para dominar las matemáticas y tener éxito en tus estudios preuniversitarios.
                </p>
                <h3 className="text-2xl font-bold text-primary mb-4">¿QUÉ ABARCA ESTE CURSO?</h3>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-6">
                    <li>Fundamentos de álgebra, geometría y trigonometría</li>
                    <li>Métodos para resolver problemas de cálculo básico</li>
                    <li>Estrategias efectivas para exámenes de admisión universitaria</li>
                    <li>Aplicaciones prácticas de las matemáticas en la vida real</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                    Al terminar este curso, contarás con una base sólida en los conceptos matemáticos esenciales y estarás listo para enfrentar con confianza los desafíos académicos de nivel universitario.
                </p>
            </div>
        </div>
    );
}

export default CourseAbout;
