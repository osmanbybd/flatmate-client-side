import React from "react";
import { FaUserGraduate, FaBriefcase, FaFemale, FaUsers } from "react-icons/fa";

const categories = [
  { name: "Students", icon: <FaUserGraduate />, color: "bg-[#facc15]" },
  { name: "Job Holders", icon: <FaBriefcase />, color: "bg-[#34d399]" },
  { name: "Families", icon: <FaUsers />, color: "bg-[#60a5fa]" },
  { name: "Female Only", icon: <FaFemale />, color: "bg-[#f472b6]" },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center  mb-10">
        🏷️ Explore By Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 text-white shadow-md hover:scale-105 transition transform cursor-pointer ${category.color}`}
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
