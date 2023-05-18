import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  const [allToys, setAllToys] = useState(toys);
    console.log(allToys);

    const handleDetail = (_id) => {
        console.log(_id)
    }

    return (
        <div>
            <p className="text-center text-4xl my-4">My All Jobs</p>
      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>SL.</th>
              <th>SellerName</th>
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
                  <td>{toy?.SellerName}</td>
                  <td>{toy?.name}</td>
                  <td>{toy?.subCategory}</td>
                  <td>{toy?.price}</td>
                  <td>{toy?.rating}</td>
                  <td>{toy?.avialableQty}</td>
                  <td>
                    <button onClick={()=>handleDetail(`${toy._id}`)} className="btn btn-primary">Detail</button>
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
