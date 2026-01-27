import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const isSpanish = language === "es";

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm text-gray-300 border border-gray-700 px-3 py-1 rounded-lg hover:text-white hover:border-gray-500 transition"
    >
      <img
        src={isSpanish ? "public\argentina.png" : "public\estados-unidos.png"}
        alt={isSpanish ? "English" : "Español"}
        className="w-4 h-4"
      />
      <span>{isSpanish ? "EN" : "ES"}</span>
    </button>
  );
};

export default LanguageToggle;
