import React, { useState, useEffect } from 'react'
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

const FixedNavbar = () => {

const [nav, setNav] = useState(false)
const [fixedBar, setFixedBar] = useState(false)

const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)

}

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
}, []);


    
  return (

    <div className={scrollPosition < 350  ? 'z-50 w-full fixed right-0 top-[-20%] ease-in duration-300' : 'z-50 w-full fixed right-0 top-0 ease-in duration-300'}>
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
                            <li className='mx-4 xl:mx-6 py-5'>
                                <Link to='/'>Home</Link>
                                </li>
                            <li className='mx-4 xl:mx-6 py-5'>
                                Pages
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
                                <li className='m-5 text-2xl'>
                                    Pages
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


    </div>
  )
}

export default FixedNavbar
