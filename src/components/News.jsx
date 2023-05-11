import React from 'react'

const News = () => {
  return (
    <div className='bg-[var(--background-light)]'>
        <div className='py-16'>
            <div className='text-center px-8 pb-20'>
                <h1 className='text-5xl text-[var(--primary-blue)] font-semibold uppercase pb-6'>Latest <span className='text-[var(--primary-red)]'>News</span></h1>
                <p className='text-gray-400 text-[16px]'>The Brady Bunch the Brady Bunch that is the way we all go on got a dream</p>
            </div>

            <div className='px-10 md:px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 '>

                {/* 1st card */}
                <div className='bg-white md:hover:mt-[-5px] rounded-md hover:shadow-xl ease-in duration-200'>
                    <img className='rounded-t-md max-h-[280px] xl:h-[240px] object-none w-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629775d2c775ef3c72b4d0c5_michael-schofield-ciyuTvF0rUo-unsplash%20(1).jpg" alt="/" />
                    <div className=''>
                        <div className='px-10'>
                            <div className='flex text-sm pt-3 uppercase'>
                                <p className='text-[var(--primary-red)] font-semibold tracking-wider'>AUG 30, 2022</p>
                                <span className='text-gray-500 px-1 font-light'>|</span>
                                <p className='text-gray-500 tracking-widest  hover:text-[var(--primary-red)]'>political</p>
                            </div>
                            <div className='border-b border-gray-200 py-4 uppercase'>
                                <h1 className='text-[20px] font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer'>HOW CAN WE IMPROVE IMMIGRATION POLICY?</h1>
                            </div>
                            <div className='pt-4 pb-20  '>
                                <p className='text-gray-400 text-[16px] '>The Brady Bunch the Brady Bunch that is the way we all go on got a dream</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd card */}
                <div className='bg-white md:hover:mt-[-5px] rounded-md hover:shadow-xl ease-in duration-200'>
                    <img className='rounded-t-md max-h-[280px] xl:h-[240px] object-none w-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629774e60fbe85303a5dbb13_frank-mckenna-JB92NeJSxW4-unsplash.jpg" alt="/" />
                    <div className=''>
                        <div className='px-10'>
                            <div className='flex text-sm pt-3 uppercase'>
                                <p className='text-[var(--primary-red)] font-semibold tracking-wider'>SEP 20, 2022</p>
                                <span className='text-gray-500 px-1 font-light'>|</span>
                                <p className='text-gray-500 tracking-widest  hover:text-[var(--primary-red)]'>MY PASSION</p>
                            </div>
                            <div className='border-b border-gray-200 py-4 uppercase'>
                                <h1 className='text-[20px] font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer '>we're the people who don't just support progressive change</h1>
                            </div>
                            <div className='pt-4 pb-20  '>
                                <p className='text-gray-400 text-[16px] '>The Brady Bunch the Brady Bunch that is the way we all go on got a dream</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd card */}
                <div className='bg-white md:hover:mt-[-5px] rounded-md hover:shadow-xl ease-in duration-200'>
                    <img className='rounded-t-md max-h-[280px] xl:h-[240px] object-none w-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/629774a1594b2b3cfff57768_steven-abraham-7WYR6LTp-po-unsplash%20(1).jpg" alt="/" />
                    <div className=''>
                        <div className='px-10'>
                            <div className='flex text-sm pt-3 uppercase'>
                                <p className='text-[var(--primary-red)] font-semibold tracking-wider'>SEP 16, 2022</p>
                                <span className='text-gray-500 px-1 font-light'>|</span>
                                <p className='text-gray-500 tracking-widest  hover:text-[var(--primary-red)]'>my passion</p>
                            </div>
                            <div className='border-b border-gray-200 py-4 uppercase'>
                                <h1 className='text-[20px] font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer '>security for the middle class</h1>
                            </div>
                            <div className='pt-4 pb-20  '>
                                <p className='text-gray-400 text-[16px] '>The Brady Bunch the Brady Bunch that is the way we all go on got a dream</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 4th card */}
                <div className='bg-white md:hover:mt-[-5px] rounded-md hover:shadow-xl ease-in duration-200'>
                    <img className='rounded-t-md max-h-[280px] xl:h-[240px] object-none w-full' src="https://assets.website-files.com/62924709f483531978d6a5bc/62977697153e797d02cc0216_joe-yates-or0qhtzLPQw-unsplash%20(1).jpg" alt="/" />
                    <div className=''>
                        <div className='px-10'>
                            <div className='flex text-sm pt-3 uppercase'>
                                <p className='text-[var(--primary-red)] font-semibold tracking-wider'>sep 5, 2022</p>
                                <span className='text-gray-500 px-1 font-light'>|</span>
                                <p className='text-gray-500 tracking-widest  hover:text-[var(--primary-red)]'>my passion</p>
                            </div>
                            <div className='border-b border-gray-200 py-4 uppercase'>
                                <h1 className='text-[20px] font-semibold text-[var(--primary-blue)] hover:text-[var(--primary-red)] cursor-pointer '>politics is why we can't have nice things. like the internet</h1>
                            </div>
                            <div className='pt-4 pb-20  '>
                                <p className='text-gray-400 text-[16px] '>The Brady Bunch the Brady Bunch that is the way we all go on got a dream</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    </div>
  )
}

export default News
