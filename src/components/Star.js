import React from 'react'

export default function Star({userRating, giveRating, current}) {
  return (
    <i onClick={(e) => (giveRating(current))} className={`fa-3x fa-star ${userRating>=current?'fa-solid':'fa-regular'}`}></i>
  )
}
