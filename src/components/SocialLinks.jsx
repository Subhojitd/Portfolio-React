import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail} from 'react-icons/hi'


const SocialLinks = () => {

    const links =[
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/subhajit-das-152907244/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Subhojitd',
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:subhojitdas153@gmail.com',
            style:'rounded-br-md'
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id,child,href,style})=>(
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700" + " " + style}>
                    <a href={href} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'>
                        {child}
                    </a>
                </li>
                ))}
                
            </ul>
        </div>
    )
}

export default SocialLinks