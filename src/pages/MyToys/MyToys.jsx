import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContextProviders/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/usersToy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/usersToy/${_id}`, {
            method:"DELETE",
        })
          .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Delete!",
                      text: "Do you want to detete",
                      icon: "warning",
                      confirmButtonText: "Yes",
                    });
                      const remaining = myToys.filter((toy) => toy._id !== _id);
                      setMyToys(remaining);
                }

          })
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

                    className="btn btn-primary btn-xs"
                  >
                    <Link to={`/updateToys/${toy._id}`}>Update</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(`${toy._id}`)}
                    className="btn btn-secondary btn-xs"
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

export default MyToys;
