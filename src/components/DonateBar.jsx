import React from 'react'

const DonateBar = () => {
  return (
    <div className='max-w-[1440px] bg-[var(--background-light)] py-12'>
        <div className='w-full h-full flex flex-col lg:flex-row lg:items-center lg:justify-around px-3 relative'>
            <h1 className='text-[var(--primary-blue)] text-3xl font-semibold text-center sm:text-start lg:pt-5 lg:mr-5'>DONATE <span className='text-[var(--primary-red)] font-semibold'>TODAY</span></h1>
            <div className=''>
                <div className='flex pt-6'>
                    <button className='font-["Lato"] border-2 border-white focus:border-2 focus:border-[var(--primary-blue)] font-semibold text-[var(--primary-blue)] bg-white py-3 mr-2 px-5 w-26 rounded-md'><span className='italic'>$</span>25</button>
                    <button className='font-["Lato"] border-2 border-white focus:border-2 focus:border-[var(--primary-blue)] font-semibold text-[var(--primary-blue)] bg-white py-3 mx-2 px-5 w-26 rounded-md'><span className='italic'>$</span>50</button>
                    <button className='font-["Lato"] border-2 border-white focus:border-2 focus:border-[var(--primary-blue)] font-semibold text-[var(--primary-blue)] bg-white py-3 mx-2 px-5 w-26 rounded-md'><span className='italic'>$</span>100</button>
                    <button className='font-["Lato"] border-2 border-white focus:border-2 focus:border-[var(--primary-blue)] font-semibold text-[var(--primary-blue)] bg-white py-3 mx-2 px-5 w-26 rounded-md'><span className='italic'>$</span>200</button>
                    <button className='font-["Lato"] border-2 border-white focus:border-2 focus:border-[var(--primary-blue)] font-semibold text-[var(--primary-blue)] bg-white py-3 ml-2 mr-4 px-5 w-32 rounded-md '><input className='w-full h-full outline-none' type='number' placeholder='More'></input></button>
                    <button className='hidden md:flex btn-blue font-["Lato"]  font-semibold'>Donate Now</button>
                </div>
                <button className='md:hidden btn-blue font-["Lato"] mt-6 px-3 w-full font-semibold'>Donate Now</button>
            </div>

        <div className='hidden lg:block absolute top-[-40px] left-40'>
            <img className='h-40' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/629727c0141168ce9fe293c7_Icon%20copy.png" alt="/" />
        </div>
        </div>
    </div>
  )
}

export default DonateBar
