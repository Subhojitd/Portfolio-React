import React from 'react'
import HeroImg from "../assets/heroImg.jpg"
import {GoDownload} from "react-icons/go"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full'>

                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Web Developer</h2>
                
                <p className='text-gray-400 py-4 max-w-md'>
                    I have 2 years of experience in this development field. Currently, I love to work on web application using cutting edge technologies link React.js , Next.js Tailwind, Node.js, MongoDB, and many more... 
                </p>

                <div>
                    <a href='resume.pdf' download={true} target='_blank' rel='noreferrer' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-2xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 cursor-pointer text-xl '>
                        R e s u m e
                        <span className='duration-300 pl-4'>
                        <GoDownload className='animate-bounce' size={25}/>
                        </span>
                        
                    </a>
                </div>
            </div>
            {/* Hero-Image */}
            <div>
                <img src={HeroImg} alt="my-profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home