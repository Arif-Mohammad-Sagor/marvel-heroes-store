import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthContextProviders/AuthProviders";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [selectValue, setSelectValue] = useState("");

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const photoUrl = form.photo.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toyInfo = {
      toyName,
      sellerName,
      email,
      photoUrl,
      price,
      rating,
      quantity,
      description,
      subCategory: selectValue,
    };
    fetch("http://localhost:5000/addToys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
        .then((data) => {
            console.log(data);
        Swal.fire({
            icon: "success",
          text: "Successfully added a toy",
        });
        });
    form.reset();
  };

  return (
    <div>
      <p className=" text-center text-2xl mt-4 font-bold ">Add A Toy</p>
      <div className="w-3/5 mx-auto shadow-md">
        <form onSubmit={handleAddToy} className="card-body">
          <div className="grid grid-cols-2">
            <div>
              <label className="label">
                <span className="label-text">ToyName</span>
              </label>
              <input
                type="text"
                name="toyName"
                placeholder="Toy Name"
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
                defaultValue={user?.email}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="mt-8">
              <select
                className="select w-full input-bordered"
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option disabled selected>
                  Select subCategory
                </option>
                <option value="Avengers">Avengers</option>
                <option value="Guardians Of The Galaxy">
                  Guardians Of The Galaxy
                </option>
                <option value="Transformer">Transformer</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Photo-Url</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="photo-url"
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
  );
};

export default AddAToy;
