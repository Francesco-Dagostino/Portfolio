const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Francesco D´Agostino
        </p>

        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/Francesco-Dagostino"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/francesco-dagostino-391260262/"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
