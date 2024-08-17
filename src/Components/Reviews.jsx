import React from "react";
import ReviewsList from "./Assets/ReviewsList";
import Logo from '../assets/Logo.png'

function Reviews (){
    return(
        <div className=' px-6 py-6  items-center w-full lg:h-1/3 rounded-lg grid grid-cols-3'>
            <ReviewsList name="Patrick" review="A very good book" image={Logo}/>
            <ReviewsList name="Sarah" review="A great book" image={Logo}/>
            <ReviewsList name="Bob" review="A fantastic book" image={Logo}/>
            <ReviewsList name="James" review="Awesome" image={Logo} />
            
        </div>
    )
}
export default Reviews;