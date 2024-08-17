import React from "react";
import Purchase from "./Purchase";

function MenuList ({ image, title, price }){
    return (
      <div className="lg:px-32 flex flex-row items-center justify-around border rounded-lg px-4 py-4">
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-52 rounded-md mt-4 mb-3"
          />
          <figcaption className="font-semibold mb-2 ">{title}</figcaption>
          <div>
            <h3 className="mb-4">{price}</h3>
            <Purchase title="Purchase" />
          </div>
        </div>
      </div>
    );
}

export default MenuList;