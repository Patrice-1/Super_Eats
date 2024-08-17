import React from 'react';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Menu from './Components/Menu'
import Reviews from './Components/Reviews'
import Home from './Components/Home'
import LogOut from './Components/Auth/LogOut'
import { Routes, Route } from'react-router-dom';


function App (){
  return (
    <>
    <Routes>
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
   
    </>
  )
}

export default App;