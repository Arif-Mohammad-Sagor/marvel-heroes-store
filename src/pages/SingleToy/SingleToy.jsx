import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../AuthContextProviders/AuthProviders';
import PageTitle from '../shared/PageTitle';

const SingleToy = () => {
    const singleToys = useLoaderData();
    const { user,loading } = useContext(AuthContext);
    const {
      toyName,
      sellerName,
      email,
      photoUrl,
      price,
      rating,
      quantity,
      description,
      subCategory,
    } = singleToys;
  console.log(singleToys)
  console.log(user);
  if (!singleToys) {
    return (
      <div className="radial-progress" style={{ "--value": 100 }}>
        100%
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2">
        <PageTitle title="SignleToys"> </PageTitle>
        <div className="bg-slate-200 flex items-center justify-center">
          <div>
            <p>
              <span className="font-semibold text-lg">ToyName:</span> {toyName}
            </p>
            <p>
              <span className="font-semibold text-lg">SellerName:</span>{" "}
              {sellerName}
            </p>
            <p>
              <span className="font-semibold text-lg">SellerEmail:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="font-semibold text-lg">Price:</span> ${price}
            </p>
            <p>
              <span className="font-semibold text-lg">Ratings:</span> {rating}
            </p>
            <p>
              <span className="font-semibold text-lg">Avail.Qnty:</span>{" "}
              {quantity} pics
            </p>
            <p>
              <span className="font-semibold text-lg">Desc:</span> {description}
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-slate-200">
          <img
            src={photoUrl}
            alt={`img of ${toyName}`}
            className="w-96 h-96 object-cover"
          />
        </div>
      </div>
    );
  }
}

export default SingleToy