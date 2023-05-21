import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../shared/PageTitle";

const AllToys = () => {
  const toys = useLoaderData();
  const [allToys, setAllToys] = useState(toys);
  const [searchText, setSearchText] = useState("");
  const [sortValue, setSortValue] = useState("ascending");

  const handleSearch = () => {
    fetch(
      `https://assignment-11-server-flax.vercel.app/allToys/product/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };
  const handleSort = (e) => {
    console.log(e.target.value);
    // setSortValue(e.target.value);
    fetch(
      `https://assignment-11-server-flax.vercel.app/allToys/sortProduct/${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };
  console.log(allToys);
  // console.log(toys);
  return (
    <div>
      <PageTitle title="AllToys"> </PageTitle>
      <p className="text-center text-4xl my-4">My All Jobs</p>
      <div className="grid grid-cols-2">
        <div className="form-control  mx-auto">
          <div className="input-group flex justify-center mb-4">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search Toy By Name"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <select className=" border-2" onChange={handleSort}>
            <option value="sort by price" disabled>
              Sort by Price
            </option>
            <option value="ascending">Ascending by Price</option>
            <option value="descending">Descending by Price</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>SL.</th>
              <th>Seller</th>
              <th>ToyName</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Qty.</th>
              <th>View </th>
            </tr>
          </thead>
          <tbody>
            {allToys &&
              allToys.map((toy, index) => (
                <tr key={toy._id}>
                  <td>{index + 1}</td>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.toyName}</td>
                  <td>{toy?.subCategory}</td>
                  <td>${toy?.price}</td>
                  <td>{toy?.rating}</td>
                  <td>{toy?.quantity}</td>
                  <td>
                    <button className="btn btn-primary">
                      <Link to={`/singleToys/${toy._id}`}>Detail</Link>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
