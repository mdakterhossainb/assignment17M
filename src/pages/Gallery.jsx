import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle
        title="Project Gallery"
        subtitle="Click on any image to view it in full size."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImg(img)}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
          >
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={selectedImg}
              alt="Preview"
              className="w-full rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold block mx-auto"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
