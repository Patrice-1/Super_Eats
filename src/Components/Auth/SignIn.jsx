import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../Context/authContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Auth/firebaseConfig';

function SignIn() {

  const [formData, setFormData] = useState({});
  // const { user, setUser } = userAuth();
  const { signIn, user, LogOut } = userAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LogIn(formData.email, formData.password);
      navigate('/');

    } 
    catch(error){
      console.log(error);
    };
  }

  return (
    <div className=" grid items-center px-8 py-4 my-2">
      <div>
        <div>
          <h1 className="text-4xl mb-8">Sign In</h1>
        </div>
        <form className="border rounded-lg p-3 w-full">
          <input
          onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg text-black"
          />
          <input
          onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full p-2 mt-2 rounded-lg text-black"
          />
          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <p className="text-xl mt-4">
          Please enter your email and password to Sign In.
        </p>
      </div>
      <span className="text-xl pt-4 text-gray-600">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </span>
      <p onClick={()=>LogOut()}>LogOut</p>
    </div>
  );
}

export default SignIn;