import React from 'react'

import { GiHand } from 'react-icons/gi'
import { TiArrowRightThick } from 'react-icons/ti'


const VolunteerBar = () => {
  return (
    <div className='max-w-[1440px] relative'>
        <div className='w-full h-[435px] volunteer-bg bg-bottom bg-fixed bg-no-repeat bg-cover'>
            <div className='flex flex-col py-24 justify-center items-center  text-center text-white '>
            <GiHand className='z-40' size={80} />
                <h3 className='text-white py-4 z-40'>Let's sign up to volunteer</h3>
                <h1 className='text-white uppercase text-4xl py-4 font-semibold z-40'>BECOME A VOLUNTEER</h1>
                <button className='btn-red flex items-center z-40'>Sign Up To Volunteer <TiArrowRightThick  className='ml-3'/></button>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/20 z-0' />
        </div>
    </div>
  )
}

export default VolunteerBar