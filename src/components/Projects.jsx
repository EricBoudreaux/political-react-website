import React, { useState } from 'react'

import {
    AiOutlinePlus,
} from 'react-icons/ai'



const Projects = () => {

    const [filter, setFilter] = useState('all')

    var projects = [
        { category: "public" , 
          title: "Annual Democracy Forum", 
          image: "https://assets.website-files.com/62924709f483531978d6a5bc/629f696b04a9803c102416f2_robert-zunikoff-c8eztMPVzwE-unsplash.jpg" },
        { category: "public" , 
          title: "Organizing for action", 
          image: "https://assets.website-files.com/62924709f483531978d6a5bc/629f67d6c7780af48c681ba6_image%2004.jpg" },
        { category: "political" , 
          title: "Election day is coming", 
          image: "https://assets.website-files.com/62924709f483531978d6a5bc/629f6786c9003e3ca613a810_image%2003.jpg" },
        { category: "senate" , 
          title: "Brainstorming session", 
          image: "https://assets.website-files.com/62924709f483531978d6a5bc/629e02276b6051f87555a575_event%2004.jpg" },
        { category: "political" , 
          title: "More Ideas", 
          image: "https://assets.website-files.com/62924709f483531978d6a5bc/629f62fee4d9b3a21382641c_image%2001.jpg" },
        { category: "events" , 
          title: "Run USA", 
          image: "https://assets.website-files.com/62924709f483531978d6a5bc/629f66261ce6ddacdabd25c4_image%2002.jpg" }
    
    ];

  return (
    <div className=''>
        <div className='w-full h-full px-5 py-12'>
            <div className='flex justify-between lg:px-24'>
                <div className=''>
                    <p onClick={() => setFilter('all')} className='hover:text-[var(--primary-blue)] ease-in duration-200 cursor-pointer font-bold'>All Projects</p>
                </div>
                <div className='flex'>
                    <p onClick={() => setFilter('public')} className='hover:text-[var(--primary-blue)] ease-in duration-200 cursor-pointer mx-3 font-bold'>Public</p>
                    <p onClick={() => setFilter('political')} className='hover:text-[var(--primary-blue)] ease-in duration-200 cursor-pointer mx-3 font-bold'>Political</p>
                    <p onClick={() => setFilter('senate')} className='hover:text-[var(--primary-blue)] ease-in duration-200 cursor-pointer mx-3 font-bold'>Senate</p>
                    <p onClick={() => setFilter('events')} className='hover:text-[var(--primary-blue)] ease-in duration-200 cursor-pointer mx-3 font-bold'>Events</p>
                </div>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 lg:px-24'>





                {/* Card 1 */}
                <div className='relative group shadow-xl'>
                    <img className='w-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629f696b04a9803c102416f2_robert-zunikoff-c8eztMPVzwE-unsplash.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[48%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[40%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute bg-white bottom-[-20px] left-0 w-full z-40 py-4 px-6 opacity-0 group-hover:bottom-0 group-hover:opacity-100 ease-in duration-300'>
                        <h1 className='font-semibold text-2xl text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer'>Annual Democracy Forum</h1>
                        <p className='text-gray-400'>Public</p>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>

                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>

                {/* Card 2 */}
                <div className='relative group shadow-xl'>
                    <img className='w-full h-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629f67d6c7780af48c681ba6_image%2004.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[48%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[40%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute bg-white bottom-[-20px] left-0 w-full z-40 py-4 px-6 opacity-0 group-hover:bottom-0 group-hover:opacity-100 ease-in duration-300'>
                        <h1 className='font-semibold text-2xl text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer'>Organizing for action</h1>
                        <p className='text-gray-400'>Public</p>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>

                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>

                {/* Card 3 */}
                <div className='relative group shadow-xl'>
                    <img className='w-full h-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629f6786c9003e3ca613a810_image%2003.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[48%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[40%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute bg-white bottom-[-20px] left-0 w-full z-40 py-4 px-6 opacity-0 group-hover:bottom-0 group-hover:opacity-100 ease-in duration-300'>
                        <h1 className='font-semibold text-2xl text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer'>Election day is coming</h1>
                        <p className='text-gray-400'>Political</p>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>

                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>

                {/* Card 4 */}
                <div className='relative group shadow-xl'>
                    <img className='w-full h-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629e02276b6051f87555a575_event%2004.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[48%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[40%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute bg-white bottom-[-20px] left-0 w-full z-40 py-4 px-6 opacity-0 group-hover:bottom-0 group-hover:opacity-100 ease-in duration-300'>
                        <h1 className='font-semibold text-2xl text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer'>Brainstorming session</h1>
                        <p className='text-gray-400'>Senate</p>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>

                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>

                {/* Card 5 */}
                <div className='relative group shadow-xl'>
                    <img className='w-full h-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629f62fee4d9b3a21382641c_image%2001.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[48%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[40%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute bg-white bottom-[-20px] left-0 w-full z-40 py-4 px-6 opacity-0 group-hover:bottom-0 group-hover:opacity-100 ease-in duration-300'>
                        <h1 className='font-semibold text-2xl text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer'>More Ideas</h1>
                        <p className='text-gray-400'>Political</p>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>

                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>

                {/* Card 6 */}
                <div className='relative group shadow-xl'>
                    <img className='w-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629f66261ce6ddacdabd25c4_image%2002.jpg" alt="/" />
                    <div className='absolute top-[55%] left-[48%] z-40 opacity-0 group-hover:opacity-100 group-hover:top-[40%] ease-in duration-300'>
                        <AiOutlinePlus size={20} className='text-white hover:text-[var(--primary-red)] cursor-pointer'/>
                    </div>
                    <div className='absolute bg-white bottom-[-20px] left-0 w-full z-40 py-4 px-6 opacity-0 group-hover:bottom-0 group-hover:opacity-100 ease-in duration-300'>
                        <h1 className='font-semibold text-2xl text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer'>Run USA</h1>
                        <p className='text-gray-400'>Events</p>
                    </div>
                    <div className='absolute top-4 left-[-10%] z-40 opacity-0 group-hover:opacity-100 group-hover:left-4 ease-in duration-300'>

                    </div>
                    <div className='w-full h-full absolute top-0 left-0 group-hover:bg-black/30 ease-in duration-200 z-0'></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects
