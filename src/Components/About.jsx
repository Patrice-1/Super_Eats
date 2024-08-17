import React from "react";

function About (){
    return (
      <div className="mx-8 min-h-screen items-center grid flex-col">
        <h2 className="text-6xl text-center">About SuperEats</h2>
        <p className="text-2xl">
          At SuperEat we value our Customer and we offer a wide range of products for your appetite.
          We strive to offer the best dining experiences around the city.
        </p>
        <h2 className="text-5xl text-center">Facilities</h2>
        <p className="text-2xl">
          We have a wide range of facilities to cater to your needs.
          Some of our facilities include:Sushi Bar and Dining Area

        </p>
        <h2 className="text-5xl text-center">Our Menu</h2>
        <p className="text-2xl">
          Our menu is designed to cater to your taste buds.
          We offer a variety of dishes to suit your preferences.  
          Some of our popular dishes include: Sushi, Ramen, Dim Sum and Fried Chicken
        </p>
      </div>
    );
}


export default About;