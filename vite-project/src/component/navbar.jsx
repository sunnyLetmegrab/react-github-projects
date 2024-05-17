import React from 'react'
import { FaBell, FaSearch, FaThLarge } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa6'

export default function NavBar() {
    return (
        <div className='fixed w-full z-30 bg-white'>
            <div className='flex p-3 w-full items-center justify-between'>
                <div className='flex'>
                    <div className='flex items-center gap-x-4 min-w-56'>

                        <img src='https://flowbite-admin-dashboard.vercel.app/images/logo.svg' alt='' />
                        <h1 className='text-2xl font-semibold'>Flowbite</h1>
                    </div>
                    <div className='flex items-center h-10 border border-[#dfdfdf] px-3 rounded-lg hover:border-[blue] bg-[#f1f1f1]'>
                        <FaSearch color='#a4a4a4' />
                        <input placeholder='search' type='email' className='mx-4 bg-transparent' />
                    </div>
                </div>

                <div className='flex gap-x-5 items-center'>
                    <FaBell className='icon-base' />
                    <FaThLarge className='icon-base' />
                    <FaMoon className='icon-base' />
                    <img className='size-10 rounded-full border-3' src='https://flowbite.com/docs/images/people/profile-picture-5.jpg' alt='profile' />
                </div>
            </div>
            <hr className='bg-[#dfdfdf] w-full h-[1px]' />
        </div>

    )
}
