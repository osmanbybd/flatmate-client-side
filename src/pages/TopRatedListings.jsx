import React, { useEffect, useState } from "react";

const TopRatedListings = () => {
  const [topListings, setTopListings] = useState([]);

  useEffect(() => {
    fetch("https://roommate-server-side-alpha.vercel.app/topRatedListings")
      .then((res) => res.json())
      .then((data) => setTopListings(data))
      .catch((error) =>
        console.error("Error fetching top rated listings:", error)
      );
  }, []);

  return (
    <section className="py-10 px-4 md:px-10 lg:px-3 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
        🔥 Top Rated Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topListings.map((listing) => (
          <div
            key={listing._id}
            className="bg-gray-100  text-black shadow-md rounded-xl p-5 hover:shadow-xl transform transition-transform duration-500 hover:scale-105 h-[270px] flex flex-col justify-between"
          >
            {/* Top content */}
            <div>
              <h3 className="text-lg font-semibold mb-2 ">
                {listing.title || "Untitled Listing"}
              </h3>
              <p className="text-sm line-clamp-3 ">
                {listing.description || "No description provided."}
              </p>
            </div>

            {/* Bottom info */}
            <div className="flex justify-between items-center pt-4 text-sm font-medium border-t ">
              <span className="">Rent: ${listing.rent || 0}</span>
              <span className="text-pink-300">❤️ {listing.likes || 0} likes</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedListings;
