import React from "react";
import {FaStar} from 'react-icons/fa'

function ReviewsList ({ image, name, review }){
    return (
      <div>
        <div className="p-4 m-8 text-white items-center justify-between flex-row w-full lg:h-1/4 rounded-lg grid grid-cols-1 px-8">
          <img className="h-32 border rounded-full" src={image} alt="img" />
          <h1 className="text-3xl">{name}</h1>
          <p>{review}</p>
          <div className="flex">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input type="radio" className="hidden" name="rating" id="star5" value={currentRating}/>
                  <FaStar key={star} />
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default ReviewsList;