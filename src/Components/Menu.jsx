import React from "react";
import MenuList from "./Assets/MenuList";
import order1 from "../assets/order1.png";
import order2 from "../assets/order2.png";
import order3 from "../assets/order3.png";
import order4 from "../assets/order4.png";
import order5 from "../assets/order5.png";
import order6 from "../assets/order6.png";
import Purchase from "./Assets/Purchase";

const menuItems = [
  {
    image: order1,
    title: "Burger",
    price: "$4.99",
  },
  {
    image: order2,
    title: "Rice",
    price: "$5.99",
  },
  {
    image: order3,
    title: "Sushi",
    price: "$4.49",
  },
  {
    image: order4,
    title: "Dim Sum",
    price: "$6.99",
  },
  {
    image: order5,
    title: "Ramen",
    price: "$7.99",
  },
  {
    image: order6,
    title: "Chicken",
    price: "$5.49",
  },
];

function Menu() {
  return (
    <div className="grid px-8 items-center grid-cols-3 min-h-screen gap-12 text-white">
      {menuItems.map((menuItem, index) => (
        <MenuList
          key={index}
          image={menuItem.image}
          title={menuItem.title}
          price={menuItem.price}
        />
      ))}
    </div>
  );
}

export default Menu;
