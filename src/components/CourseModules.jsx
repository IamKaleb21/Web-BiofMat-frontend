// src/components/CourseModules.jsx
function CourseModules({ modules }) {
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-primary mb-4">MÓDULOS Y CLASES</h2>
            <p className="text-gray-600 mb-6">Este es el material completo que explorarás en este curso de BIOFLAB. ¡Disfruta aprendiendo!</p>
            {modules.map((module, index) => (
                <details key={index} className="mb-4 bg-white p-4 rounded-lg shadow-md">
                    <summary className="flex justify-between items-center font-bold text-primary text-lg cursor-pointer">
                        <span>{module.title.toUpperCase()}</span>
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            {/* SVG para la flecha de despliegue */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10L12 14L16 10" stroke="#195091" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </summary>
                    <ul className="mt-4 ml-4 text-gray-700">
                        {module.classes.map((classTitle, classIndex) => (
                            <li key={classIndex} className="flex items-center mt-2 text-gray-700 text-base">
                                {/* SVG para la flecha azul antes de cada clase */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mr-2">
                                    <path d="M10 6L16 12L10 18" stroke="#195091" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {classTitle}
                            </li>
                        ))}
                    </ul>
                </details>
            ))}
        </div>
    );
}

export default CourseModules;
