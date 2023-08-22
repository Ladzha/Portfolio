import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import foto from '../img/foto.png'


const Navbar = () => {

    return(
        <div className='navbar'>
           <ul className='navList'>
            <img className='foto' src={foto} alt='foto'/>
                <li className='listItem'><NavLink to='/'>Alla Nudelman</NavLink></li>
                <li className='listItem'><NavLink to='/'>Home</NavLink></li>
                <li className='listItem'><NavLink to='/about'>About</NavLink></li>
                <li className='listItem'><NavLink to='/projects'>Projects</NavLink></li>
                <li className='listItem'><NavLink to='/skills'>Skills</NavLink></li>
                <li className='listItem'><NavLink to='/contact'>Contact</NavLink></li>
                <li className='listItem'><AiFillGithub/></li>
                <li className='listItem'><AiFillLinkedin/></li>

           </ul>

        </div>

    )
}
export default Navbar