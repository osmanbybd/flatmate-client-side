import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const AllDashboardListings = () => {
  const loadedListings = useLoaderData();
  console.log(loadedListings)
  const [listings, setListings] = useState(loadedListings);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this listing",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://roommate-server-side-alpha.vercel.app//addListing/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              setListings(prev => prev.filter(listing => listing._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="p-6 overflow-x-auto bg-violet-300 shadow-md">
      <h2 className="text-3xl font-bold mb-4">All Roommate Listings</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Rent</th>
            <th>Availability</th>
            <th>Likes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing._id}>
              <td>{listing.title}</td>
              <td>${listing.rent}</td>
              <td>{listing.availability}</td>
              <td>{listing.likes || 0}</td>
              <td>
                <button
                  onClick={() => handleDelete(listing._id)}
                  className="btn btn-error btn-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDashboardListings;
