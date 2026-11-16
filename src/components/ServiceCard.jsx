import { useState } from "react";

const ServiceCard = ({ title, description, price }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
      <div>
        <p className="text-blue-600 font-bold text-lg mb-4">{price}</p>
        <button
          onClick={() => setSelected(!selected)}
          className={`w-full py-2 px-4 rounded-lg font-medium transition ${
            selected
              ? "bg-green-600 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {selected ? "Selected ✓" : "Choose Plan"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
