import React from 'react'

import { AiOutlinePlus, AiOutlineInstagram } from 'react-icons/ai'

const PictureBar = () => {
  return (
    <div className=''>
        <div className='w-full h-full'>
            <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4'>
                
                <div className='row-span-2 col-span-2 relative group'>
                    {/* Big pic */}
                    <img className='object-fit md:h-[97.6%]' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/629db53f4ba1c5b9fce3328a_Banner%20photo%2001-p-800.jpeg" alt="/" />
                    <div className='absolute top-[55%] left-[50%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[50%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>
                        <AiOutlineInstagram size={30} className='text-white'/>
                        <p className='text-white uppercase font-semibold hover:text-[var(--primary-red)] cursor-pointer'>@statusbrew</p>
                    </div>
                    <div className='w-full md:h-[97.6%] absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>
                <div className='relative group'>
                    {/* Small Pic 1 */}
                    <img src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/62ab3fd35e1666e865639715_home%20gallery%20image.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[50%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[50%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>
                        <AiOutlineInstagram size={30} className='text-white'/>
                        <p className='text-white uppercase font-semibold hover:text-[var(--primary-red)] cursor-pointer'>@statusbrew</p>
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>
                <div className='relative group'>
                    {/* Small Pic 2 */}
                    <img src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/62ab36440783643d9ea5d104_banner%20section%20(pages)-p-800.jpeg" alt="/" />
                    <div className='absolute top-[55%] left-[50%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[50%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>
                        <AiOutlineInstagram size={30} className='text-white'/>
                        <p className='text-white uppercase font-semibold hover:text-[var(--primary-red)] cursor-pointer'>@statusbrew</p>
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>
                <div className='relative group'>
                    {/* Small Pic 3 */}
                    <img src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/62ab24634b6bc8686d8cf57e_Image%2001%20post%20body-p-800.jpeg" alt="/" />
                    <div className='absolute top-[55%] left-[50%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[50%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>
                        <AiOutlineInstagram size={30} className='text-white'/>
                        <p className='text-white uppercase font-semibold hover:text-[var(--primary-red)] cursor-pointer'>@statusbrew</p>
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>
                <div className='relative group'>
                    {/* Small Pic 4 */}
                    <img src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/629db5db938411c530e2000f_kyle-glenn-TELAb4duebI-unsplash.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[50%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[50%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>
                        <AiOutlineInstagram size={30} className='text-white'/>
                        <p className='text-white uppercase font-semibold hover:text-[var(--primary-red)] cursor-pointer'>@statusbrew</p>
                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PictureBar
