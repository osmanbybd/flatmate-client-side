import React, { useState } from "react";
import Swal from "sweetalert2";

const   NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    Swal.fire("Subscribed!", "Thanks for subscribing 🎉", "success");
    setEmail(""); // Clear input
  };

  return (
    <section className=" py-16 bg-violet-200 my-4  text-black px-4 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-base md:text-lg">
          Get weekly updates about new roommate listings, special offers, and helpful blog articles!
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-md text-black border-gray-100  border shadow-lg"
          />
          <button
            type="submit"
            className="bg-[#6b21a8] text-white px-6 py-2 rounded-md hover:bg-opacity-80"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
