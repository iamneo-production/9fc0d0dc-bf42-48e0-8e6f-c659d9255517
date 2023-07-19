import React from 'react'
import Eventcard from './concertcard'
import './concertbooking.css'
import { Link } from 'react-router-dom'

function Concertbookingpage() {
  return (
    <div>
    <Eventcard/>
    <Link to ="/payment">
      <button className="pro">Proceed</button></Link>
      </div>
  )
}

export default Concertbookingpage