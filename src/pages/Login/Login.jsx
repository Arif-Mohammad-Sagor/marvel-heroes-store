import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContextProviders/AuthProviders';
import { FaGoogle,FaGithub } from 'react-icons/fa';

const Login = () => {
    const { signInWithGoogle, loginUser } = useContext(AuthContext);


  const handleSubmit = (e) => {

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)

      .then((result) => {
        console.log(result)
        console.log("successfully loggedin");
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset()
  }
  
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="w-3/5 mx-auto">
        <div className=" min-h-screen">
          <div className=" flex-col">
            <div className="text-center mb-6 mt-8">
              <h1 className="text-2xl font-bold">Please login</h1>
            </div>
            <div className="card w-3/5 mx-auto    shadow-2xl bg-base-200">
              <form onSubmit={handleSubmit} className="card-body w-full">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
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
                    className="input input-bordered w-full"
                  />
                  <label className="label flex">
                    <p className="text-sm text-gray-400">
                      Don't have account ? please{" "}
                      <Link to="/signup" className="text-blue-500">
                        SignUp
                      </Link>
                    </p>
                    {/* <p className="text-blue-500 text-md ">
                      <Link to="/signup">singup</Link>
                    </p> */}
                  </label>
                </div>
                <div className=" mt-1">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                {/* {error && <p className="text-danger">{error}</p>} */}
                <div className="text-center  text-gray-500 text-lg">
                  <p className="py-1">Or Signin with </p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline btn-block"
                  >
                    <FaGoogle></FaGoogle>oogle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login