const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Sobre <span className="text-indigo-500">mí</span>
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          Soy desarrollador web junior de Argentina 🇦🇷, enfocado en crear
          aplicaciones funcionales, escalables y con una buena experiencia de
          usuario. Me interesa entender el problema antes de escribir código y
          aplicar buenas prácticas en cada proyecto.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Actualmente estudio la Tecnicatura Universitaria en Programación en la
          UTN Rosario, y complemento mi formación desarrollando proyectos
          personales con tecnologías modernas.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            "React",
            "Tailwind",
            "JavaScript",
            "ASP.NET Core",
            "Entity Framework",
            "SQL",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-full bg-gray-900 border border-gray-800 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
