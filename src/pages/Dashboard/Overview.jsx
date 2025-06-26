// src/pages/Dashboard/Overview.jsx

import { use, useEffect, useState } from "react";

import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Overview = () => {
  const { user } = use(AuthContext);
  const [allListings, setAllListings] = useState([]);
  const [myListings, setMyListings] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    // Total listings
    axios.get("https://roommate-server-side-alpha.vercel.app/addListing")
      .then(res => setAllListings(res.data));

    // My Listings
    if (user?.email) {
      axios.get(`https://roommate-server-side-alpha.vercel.app/myListing?email=${user.email}`)
        .then(res => setMyListings(res.data));
    }

    // All Users
    axios.get("https://roommate-server-side-alpha.vercel.app/users")
      .then(res => setAllUsers(res.data));
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-500 text-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold">Total Listings</h2>
          <p className="text-4xl mt-2">{allListings.length}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold">My Listings</h2>
          <p className="text-4xl mt-2">{myListings.length}</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold">Total Users</h2>
          <p className="text-4xl mt-2">{allUsers.length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow border">
        <h2 className="text-xl font-bold mb-2">👤 Logged-in User</h2>
        <p><strong>Name:</strong> {user?.displayName || "N/A"}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Overview;
