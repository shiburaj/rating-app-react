import React from 'react'

export default function Smiley({userRating}) {
  return (
    <div className="rating-smiley">
        {userRating===1 ? <i className="fa-solid fa-4x fa-face-angry"></i> : null}
        {userRating===2 ? <i className="fa-solid fa-4x fa-face-frown"></i>: null}
        {userRating===3 ? <i className="fa-solid fa-4x fa-face-smile"></i>: null}
        {userRating===4 ? <i className="fa-solid fa-4x fa-face-grin"></i>: null}
        {userRating===5 ? <i className="fa-solid fa-4x fa-face-grin-stars"></i>: null}
    </div>
  )
}
