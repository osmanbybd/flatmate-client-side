import React from "react";

const categories = [
  { id: 1, name: "Apartments", color: "bg-purple-600" },
  { id: 2, name: "Shared Rooms", color: "bg-indigo-600" },
  { id: 3, name: "Single Rooms", color: "bg-pink-600" },
  { id: 4, name: "Studio", color: "bg-green-600" },
];

const CategoriesSection = () => {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-2 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`rounded-xl p-6 text-white text-center cursor-pointer shadow-lg hover:shadow-2xl transition duration-300 ${cat.color}`}
          >
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
