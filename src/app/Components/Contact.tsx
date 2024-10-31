'use client'
import React from 'react'

const Contact = () => {
 

  return (
          //  -------------------------------OUR RETUNT SECTION-----------------------------
    
    <div className='text-center' id='Contact'>
      <h1 className='font-bold text-3xl mt-3'>Quick Contact</h1>

      {/* //  -------------------------------OUR VIP FORM----------------------------- */}

      <div className='flex justify-center items-center'>
        
        <form action="submit" className='mt-10 bg-black p-3 rounded-lg bg-opacity-55 border-x-2 border-white mb-60 sm:mb-5'data-aos="flip-right" data-aos-duration="2000">
        <h2 className='text-2xl underline'>Email Form</h2>
          <div className='flex flex-col mb-2 w-64'>
            <label htmlFor="name" className='mt-2 mb-2'>Name:</label>
            <input type="text" id='name' className='text-black rounded-md border-2 border-black' placeholder='Enter your name'/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="email" className='mb-2'>Email:</label>
            <input type="email" id='email' className='text-black rounded-md border-2 border-black' placeholder='Enter your email'/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="message" className='mb-2'>Message:</label>
            <input type="text" id='message' className='text-black rounded-md border-2 border-black' placeholder='Enter your message '/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="phone" className='mb-2'>Phone:</label>
            <input type="number" id='phone'className='text-black rounded-md border-2 border-black' placeholder='Enter your phone'/><br />
            </div>
            <div  className='flex flex-col mb-2 w-64'>
            <label htmlFor="subject" className='mb-2'>subject:</label>
            <input type="text" id='subject'className='text-black rounded-md border-2 border-black' placeholder='Enter your subject'/>
            </div>
            <div className='p-4'>
              <button className='bg-blue-950 w-48 font-bold rounded-lg hover:border-2 hover:border-white duration-200'>Submit</button>
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default Contact
