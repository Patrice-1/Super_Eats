import React from "react";

function Purchase ({title}){
    return (
        <button className="border-2 font-semibold hover:bg-white hover:text-red-500 text-yellow-500 py-2 px-5 rounded-2xl hover:border-red-950" onClick={()=>console.log('Order Placed')}>
            {title}
        </button>
    )
}

export default Purchase;