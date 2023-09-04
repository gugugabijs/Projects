import React from 'react'
import './card.css'

export default function Card({server,id,secret}) {
  return (
    <div id='card-img'>
      <img src={`https://farm66.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt="" />
    </div>
  )
}