import React from 'react'
import { Link } from 'react-router-dom'


import { TiArrowRightThick } from 'react-icons/ti'

const Mission = () => {
  return (
    <div className='max-w-[1440px] relative'>
        <div className='flex justify-between bg-[var(--primary-blue)] md:bg-transparent py-16'>
            <div className='px-4 text-center md:flex justify-center items-center lg:mx-auto z-40'>
                <img className='pb-16 max-w-[740px] md:max-w-[640px] w-full md:w-[50%] md:rounded-md' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/629770ac764fd14991aa538e_Banner%20Mission%26Vision.jpg" alt="/" />
                <div className='px-4 md:px-8 md:h-[500px] lg:w-[540px] md:ml-[-40px] md:bg-[var(--primary-blue)] md:py-16 md:rounded-md'>
                    <h1 className='text-4xl text-white font-semibold'>MISSION & <span className='text-[var(--primary-red)]'>VISION</span></h1>
                    <h3 className='text-2xl text-start  pt-12'>“Organizing for Action: We’re the people who don’t just support progressive change we are fighting for it.”</h3>
                    <p className='text-white text-start  pt-6'>Check out the pics from the our latest political conferences, seminars.</p>
                    <Link className='flex items-center  pt-12 text-white group' at='/about'><p className='text-sm font-semibold text-start group-hover:text-[var(--primary-red)] duration-300'>Bio</p><TiArrowRightThick className='ml-2 group-hover:ml-5 ease-in group-hover:text-[var(--primary-red)] duration-300' size={15} /></Link>
                </div>
            </div>
        </div>
        <div className='absolute top-0 left-0  w-full h-full z-0'>
            <div className='flex justify-between'>
                <img className='hidden md:block' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/62973c3b092a67a9cbddfb14_Image%20(2).png" alt="" />
                <img className='hidden md:block' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/62973b2e000df16226499afa_Image%20(1).png" alt="" /> 
            </div>
        </div>
    </div>
  )
}

export default Mission
