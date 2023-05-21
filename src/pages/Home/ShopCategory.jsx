import React, { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from '../../AuthContextProviders/AuthProviders';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';


const ShopCategory = () => {
    const [tabtext, setTabText] = useState("Transformer");
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
  fetch(
    `https://assignment-11-server-flax.vercel.app/allToys/subCategoryProducts?subCategory=${tabtext}&limit=2`
  )
    .then((res) => res.json())
    .then((data) => setToys(data));
  }, [tabtext]);

    console.log(toys);
  console.log(tabtext)

  const handleViewDetail = (id) => {
    console.log(id)
    Swal.fire("You have to login first");
    navigate('/login');
}
  return (
    <div className="my-8">
      <p className="md:text-5xl leading-none mb-6 text-center py-8">
        Shop By Category
      </p>

      <Tabs>
        <TabList>
          <Tab onClick={() => setTabText("Transformer")}>Transformer</Tab>
          <Tab onClick={() => setTabText("Guardians Of The Galaxy")}>
            Guardians Of The Galaxy
          </Tab>
          <Tab onClick={() => setTabText("Avengers")}>Avengers</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            {toys.map((toy) => (
              <div
                key={toy._id}
                className="card md:w-96  w-full md:mx-auto bg-base-100 px-2 shadow-xl"
              >
                <figure>
                  <img
                    src={toy.photoUrl}
                    className="md:w-60 md:h-60 w-full object-cover"
                    alt={toy.toyName}
                  />
                </figure>
                <div className="card-body px-2">
                  <h2 className="md:card-title text-xs">
                    ToyName: {toy.toyName}
                  </h2>
                  <h2 className="md:card-title text-xs">
                    ToyPrice: ${toy.price}
                  </h2>
                  <h2 className="md:card-title text-xs">
                    ToyRating: {toy.rating}
                  </h2>
                  <div className="card-actions justify-star">
                    {user ? (
                      <>
                        <button className="btn md:btn-primary btn-xs">
                          <Link to={`/singleToys/${toy._id}`}>View Detail</Link>
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          onClick={() => handleViewDetail(`${toy._id}`)}
                          className="btn md:btn-secondary btn-xs"
                        >
                          View Detail
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            {toys.map((toy) => (
              <div
                key={toy._id}
                className="card md:w-96  w-full md:mx-auto bg-base-100 px-2 shadow-xl"
              >
                <figure>
                  <img
                    src={toy.photoUrl}
                    className="md:w-60 md:h-60 w-full object-cover"
                    alt={toy.toyName}
                  />
                </figure>
                <div className="card-body px-2">
                  <h2 className="md:card-title text-xs">
                    ToyName: {toy.toyName}
                  </h2>
                  <h2 className="md:card-title text-xs">
                    ToyPrice: ${toy.price}
                  </h2>
                  <h2 className="md:card-title text-xs">
                    ToyRating: {toy.rating}
                  </h2>
                  <div className="card-actions justify-star">
                    {user ? (
                      <>
                        <button className="btn md:btn-primary btn-xs">
                          <Link to={`/singleToys/${toy._id}`}>View Detail</Link>
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          onClick={() => handleViewDetail(`${toy._id}`)}
                          className="btn md:btn-secondary btn-xs"
                        >
                          View Detail
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            {toys.map((toy) => (
              <div
                key={toy._id}
                className="card md:w-96  w-full md:mx-auto bg-base-100 px-2 shadow-xl"
              >
                <figure>
                  <img
                    src={toy.photoUrl}
                    className="md:w-60 md:h-60 w-full object-cover"
                    alt={toy.toyName}
                  />
                </figure>
                <div className="card-body px-2">
                  <h2 className="md:card-title text-xs">
                    ToyName: {toy.toyName}
                  </h2>
                  <h2 className="md:card-title text-xs">
                    ToyPrice: ${toy.price}
                  </h2>
                  <h2 className="md:card-title text-xs">
                    ToyRating: {toy.rating}
                  </h2>
                  <div className="card-actions justify-star">
                    {user ? (
                      <>
                        <button className="btn md:btn-primary btn-xs">
                          <Link to={`/singleToys/${toy._id}`}>View Detail</Link>
                        </button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <button
                          onClick={() => handleViewDetail(`${toy._id}`)}
                          className="btn md:btn-secondary btn-xs"
                        >
                          View Detail
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ShopCategory