import heroImage from '../assets/hero_section_image.webp'; // Reemplaza con la ruta de tu imagen

function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] my-5 mx-3">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Fractal background"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 text-white">
        <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg uppercase">
          BiofMat
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase">
          Descubre un nuevo horizonte de aprendizaje
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-xs sm:text-sm md:text-base lg:text-lg">
          En BiofMat, cada curso es una puerta hacia nuevas dimensiones de
          aprendizaje. Como un fractal, el saber se expande sin límites,
          revelando más a medida que te adentras. Sumérgete en nuestros recursos
          y descubre la belleza del aprendizaje continuo.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
