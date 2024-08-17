import React, {useContext} from "react";
import {userAuth} from './Context/authContext'
import NavBar from "./NavBar";
import Menu from "./Menu";
import About from "./About";
import Reviews from "./Reviews";

function Home (){

    return (
      <div>
        <NavBar />
        <div className="min-h-screen lg:px-32 flex flex-row items-center justify-around">
          <div className=" text-white font-semibold text-5xl">
            <h2>Welcome to SuperEats</h2>
            <p>Discover the best dining experiences around you</p>
          </div>
        </div>
        <Menu />
        <About/>
        <Reviews/>
      </div>
    
    );
}
export default Home;