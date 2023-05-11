import React from 'react'

import { BsCalendar,
         BsTrophyFill,
         BsFillPhoneFill      
} from 'react-icons/bs'

const Skills = () => {
  return (
    <div className=''>
        <div className='w-full h-full py-12'>
            <div className='text-center'>
                <h1 className='text-4xl text-[var(--primary-blue)] font-semibold'>OUR ADVANCED <span className='text-[var(--primary-red)]'>SKILLS</span></h1>
                <p className='text-gray-400 mt-5'>Got what it takes to work with us? Great! Send us a link to you</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 mt-12'>

                    <div className='flex flex-col items-center'>
                        <div className='m-10 relative'>
                            <svg className='w-[180px] h-[180px]' >
                                <circle 
                                    className='text-gray-300' strokeWidth='3' stroke='currentColor' fill='transparent' r='85' cx='90' cy='90' />
                                <circle 
                                    className='text-[var(--primary-red)]' strokeWidth='3' strokeLinecap='roun   ' strokeDasharray='200' stroke='currentColor'  fill='transparent' r='85' cx='90' cy='90'/>
                            </svg>
                            <span className='absolute top-16 left-16'><BsCalendar size={50} className='text-[var(--primary-red)]'/></span>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[var(--primary-blue)] font-bold text-2xl'>JUSTICE REFORMS</h1>
                            <p className='text-gray-400 px-6 pt-4'>Arden offers you with fresh and vivid appearance. You website will stand out</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='m-10 relative'>
                            <svg className='w-[180px] h-[180px]' >
                                <circle 
                                    className='text-gray-300' strokeWidth='3' stroke='currentColor' fill='transparent' r='85' cx='90' cy='90' />
                                <circle 
                                    className='text-[var(--primary-red)]' strokeWidth='3' strokeLinecap='round' strokeDasharray='550' stroke='currentColor'  fill='transparent' r='85' cx='90' cy='90'/>
                            </svg>
                            <span className='absolute top-16 left-16'><BsTrophyFill size={50} className='text-[var(--primary-red)]'/></span>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[var(--primary-blue)] font-bold text-2xl'>POLITICAL EXPERIENCE</h1>
                            <p className='text-gray-400 px-6 pt-4'>Arden offers you with fresh and vivid appearance. You website will stand out</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center col-span-2 md:col-span-1'>
                        <div className='m-10 relative'>
                            <svg className='w-[180px] h-[180px]' >
                                <circle 
                                    className='text-gray-300' strokeWidth='3' stroke='currentColor' fill='transparent' r='85' cx='90' cy='90' />
                                <circle 
                                    className='text-[var(--primary-red)]' strokeWidth='3' strokeLinecap='round' strokeDasharray='200' stroke='currentColor'  fill='transparent' r='85' cx='90' cy='90'/>
                            </svg>
                            <span className='absolute top-16 left-16'><BsFillPhoneFill size={50} className='text-[var(--primary-red)]'/></span>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[var(--primary-blue)] font-bold text-2xl'>JOIN VOLUNTEERS</h1>
                            <p className='text-gray-400 px-32 md:px-4 pt-4'>Arden offers you with fresh and vivid appearance. You website will stand out</p>
                        </div>
                    </div>

                    


                </div>


            </div>
        </div>

  )
}

export default Skills
