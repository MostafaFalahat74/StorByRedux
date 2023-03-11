import React from 'react'
import { Link, Route } from 'react-router-dom'
import { BsFillCartFill, BsFillHouseDoorFill } from "react-icons/bs";
import Card from './Card'
function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'> <BsFillHouseDoorFill /></Link> 
            <Link to="/card"  ><BsFillCartFill /></Link>
        </div>
    )
}

export default Navbar