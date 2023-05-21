import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaGoogle} from 'react-icons/fa'
import { AuthContext } from "../../AuthContextProviders/AuthProviders";
import { updateProfile } from "firebase/auth";
import PageTitle from "../shared/PageTitle";
const SignUp = () => {

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signInWithGoogle, createUser } = useContext(AuthContext);



  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateProfile(loggedUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/");
        setSuccess("successful registration");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");

      });
    form.reset();
  };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
              console.log(result)
              navigate('/');
                 setSuccess("successful registration");
                 setError("");
            })
          .catch(error => {
               setError(error.message);
               setSuccess("");
            console.log(error.message)
        })
    }

  return (
    <div className="w-full mx-auto mb-4">
      <PageTitle title="Signup"> </PageTitle>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-2xl font-bold"> SignUp</h1>
          </div>
          <div className="  w-full shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit}
              className="card-body grid grid-cols-2"
            >
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
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
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
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
                  placeholder="photo-url"
                  className="input input-bordered"
                />
              </div>
              <div className=" mt-1">
                <button type="submit" className="btn btn-outline btn-block">
                  SignUp
                </button>
              </div>
              <div>
                <label className="label flex">
                  <p className="text-sm text-gray-400">
                    Already have an account ?{" "}
                  </p>
                  <p className="text-blue-500 text-md">
                    <Link to="/login">Login</Link>
                  </p>
                </label>
              </div>
            </form>
            <div className="px-8 mb-6">
              <p className="text-green-600 text-center">{success}</p>
              <p className="text-red-600 text-center">{error}</p>
              <div className="text-center  text-gray-500 text-lg">
                <p className="pb-2">
                  Or <br />
                  Signup with{" "}
                </p>

                <button
                  className="btn btn-outline btn-block"
                  onClick={handleGoogleSignIn}
                >
                  <FaGoogle></FaGoogle>oogle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
