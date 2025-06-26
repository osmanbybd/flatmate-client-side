import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Featured from "./Featured";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AllListing = () => {
  const allData = useLoaderData();
  console.log(allData);
  const [listing, setListing] = useState(allData);
  const [sorted, setSorted] = useState("");
const lifestyleData = listing.lifestyle ? (Array.isArray(listing.lifestyle) ? listing.lifestyle : listing.lifestyle.split(',')) : [] ;

     const handleSort = (value) => {
    setSorted(value);
    const sorted = [...listing].sort((a, b) => {
      if (value === "asc") return a.rent - b.rent;
      if (value === "desc") return b.rent - a.rent;
      return 0;
    });
    setListing(sorted);
  };




  return (
    <div className="container mx-auto">
      {/* rout path */}
      <div className="text-sm breadcrumbs mb-2">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>All Listing</li>
        </ul>
      </div>

      {/* page header */}
      <div className=" mb-6">
        <h1 className="text-4xl font-bold text-indigo-600">
          Browse All Available Roommate Listings
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Find your perfect roommate from all the active listings. You can
          filter by rent to find your budget match.
        </p>
      </div>

      {/* sorted */}

  <div className="justify-end flex ">
        <select
        defaultValue="select your Rang"
        onChange={(e) => handleSort(e.target.value)}
        value={sorted}
        className="select select-secondary"
      >
        <option value="">sorted by rent </option>
        <option value="desc">Rent : Hight to low </option>
        <option value="asc">Rent : low to hight</option>
      </select>
  </div>


 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 container mx-auto '  >
                {
                    listing.map(post => <div  className='card card-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 bg-white' 
                           
                        
                           >
                      <div className="card-body flex flex-col justify-between" >
                        <div className='flex justify-between items-center py-2'>
                            <h2 className="card-title text-xl font-bold">{post.title}</h2>
                            <h1 className='bg-blue-500 px-3 py-1 rounded-full text-white'>{post.availability}</h1>
                        </div>
                        <h1 className='flex items-center gap-2'><FaLocationDot />{post.location}</h1>
                        <div>
                            <h1 className='text-xl font-semibold'>${post.rent}/month</h1>
                        </div>
                      <div>
                          <h1  className='flex flex-wrap gap-3 ' >{lifestyleData.slice(0 ,3).map((item , index) => (
                            <span key={index} className='px-3 py-1 rounded-full'>{item}</span>
                        ))}
                        {lifestyleData.length > 3 && (
                            <span className='px-3 py-1  rounded-full'>+{post.lifestyle.length - 3}</span>
                        )}
                        </h1>
                    
                      </div>
                        <div className="justify-end card-actions mt-5">
                            <p className='flex items-center gap-2'><FaHeart /> {post.likes}</p>
                          <Link to={`/details/${post._id}`}> <button   className="btn">See more</button></Link>
                         
                        </div>
                    
                      
                    
                      </div>
                    </div>)
                }
            </div>
    </div>
  );
};

export default AllListing;
