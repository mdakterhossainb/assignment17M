const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
    </div>
  );
};

export default SectionTitle;
