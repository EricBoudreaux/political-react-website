import React from 'react'

const Hero = () => {
  return (
    <div name='hero' className=''>
      <div className='w-full h-full'>
        <div className='absolute w-full top-[33%] text-center mx-auto'>
          <h3 className='text-white text-2xl'>Candidates 2022</h3>
          <h1 className='text-white text-5xl md:text-8xl font-medium leading-tight my-6'>JUMPSTART<br/> YOUR CAMPAIGN</h1>
          <div className=''>
            <button className='btn-red mx-4'>Read More</button>
            <a className='mx-10 underline underline-offset-4 text-white font-bold hover:text-[var(--primary-blue)] ease-in duration-200 cursor-pointer'>Purchase Now</a>
          </div>
        </div>
        <img className='w-full h-[600px] object-cover' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/62ab22692407fe3c8322cbab_Image%20banner%20(home).jpg" alt="/" />
      </div>
    </div>
  )
}

export default Hero
