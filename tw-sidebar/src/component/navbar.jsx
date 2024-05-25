
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { navigations } from '../constants/app_const';

export default function NavBar({ drawer, onDrawerClick }) {

    return (
        <div className='block fixed w-full top-5 mx-auto px-6'>

            <div className='glass-nav max-w-container-padding  block mx-auto'>
                <div className='flex items-center justify-between'>
                    <h6 className='text-xl text-blue-600 font-sans font-bold'>Sitemark</h6>

                    <ul className='lg:flex hidden pl-2'>
                        {navigations.map((element, index) => (
                            <li key={index}
                                onClick={() => {
                                    scrollToSection(element.viewId);
                                }}
                                className='px-4 hover:rounded-full hover:bg-slate-200 py-1 cursor-pointer text-[16px] text-gray-700'>
                                {element.name}
                            </li>))}
                    </ul>
                    <div className='lg:hidden'>
                        <FontAwesomeIcon icon={faBars}
                            onClick={() => {
                                onDrawerClick(true)
                            }}
                            className='mx-5 hover:bg-slate-200 p-2 rounded-full'
                        />
                    </div>
                    <div className='ml-auto lg:flex hidden items-center'>
                        <FontAwesomeIcon icon={faMoon} className='mr-[5px]' />
                        <button className='text-blue-500 px-4 py-1 text-[14px] mx-[5px]'>Sign in</button>
                        <button className='gradient-btn text-white px-[10px] py-[5px] text-[14px] rounded-xl mx-[5px] text-center'>Sign up</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
