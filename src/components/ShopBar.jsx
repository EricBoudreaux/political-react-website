import React from 'react'

const ShopBar = () => {
  return (
    <div className='bg-white'>
        <div className='py-32'>
            <div className='text-center px-8 pb-20'>
                <h1 className='text-5xl text-[var(--primary-blue)] font-semibold uppercase pb-6'>shop for <span className='text-[var(--primary-red)]'>campaign</span></h1>
                <p className='text-gray-400 text-[16px]'>The Brady Bunch the Brady Bunch that is the way we all go on got a dream</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-32 gap-4'>

                <div className='shadow-lg'>
                    <div className='relative group'>
                        <img src="https://assets.website-files.com/62924709f483531978d6a5bc/62a854cab98976c34689c9ce_AF%20main%20image%20(2).jpg" alt="/" />
                        <div className='btn-blue absolute left-[35%] md:left-[33%] bottom-[45%] opacity-0 group-hover:opacity-100 group-hover:bottom-[50%] ease-in duration-300'>
                            <button className=''>Add To Cart</button>
                        </div>
                    </div>
                    <div className='text-center py-10'>
                        <h1 className='text-[18px] font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-red)] uppercase cursor-pointer'>American Flag</h1>
                        <p className='text-gray-400 text-[14px] '>$20.00 USD</p>
                    </div>
                </div>
                <div className='shadow-lg'>
                    <div className='relative group'>
                        <img src="https://assets.website-files.com/62924709f483531978d6a5bc/62a854e3d0fc83c4a520eeb1_American%20Flags%20and%20Pins%20(2).jpg" alt="/" />
                        <div className='btn-blue absolute left-[35%] md:left-[33%] bottom-[45%] opacity-0 group-hover:opacity-100 group-hover:bottom-[50%] ease-in duration-300'>
                            <button className=''>Add To Cart</button>
                        </div>
                    </div>
                    <div className='text-center py-10'>
                        <h1 className='text-[18px] font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-red)] uppercase cursor-pointer'>american flags and pins</h1>
                        <p className='text-gray-400 text-[14px] '>$20.00 USD</p>
                    </div>
                </div>
                <div className='shadow-lg'>
                    <div className='relative group'>
                        <img src="https://assets.website-files.com/62924709f483531978d6a5bc/62a854cab98976c34689c9ce_AF%20main%20image%20(2).jpg" alt="/" />
                        <div className='btn-blue absolute left-[35%] md:left-[33%] bottom-[45%] opacity-0 group-hover:opacity-100 group-hover:bottom-[50%] ease-in duration-300'>
                            <button className=''>Add To Cart</button>
                        </div>
                    </div>
                    <div className='text-center py-10'>
                        <h1 className='text-[18px] font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-red)] uppercase cursor-pointer'>American Flag</h1>
                        <p className='text-gray-400 text-[14px] '>$20.00 USD</p>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default ShopBar
