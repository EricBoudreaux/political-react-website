import React from 'react'

const Hero = ({ heroImage, heroTitle, heroSubTitle  }) => {


  return (
    <div name='hero' className='max-w-[1440px]'>
      <div className='w-full h-full relative'>
        <div className='absolute w-full top-[28%] text-center mx-auto z-10'>
          <h3 className='text-white text-2xl'>{heroSubTitle}</h3>
          <h1 className='text-white text-5xl md:text-7xl font-medium leading-tight my-6'>{heroTitle}</h1>
        </div>
        <img className='w-full h-[395px] object-cover' src={heroImage} alt="/" />
        <div className='absolute top-0 z-0 w-full h-full bg-black/30'></div>
      </div>
    </div>
  )
}

export default Hero