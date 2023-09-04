import React from 'react'
import "./button.css"

export default function Button({name,onClick}) {
  return (
    <div>
      <button className="btn" onClick={onClick}>{name}</button>
    </div>
  )
}
