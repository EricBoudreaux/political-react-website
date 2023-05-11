import React from 'react'


const Mission = () => {
  return (
    <div className='relative'>
        <div className=' flex justify-between md:bg-transparent py-16'>
            <div className='px-4 text-center md:flex justify-center items-center lg:mx-auto z-40'>
                <div className='md:px-24'>
                <div className='lg:flex'>
                    <img className='pb-16 max-w-[740px] md:max-w-[640px] w-full lg:w-[50%] md:rounded-md' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/629770ac764fd14991aa538e_Banner%20Mission%26Vision.jpg" alt="/" />
                    
                    <div className='px-4 lg:px-8 md:h-[300px] lg:w-[540px] md:ml-[-40px]  lg:py-16 md:rounded-md'>
                        <h1 className='text-4xl text-[var(--primary-blue)] font-semibold'>MISSION & <span className='text-[var(--primary-red)]'>VISION</span></h1>
 
                        <p className='text-gray-400 text-start pt-6 px-6 ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, impedit animi. Vitae, labore reiciendis ex corrupti minima dolore fugiat, nulla debitis a nostrum libero laudantium numquam non veritatis ad iusto magni repudiandae consequatur optio iure impedit laborum. Reiciendis qui cum, sequi iusto obcaecati veritatis libero expedita sed repellat quas ex!</p>
                        <p className='text-gray-400 text-start pt-6 px-6 ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, impedit animi. Vitae, labore reiciendis ex corrupti minima dolore fugiat, nulla debitis a nostrum libero laudantium numquam non veritatis ad iusto magni repudiandae consequatur optio iure impedit laborum. Reiciendis qui cum, sequi iusto obcaecati veritatis libero expedita sed repellat quas ex!</p>

                    </div>
                </div>
                <div className='lg:flex lg:mt-[-20px] xl:mt-[-120px]'>
                    <h3 className='text-2xl text-gray-400 text-center md:my-12 py-12 px-6'>“Organizing for Action: We’re the people who don’t just support progressive change we are fighting for it.”</h3>
                    <img className='max-w-[740px] lg:max-h-[450px] w-full object-contain rounded-md' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/629db5db938411c530e2000f_kyle-glenn-TELAb4duebI-unsplash.jpg" alt="/" />
                </div>
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
