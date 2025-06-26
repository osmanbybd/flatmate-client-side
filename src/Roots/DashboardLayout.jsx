// src/layout/DashboardLayout.jsx
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router";
import { FaHome, FaPlus, FaList, FaTachometerAlt, FaBars, FaTimes, FaListUl } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Topbar */}
      <div className="md:hidden bg-indigo-600 text-white flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={toggleSidebar} className="text-2xl">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`md:block ${isSidebarOpen ? "block" : "hidden"} w-full md:w-64 bg-violet-500 text-white p-6 space-y-6`}>
        <h2 className="text-2xl font-bold mb-4 hidden md:block">🏠 Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <Link
            to="/dashboard"
            className="hover:bg-indigo-700 p-2 rounded flex items-center gap-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTachometerAlt /> Overview
          </Link>
           <Link to="/dashboard/all-listings" className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded">
      <FaListUl /> All Items
    </Link>
          <Link
            to="/dashboard/addListing"
            className="hover:bg-indigo-700 p-2 rounded flex items-center gap-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaPlus /> Add Listing
          </Link>
          <Link
            to={`/dashboard/myListing?email=${user?.email}`}
            className="hover:bg-indigo-700 p-2 rounded flex items-center gap-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaList /> My Listings
          </Link>
          <Link
            to="/"
            className="hover:bg-indigo-700 p-2 rounded flex items-center gap-2 mt-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaHome /> Back to Home
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-violet-200 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
