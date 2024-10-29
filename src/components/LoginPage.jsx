import fractalisLogo from '/biomatic_logo.png';

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-900">
      {/* Logo */}
      <div className="mb-8">
        <img src={fractalisLogo} alt="Fractalis Logo" className="h-20" />
      </div>

      {/* Formulario de Login */}
      <div className="w-full max-w-sm bg-white p-8 border border-blue-600 shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Login</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-900 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-900 font-semibold mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Links de Ayuda */}
        <div className="mt-6 text-center">
          <a href="/forgot-password" className="text-blue-900 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
