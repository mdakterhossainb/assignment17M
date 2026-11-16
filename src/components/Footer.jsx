const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-white mb-2">TechNova Agency</h3>
        <p className="text-sm text-gray-400 mb-4">
          Building modern and responsive web experiences with React & Tailwind
          CSS.
        </p>
        <div className="border-t border-gray-800 pt-4 text-sm">
          &copy; {new Date().getFullYear()} TechNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
