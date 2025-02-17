import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CursorFollower from "../components/CursorFollower";

//import store
// import { useStore } from '../../stores/user';

//import handler error
// import { handleErrors } from "../../utils/handleErrors";

export default function login() {
  //navigate
  // const navigate = useNavigate();

  //destruct action "login" from store
  // const { login } = useStore();

  //define state
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //define state errors
  // const [errors, setErrors] = useState({});
  // const [loginFailed, setLoginFailed] = useState('');

  //function "loginHanlder"
  // const loginHandler = async (e) => {
  //     e.preventDefault();

      //call action "login" from store
      // await login({ email, password })
      //     .then((response) => {

              //redirect to dashboard
              // return navigate('/student');
          // })
          // .catch((error) => {
          //   console.log(error.response);
          //     if(error.response.data.message) {
          //         setLoginFailed(error.response.data.message);
          //         return
          //     }

              //assign error to function "handleErrors"
              // handleErrors(error.response.data, setErrors);

          // })
  // };
  return (
    <>
    <CursorFollower />
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      {/* <!-- Card Login --> */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                  <img src="/assets/images/smk.png" alt="Logo SMKN 1 Kraksaan" className="w-12 h-12" />
                  <h1 className="text-xl font-semibold text-black">
                      PKL SMKN 1 <span className="text-blue-500">KRAKSAAN</span>
                  </h1>
              </div>
              <h2 className="text-2xl font-medium ml-1">Login Your Account</h2>
              <p className="text-gray-600 mb-6 md:ml-1">Enter your email address and password <span className='hidden md:block md:whitespace-pre-line'></span>to access journal.</p>
              <div>
              </div>
              <form>
                <div>
                    <label className="block text-gray-700 font-medium">Email *</label>
                    <input type="email" placeholder="your@email.com"  className="w-full p-3 mb-4 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Password *</label>
                  <input type="password"placeholder="Your password"  className="w-full p-3 mb-4 border border-gray-300 rounded" />
                </div>
                  <Link to="/reset" className="text-blue-500 text-sm mb-4 inline-block">Lupa Password?</Link>
                  <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Login</button>
              </form>
          </div>
          <div className="md:w-1/2 flex justify-center items-center hidden md:block">
              <img src="/assets/images/icons/smk.png" alt="School Emblem" className="w-90 h-120 mb-3" />
          </div>
      </div>

      <div className="text-center text-sm mt-4">
          Apakah anda belum mempunyai akun? <Link to="/register" className="text-blue-500">Registrasi</Link>
      </div>
  </div>
    </>
  )
}