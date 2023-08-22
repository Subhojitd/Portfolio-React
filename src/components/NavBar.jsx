import { useState } from 'react';
import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    
    //hamburger state
    const [nav, setNav] = useState(false);
    // Links
    const links =[
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 1,
            link: 'projects'
        },
        {
            id: 1,
            link: 'skills'
        },
        {
            id: 1,
            link: 'contact'
        },
    ]

    return (
        
        // Container
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-40'>

            {/* Logo */}
            <div>
                <h1 className='text-5xl font-signature ml-2'>Subhajit.io</h1>
            </div>

            {/* Links / Menu*/}
            <ul className='hidden md:flex'>
                {links.map(({id, link})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500  hover:scale-110 duration-200' ><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
            </ul>

            {/* Hamburger */}
            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {/* Hamburger-links */}
            {nav && (
                <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>{links.map(({id, link})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        
                        </li>
                ))}</ul>
            )}
            

        </div>
    )
}

export default NavBar