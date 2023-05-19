import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { AuthContext } from '../../AuthContextProviders/AuthProviders';


const SingleToy = () => {
    const singleToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const { name, avialableQty, SellerName, description, img, _id, category, subCategory, price, rating } =
        singleToys;
    console.log(singleToys.img)
    // const { id } = useParams();
    // console.log(id);

    // useEffect(() => {
    //     fetch('/public/Toys.json')
    //         .then(res => res.json())
    //     .then(data =>setSignleToys(data))

    // }, [])
    // console.log(singleToy);
  return (
    <div className="grid grid-cols-2">
      <div className='bg-slate-200 px-10 py-10 '>
        <p>
          <span className="font-semibold text-lg">ToyName:</span> {name}
        </p>
        <p>
          <span className="font-semibold text-lg">SellerName:</span> {SellerName}
        </p>
        <p>
          <span className="font-semibold text-lg">SellerEmail:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold text-lg">Price:</span> ${price}
        </p>
        <p>
          <span className="font-semibold text-lg">Ratings:</span> {rating}
        </p>
        <p>
          <span className="font-semibold text-lg">Avail.Qnty:</span> {avialableQty} pics
        </p>
        <p>
          <span className="font-semibold text-lg">Desc:</span> {description}
        </p>
      </div>
      <div className=" flex justify-center items-center bg-slate-200">
        <img src={img} alt={`img of ${name}`} className="w-96 h-96 object-cover" />
      </div>
    </div>
  );
}

export default SingleToy