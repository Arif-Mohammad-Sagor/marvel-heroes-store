import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {FaGoogle,FaGithub} from 'react-icons/fa'
import { AuthContext } from "../../AuthContextProviders/AuthProviders";

const SignUp = () => {
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const user = { name, email };
      console.log(user);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
            console.log(result)
            })
            .catch(error => {
            console.log(error.message)
        })
    }
     const handleGithubSignIn = () => {
       signInWithGithub()
         .then((result) => {
           console.log(result);
         })
         .catch((error) => {
           console.log(error.message);
         });
     };
  return (
    <div className="w-2/5 mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-2xl font-bold">Plese SignUp</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
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
                <label className="label flex">
                  <p className="text-sm text-gray-400">
                    Already have an account ?{" "}
                  </p>
                  <p className="text-blue-500 text-md">
                    <Link to="/login">Login</Link>
                  </p>
                </label>
              </div>
              <div className=" mt-1">
                <button className="btn btn-primary">SignUp</button>
              </div>
              <div className="divider"></div>
              <div className="text-center  text-gray-500 text-lg">
                              <p className="py-1">Or Signin with </p>

                              <button className="btn btn-outline btn-circle"
                              onClick={handleGoogleSignIn}>
                  <FaGoogle></FaGoogle>
                              </button>

                              <button
                                  onClick={handleGithubSignIn}
                                  className="btn btn-outline btn-circle">
                  <FaGithub></FaGithub>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
