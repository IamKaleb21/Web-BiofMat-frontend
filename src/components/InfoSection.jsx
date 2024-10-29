import fractalSvg from "../assets/fractal.svg";

function InfoSection() {
  return (
    <section className="mx-3 my-10 p-8 border border-primary grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Gráfico Fractal a la Izquierda */}
      <div className="flex justify-center items-center">
        <div className="p-4">
          <img src={fractalSvg} alt="" />
        </div>
      </div>

      {/* Texto Explicativo a la Derecha */}
      <div className="flex flex-col justify-between border border-primary p-4 bg-primary bg-opacity-20">
        <div className="mb-4">
          <p className="text-primary">
            En BiofMat, no solo ofrecemos cursos y módulos; ofrecemos una
            experiencia de aprendizaje transformadora. Nuestros materiales están
            diseñados por expertos en la materia que entienden las necesidades y
            desafíos de los estudiantes modernos. Cada curso es cuidadosamente
            estructurado para fomentar una comprensión profunda y duradera,
            utilizando metodologías innovadoras que facilitan el aprendizaje
            activo y la aplicación práctica de los conceptos.
          </p>
        </div>
        <div className="bg-primary w-auto h-0.5"></div>
        <div className="mt-4">
          <p className="text-primary font-semibold">
            Si tienes preguntas, comentarios o deseas más información sobre
            nuestros cursos y materiales, no dudes en contactarnos
          </p>
          <p className="text-primary font-bold text-xl mt-2">
            info@biofmat.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
