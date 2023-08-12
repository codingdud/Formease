import React from 'react'
import './nav.css'
import { NavLink,Outlet} from 'react-router-dom'
import icon from "../../icon.svg"
import Strock from './Strock'

function Nav() {
    const navstyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            TextDecoration: isActive ? "none" : "underline",
        }
    }
    const navstyleicon = ({ isActive }) => {
        return {
            'background-color': isActive ? "white" : " ",
           'border-radius':isActive? "16px":" ",
        }
    }
    return (
        <>
        <nav className='navlink'>
            <div className='navcontainer'>
                
                <NavLink /* className="link" */ style={navstyleicon} to="/">
                    <img src={icon} className="icon" alt="logo" />
                </NavLink>
                <Strock />
                <NavLink className="link" style={navstyle} to="/manage">Manage Form</NavLink>
                <Strock />
                <NavLink className="link" style={navstyle} to="/show">Form Data</NavLink>
                <Strock />
                <NavLink className="link" style={navstyle} to="/about">About us</NavLink>
            </div>

        </nav>
        <Outlet/>
        </>
    )
}

export default Nav