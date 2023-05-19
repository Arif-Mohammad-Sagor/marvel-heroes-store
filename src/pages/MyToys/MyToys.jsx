import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContextProviders/AuthProviders";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/usersToy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

    const handleUpdate = (_id) => {
console.log(_id)
    }
    const handleDelete = (_id) => {
console.log(_id)
    }
  // toyName,
  //   sellerName,
  //   email,
  //   photoUrl,
  //   price,
  //   rating,
  //   quantity,
  //   description,
  //   subCategory;

  return (
    <div className="overflow-x-auto my-8 ">
      <table className="table w-full text-center">
        <thead>
          <tr >
            <th>Img</th>
            <th>Seller</th>
            <th>ToyName</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available Qty.</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myToys &&
            myToys.map((toy) => (
              <tr key={toy._id}>
                    <td><img src={toy.photoUrl} className="w-20 h-20" alt={ `${toy.toyName}`} /></td>
                <td>{toy?.sellerName}</td>
                <td>{toy?.toyName}</td>
                <td>{toy?.subCategory}</td>
                <td>${toy?.price}</td>
                <td>{toy?.rating}</td>
                <td>{toy?.quantity}</td>
                <td colSpan={2} className="text-center">
                  <button
                    onClick={() => handleUpdate(`${toy._id}`)}
                    className="btn btn-primary btn-xs"
                  >
                    <Link to={`/singleToys/${toy._id}`}>Update</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(`${toy._id}`)}
                    className="btn btn-secondary btn-xs"
                  >
                    <Link to={`/singleToys/${toy._id}`}>Delete</Link>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
