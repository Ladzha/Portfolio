import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import foto from '../img/foto.png'


const Navbar = () => {

    return(
        <div className='navbar'>
           <ul className='navList'>
            <img className='foto' src={foto} alt='foto'/>
                <li className='listItem name'><HashLink to='/'>ALLA NUDELMAN</HashLink></li>
                {/* <li className='listItem'><NavLink to='/'>Home</NavLink></li> */}
                <li className='listItem'><HashLink smooth to='#about'>About</HashLink></li>
                <li className='listItem'><HashLink smooth to='#projects'>Projects</HashLink></li>
                <li className='listItem'><HashLink smooth to='#skills'>Skills</HashLink></li>
                <li className='listItem'><HashLink smooth to='#contact'>Contact</HashLink></li>
                <li className='listItem'> <a href='https://github.com/Ladzha'><AiFillGithub className='icon'/></a></li>
                <li className='listItem'> <a href='https://www.linkedin.com/in/alla-nudelman/'><AiFillLinkedin className='icon'/></a></li>

           </ul>

        </div>

    )
}
export default Navbar