const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white"
    >
      <div className="text-center max-w-2xl px-6">
        
        {/* Eyebrow */}
        <p className="text-sm text-gray-500 tracking-wide uppercase">
          Desarrollador Junior
        </p>

        {/* Main title */}
        <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
          Hola, soy{" "}
          <span className="text-indigo-500">Francesco</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Desarrollo aplicaciones web enfocadas en resolver problemas reales,
          combinando buen diseño con soluciones técnicas sólidas.
        </p>

        {/* Secondary info */}
        <p className="mt-2 text-sm text-gray-500">
          Estudiante de Tecnicatura Universitaria en Programación — UTN Rosario
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
          >
            Ver proyectos
          </a>

          <a
            href="/cv-francesco-dagostino.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 text-sm hover:text-white hover:border-gray-500 transition"
          >
            CV📑
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
