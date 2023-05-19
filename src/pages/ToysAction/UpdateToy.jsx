import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthContextProviders/AuthProviders";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToyInfo = {
      price,
      quantity,
      description,
    };

    fetch(`http://localhost:5000/updateToys/${data._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          if (data.modifiedCount > 0) {
 Swal.fire({
   icon: "success",
   text: "Successfully updated a toy",
 });
       }
      });
  };
  console.log(data);
  return (
    <div>
      <div>
        <p className=" text-center text-2xl mt-4 font-bold ">Add A Toy</p>
        <div className="w-3/5 mx-auto shadow-md">
          <form onSubmit={handleUpdate} className="card-body">
            <div className="grid grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text">ToyName</span>
                </label>
                <input
                  type="text"
                  name="toyName"
                  disabled
                  defaultValue={data.toyName}
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">SellerName</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  disabled
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  disabled
                  defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  disabled
                  defaultValue={data.subCategory}
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Photo-Url</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  disabled
                  defaultValue={data.photoUrl}
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  disabled
                  defaultValue={data.rating}
                  placeholder="ratings"
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Avail.Qty</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="quantity"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea w-full input-bordered"
                placeholder="Description"
              ></textarea>
            </div>
            <button type="submit" className="btn  btn-primary">
              Add Toy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
