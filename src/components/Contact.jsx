const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Contacto <span className="text-indigo-500">📩</span>
        </h2>

        <p className="text-gray-400 mt-4">
          ¿Tenés una propuesta, proyecto o simplemente querés charlar?  
          Estoy abierto a nuevas oportunidades.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=francescodagostino1889@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
          >
            Enviar email
          </a>


          <a
            href="https://www.linkedin.com/in/francesco-dagostino-391260262/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 text-sm hover:text-white hover:border-gray-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
