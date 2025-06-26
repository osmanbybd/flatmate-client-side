// import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const lifestyleOption = [
  "Pet Friendly",
  "No Pets",
  "Smoker Friendly",
  "No Smoker",
  "Night Owl",
  "Early Bird",
  "Student",
  "Professional",
];

const AddListing = () => {
  const navigate = useNavigate();

  const handleAddListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const lifestyle = formData.getAll("lifestyle");
    const rowData = Object.fromEntries(formData.entries());

    if (
      !rowData.title ||
      !rowData.location ||
      !rowData.rent ||
      !rowData.roomType ||
      !rowData.description ||
      !rowData.email
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the required fields!",
      });
      return;
    }

    const newFormData = {
      ...rowData,
      lifestyle,
    };

    fetch("http://localhost:5000/addListing", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Listing added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-violet-50 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">
          Add Roommate Listing
        </h1>
        <p className="text-gray-500">
          Create a new listing to find your perfect roommate match.
        </p>
      </div>

      <form
        onSubmit={handleAddListing}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="rent"
            placeholder="Rent Room"
            required
            className="input input-bordered w-full"
          />
          <select name="roomType" required className="select select-bordered w-full">
            <option disabled>Choose your room type</option>
            <option>Single Room</option>
            <option>Shared Room</option>
            <option>Master Bed Room</option>
          </select>
          <input
            type="text"
            name="contact"
            placeholder="Phone Number"
            required
            className="input input-bordered w-full"
          />
          <select name="availability" required className="select select-bordered w-full">
            <option disabled>Availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input input-bordered w-full"
          />
          <div>
            <label className="block font-semibold mb-2">Lifestyle Preferences</label>
            <div className="grid grid-cols-2 gap-2">
              {lifestyleOption.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="lifestyle"
                    value={option}
                    className="checkbox"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <textarea
            name="description"
            placeholder="Short description"
            required
            className="textarea textarea-bordered w-full min-h-[120px]"
          ></textarea>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="btn w-full bg-purple-600 text-white hover:bg-purple-700"
          >
            Add Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
