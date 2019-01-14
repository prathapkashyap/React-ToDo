import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
<nav className="nav-wrapper blue darken 1">
    <div>
    <NavLink  to='/' className="center brand-logo "> Todo App</NavLink>
        <ul className="right">
            <li><NavLink to="/">Home</NavLink> </li>
            <li><NavLink to="/About">About</NavLink> </li>
            <li><NavLink to="/contact">Contact</NavLink> </li>

        </ul>
    </div>

</nav>
    )
}
export default Navbar;