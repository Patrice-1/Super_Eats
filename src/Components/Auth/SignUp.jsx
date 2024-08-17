import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { userAuth } from "../Context/authContext";

function SignUp() {
  
  const [formData, setFormData] = useState([]);
  const {SignUp} = userAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignUp(formData.email, formData.password)
      navigate('/signin');
      
    } catch (error) {
      
      console.log(error);
      
    }
  }
  
  return (
    <div className=" grid items-center px-8 py-4 my-2">
      <div>
        <div>
          <h1 className="text-4xl">Sign Up</h1>
          <p className="text-2xl py-8">
            Create a new account by filling out the form below.
          </p>
        </div>
        <form className="border rounded-lg p-3 w-full">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg"
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mt-2 rounded-lg"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-xl mt-4">
          Please enter your email and password to create a new account.
        </p>
      </div>
      <div>
        <span className="text-xl pt-4 text-gray-600">
          Already have an account? <Link to="/signin">Sign In</Link>
        </span>
      </div>
    </div>
  );
}

export default SignUp;
