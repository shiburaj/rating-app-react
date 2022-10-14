import React, { useState } from 'react'
import Smiley from './components/Smiley';
import Star from './components/Star';

export default function App() {
  const [rating, setRating] = useState(1);

  function giveRating(value) {
    setRating(value);
  }

  return (
    <div className="rating-card">
        <Smiley userRating={rating} />
        <div className="rating-stars">
            <Star userRating={rating} giveRating={giveRating}  current={1} />
            <Star userRating={rating} giveRating={giveRating}  current={2} />
            <Star userRating={rating} giveRating={giveRating}  current={3} />
            <Star userRating={rating} giveRating={giveRating}  current={4}/>
            <Star userRating={rating} giveRating={giveRating}  current={5}/>
            {/* <i onClick={(e) => (giveRating(2))} className={`fa-3x fa-star ${rating==2?'fa-solid':'fa-regular'}`}></i>
            <i onClick={(e) => (giveRating(3))} className={`fa-3x fa-star ${rating==3?'fa-solid':'fa-regular'}`}></i>
            <i onClick={(e) => (giveRating(4))} className={`fa-3x fa-star ${rating==4?'fa-solid':'fa-regular'}`}></i>
            <i onClick={(e) => (giveRating(5))} className={`fa-3x fa-star ${rating==5?'fa-solid':'fa-regular'}`}></i> */}
        </div>
    </div>
  )
}
