import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full bg-gradient-to-b from-black to bg-gray-800 p-4 text-white md:h-screen ' >
        <div className=' max-w-screen-lg flex flex-col p-4 justify-center mx-auto h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> -: &nbsp; Contact &nbsp; :-</p>
                <p className='text-xl py-6'>Submit the form below to get in touch with me.....</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/141d7bdd-3b52-46f5-adb1-3b28d0eb2e95" method='POST' className=' flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2'/>
                    <textarea name="message" rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk ! </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact