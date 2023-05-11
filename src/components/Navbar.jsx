import React, { useState } from 'react'
import { Link } from 'react-router-dom'
     

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaSearch,
    FaShoppingCart
  } from 'react-icons/fa'

  import {
    CgMenuRight
  } from 'react-icons/cg'

  import {
    MdClose
  } from 'react-icons/md'

  import {
    RxTriangleDown
  } from 'react-icons/rx'

  import { AiOutlineLine } from 'react-icons/ai'

const Navbar = () => {

const [nav, setNav] = useState(false)

    
  return (
    <div className='h-[85px]'>
        <div className='w-full h-full bg-[var(--primary-blue)]'>

            <div className='w-full flex justify-between px-4 lg:px-10 items-center'>

                <div className='text-white hidden xl:flex'>
                    <FaFacebookF size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                    <FaTwitter size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                    <FaInstagram size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                    <FaYoutube size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                </div>
                <div className='flex md:items-center'>
                    <div className='mx-0 lg:mx-8'>
                        {/* Navleft */}
                        <ul className='hidden lg:flex justify-between'>
                            <li className='mx-4 xl:mx-6 py-5 group'>
                                <Link to='/'>Home</Link>
                                </li>
                            <li className='mx-4 xl:mx-6 py-5 flex items-center group relative'>
                                Pages<RxTriangleDown className='ml-1'/>

                                {/* Dropdown */}
                                <div className='h-0 w-72 opacity-0 absolute p-6 top-[70px] left-0 group-hover:h-52 group-hover:opacity-100 ease-in duration-200 text-white bg-[var(--primary-blue)] z-40'>
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <Link to='/'><p className='mb-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Home</p></Link>
                                            <Link to='/about'><p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>About Us</p></Link>
                                            <Link to='/agenda'><p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Agenda</p></Link>
                                            <Link to='/gallery'><p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Gallery</p></Link>
                                            <Link to='/donators'><p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Donators</p></Link>
                                        </div>  
                                        <div>
                                            <Link to='/team'><p className='mb-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Our Team</p></Link>
                                            <Link to='/testimonials'><p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Testimonials</p></Link>
                                            <Link to='/contact'><p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Contact Us</p></Link>
                                            <Link to='/faq'><p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>FAQ</p></Link>
                                        </div>
                                    </div>

                                </div>
                                </li>
                            <li className='mx-4 xl:mx-6 py-5'>
                                <Link to='/about'>About Us</Link>
                                </li>
                        </ul>
                    </div>
                    <div className='lg:mx-8 z-40'>
                        {/* Brand */}
                        <img className='h-24' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/6295f9b688c8504d8fb6f525_Politician%20%20V-3%201%20(1).png" alt="/" />
                    </div>
                    <div className='mx-8'>
                        {/* Navright */}
                        <ul className='hidden lg:flex justify-between'>
                            <li className='mx-4 xl:mx-6 py-5'>
                                <Link to='/agenda'>Our Agenda</Link>
                            </li>
                            <li className='mx-4 xl:mx-6 py-5'>
                                <Link to='/blog'>Blog</Link>
                            </li>
                            <li className='mx-4 xl:mx-6 py-5'>
                                <Link to='/shop'>Shop</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center text-white py-5'>
                    {/* Nav far-right(heh) */}
                    <FaSearch  className='hidden lg:block mx-3 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer'/>
                    <FaShoppingCart  className='mx-3 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer'/>
                    <CgMenuRight onClick={() => setNav(!nav)} className='lg:hidden cursor-pointer' size={30}/>
                </div>
                <div className={nav ? 'fixed z-50 left-0 top-0 w-[320px] h-screen bg-[var(--primary-blue)] ease-in duration-200 lg:hidden' : 'fixed z-50 left-[-80%] top-0 w-[320px] h-screen bg-[var(--primary-blue)] ease-in duration-200 lg:hidden'}>
                    <div>
                        <div className='flex justify-between px-4'>
                            <div>
                                <img className='h-20' src="https://assets.website-files.com/62924709f48353c6d6d6a5b9/6295f9b688c8504d8fb6f525_Politician%20%20V-3%201%20(1).png" alt="/" />
                            </div>
                            <div className='text-white py-6 cursor-pointer'>
                                <MdClose onClick={() => setNav(!nav)} size={35}/>
                            </div>
                        </div>
                        <div className='pt-12'>
                            <ul className='flex flex-col items-start'>
                                <li className='m-5 text-2xl'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='m-5 text-2xl xl:mx-6 py-5 flex items-center group relative'>
                                Pages<RxTriangleDown className='ml-1'/>
                                
                                {/* Dropdown */}
                                <div className='h-0 w-72 opacity-0 absolute p-6 top-[70px] left-0 group-hover:h-52 group-hover:opacity-100 ease-in duration-200 text-white bg-[var(--primary-blue)] z-40'>
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <p className='mb-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Home</p>
                                            <p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>About Us</p>
                                            <p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Agenda</p>
                                            <p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Gallery</p>
                                            <p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Donators</p>
                                        </div>  
                                        <div>
                                            <p className='mb-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Our Team</p>
                                            <p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Testimonials</p>
                                            <p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>Contact Us</p>
                                            <p className='my-2 block hover:text-[var(--primary-red)] ease-in duration-300'>FAQ</p>
                                        </div>
                                    </div>

                                </div>
                                </li>
                                <li className='m-5 text-2xl'>
                                    <Link to='/about'>About Us</Link>
                                </li>
                                <li className='m-5 text-2xl'>
                                    <Link to='/agenda'>Our Agenda</Link>
                                </li>
                                <li className='m-5 text-2xl'>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li className='m-5 text-2xl'>
                                    <Link to='/shop'>Shop</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white flex ml-3 pt-12'>
                            <FaFacebookF size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                            <FaTwitter size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                            <FaInstagram size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                            <FaYoutube size={15} className='mx-2 hover:text-[var(--primary-red)] ease-in duration-300 cursor-pointer' />
                        </div>
                    </div>



                </div>




            </div>
        </div>
    </div>
  )
}

export default Navbar
