import biofMatLogo from '/biofmat_logo.webp'

function Footer() {
  return (
    <footer id='Footer' className="mt-8 pb-10 bg-gray-300">
      <div className="px-4">
        {/* Título */}
        <div className="bg-primary w-auto h-0.5 my-10"></div>
        <div className="text-left mb-8">
          <h2 className="text-4xl font-extrabold text-primary uppercase tracking-wide">
            Como <br /> Contactarnos
          </h2>
        </div>
        <div className="bg-primary w-auto h-0.5 my-10"></div>

        {/* Enlaces de Navegación */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left font-bold">
          <div>
            <ul>
              <li className="text-primary hover:underline cursor-pointer">
                Sobre nuestros libros
              </li>
              <li className="text-primary  hover:underline cursor-pointer mt-2">
                Sobre nuestros cursos
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-primary hover:underline cursor-pointer">
                Contáctanos
              </li>
              <a className="text-primary hover:underline cursor-pointer mt-2" href='/Store'>
                Tienda Virtual
              </a>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-primary hover:underline cursor-pointer">
                Políticas de privacidad
              </li>
              <li className="text-primary hover:underline cursor-pointer mt-2">
                Configuración de cookies
              </li>
            </ul>
          </div>
        {/* Logo de Fractalis */}
        <div className="justify-end">
          <img src={biofMatLogo} alt="Fractalis Logo" className="h-20" />
        </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
