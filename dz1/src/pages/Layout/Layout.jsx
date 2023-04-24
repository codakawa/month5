import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import classes from "./layout.module.css"

const Layuot = () => {
  return (
    <>
        <nav>
            <ul>
                <li><NavLink to={"/"} className={({isActive}) => isActive ? classes.active : ""}>MainPage</NavLink></li>
                <li><NavLink to={"/posts"} className={({isActive}) => isActive ? classes.active : ""}>pokemons</NavLink></li>
            </ul>
        </nav>

        <Outlet />
    </>
  )
}

export default Layuot