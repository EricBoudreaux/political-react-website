import React from 'react'

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[var(--background-dark)] px-14 py-12'>
        <div className='w-full h-full'>
            <div className='grid grid-cols-2 lg:grid-cols-4'>

                {/* info */}
                <div className='col-span-2 lg:col-span-1 p-4'>
                    <h1 className='text-white text-2xl pb-4 uppercase'>information</h1>
                    <p className='text-gray-400 py-4'>Grand Conference Hall - 881 7th Ave New York, NY</p>
                    <p className='text-gray-400 py-4'>+1805 73 78 00</p>
                    <p className='text-gray-400 py-4 hover:text-[var(--primary-red)] cursor-pointer'>info@politician128.com</p>
                    <div className='flex py-6'>
                        <div className='w-10 h-10 mr-2 rounded-full border border-gray-400 text-gray-200 flex justify-center items-center hover:bg-white hover:text-[var(--primary-red)] ease-linear duration-200 cursor-pointer'>
                            <FaFacebookF />
                        </div>
                        <div className='w-10 h-10 mx-2 rounded-full border border-gray-400 text-gray-200 flex justify-center items-center hover:bg-white hover:text-[var(--primary-red)] ease-linear duration-200 cursor-pointer'>
                            <FaTwitter />
                        </div>
                        <div className='w-10 h-10 mx-2 rounded-full border border-gray-400 text-gray-200 flex justify-center items-center hover:bg-white hover:text-[var(--primary-red)] ease-linear duration-200 cursor-pointer'>
                            <FaInstagram />
                        </div>
                        <div className='w-10 h-10 mx-2 rounded-full border border-gray-400 text-gray-200 flex justify-center items-center hover:bg-white hover:text-[var(--primary-red)] ease-linear duration-200 cursor-pointer'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='p-4'>   
                    <h1 className='text-white text-2xl pb-6 uppercase'>quick links</h1>
                    <p className='text-gray-400 py-2 hover:text-white ease-in duration-200 cursor-pointer'>Home</p>
                    <p className='text-gray-400 py-2 hover:text-white ease-in duration-200 cursor-pointer'>Pages</p>
                    <p className='text-gray-400 py-2 hover:text-white ease-in duration-200 cursor-pointer'>About Us</p>
                    <p className='text-gray-400 py-2 hover:text-white ease-in duration-200 cursor-pointer'>Our Agenda</p>
                    <p className='text-gray-400 py-2 hover:text-white ease-in duration-200 cursor-pointer'>Shop</p>
                    <p className='text-gray-400 py-2 hover:text-white ease-in duration-200 cursor-pointer'>Blog</p>
                </div>
                {/* Twitter */}
                <div className='p-4'>   
                    <h1 className='text-white text-2xl pb-6 uppercase'>twitter</h1>
                    <div className='flex'>
                        <FaTwitter size={40} className='text-white mr-2 mt-[-9px]'/>
                        <div>
                            <p className='text-gray-400 pb-2'>Start creating with Kreate - Expert Themplate for Creative Business</p>
                            <p className='text-white py-2 hover:text-[var(--primary-red)] ease-in duration-200 cursor-pointer'>https://twitter.com</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FaTwitter size={40} className='text-white mr-2 mt-[-9px]'/>
                        <div>
                            <p className='text-gray-400 pb-2'>Need a blog? Tomas & Daisy - A Stylish Blog for Him and Here:</p>
                            <p className='text-white py-2 hover:text-[var(--primary-red)] ease-in duration-200 cursor-pointer'>https://twitter.com</p>
                        </div>
                    </div>
                </div>
                {/* Contact */}
                <div className='col-span-2 lg:col-span-1 p-4 '>
                <h1 className='text-white text-2xl pb-4 uppercase'>contact</h1>
                
                <input className='w-full lg:w-[80%] rounded-md my-2 bg-[#333333] outline-none py-2 pl-4 text-white font-["Lato"]' placeholder='Your Name' type="name" />
                <textarea className='w-full lg:w-[80%] rounded-md my-2 bg-[#333333] outline-none py-2 pl-4 text-white font-["Lato"]' placeholder='Your Message' rows={5}/>
                <button className='btn-blue'>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
