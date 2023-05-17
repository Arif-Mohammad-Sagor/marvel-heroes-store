import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContextProviders/AuthProviders';
import { FaGoogle,FaGithub } from 'react-icons/fa';

const Login = () => {
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);


    const handleSubmit = (e) => {

    }

  return (
    <div>
      <div className="w-3/5 mx-auto">
        <div className=" min-h-screen">
          <div className=" flex-col">
            <div className="text-center mb-6 mt-8">
              <h1 className="text-2xl font-bold">Please login</h1>
            </div>
            <div className="card w-1/2 mx-auto  flex-shrink-0   shadow-2xl bg-base-200">
              <form onSubmit={handleSubmit} className="card-body">
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
                <div className="divider"></div>
                <div className="text-center  text-gray-500 text-lg">
                  <p className="py-1">Or Signin with </p>
                  <button className="btn btn-outline btn-circle">
                    <FaGoogle></FaGoogle>
                  </button>
                  <button className="btn btn-outline btn-circle">
                    <FaGithub></FaGithub>
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