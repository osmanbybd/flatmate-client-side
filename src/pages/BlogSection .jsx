import React from "react";
// import { Link } from "react-router";

const blogs = [
  {
    id: 1,
    title: "How to Find the Perfect Roommate?",
    excerpt: "Discover the key tips to choose a compatible roommate and ensure a happy co-living experience.",
    full: "Finding the perfect roommate involves understanding your own lifestyle, communicating expectations early, conducting interviews, and using reliable roommate finder platforms. Trust your instincts and always prioritize mutual respect and responsibility.",
  },
  {
    id: 2,
    title: "Safety Tips Before Renting a Room",
    excerpt: "Read our essential safety checklist before signing any rental agreement.",
    full: "Always visit the property in person, verify the landlord's identity, understand the lease terms, check security features like locks and CCTV, and ensure emergency contacts are available. Don't forget to research the neighborhood for safety.",
  },
  {
    id: 3,
    title: "Top 5 Affordable Areas for Students",
    excerpt: "Explore budget-friendly locations that are great for students looking for affordable housing.",
    full: "Some affordable student-friendly areas include Mirpur, Uttara, Mohammadpur, and parts of Dhanmondi and Banasree. These areas offer easy transportation, lower rent, and access to educational institutions.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-16 bg-base-200 rounded-lg container mx-auto">
      <h2 className="text-3xl font-bold text-center  mb-10">
        📝 Latest Blog Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition space-y-4">
            <h3 className="text-xl font-semibold text-[#9e4ee9]">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {blog.excerpt}
            </p>
            <details className="text-sm text-gray-700 cursor-pointer">
              <summary className="text-indigo-600 font-medium">Read More</summary>
              <p className="mt-2 text-gray-600 text-justify text-sm">
                {blog.full}
              </p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
