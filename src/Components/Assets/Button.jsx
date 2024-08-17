import React from "react";

function Button ({title }){
    return (
        <button className="border-2 hover:bg-white hover:text-red-500 text-yellow-500 py-2 px-5 rounded-2xl hover:border-red-950">
            {title}
        </button>
    )
}

export default Button;