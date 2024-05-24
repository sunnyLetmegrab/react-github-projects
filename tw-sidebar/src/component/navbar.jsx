
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [drawer, setDrawer] = useState(false);

    var navigations = [{ id: 1, name: "Feature", viewId: 'feature-section' }
        , { id: 2, name: "testimonial", viewId: 'testimonial-section' }
        , { id: 3, name: "Highlight", viewId: 'highlight-section' }
        , { id: 4, name: "Pricing", viewId: 'price-section' }
        , { id: 1, name: "FAQ", viewId: "faq-section" }]


    function scrollToSection(id) {
        var section = document.getElementById(id)

        section.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    return (

        <div className='block'>
            <div className='w-full z-[4] fixed top-5 flex justify-center '>
                <div className='fixed glass-nav'>
                    <div className='flex w-full items-center justify-between mx-auto'>
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
                                    setDrawer(true)
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
            {/* 
            <div className={` absolute  block bg-black/30 z-[1000] h-screen ${drawer ? "w-full" : 'w-0'} right-0 duration-200 transition-all ease-in`}
            onClick={()=>{
                setDrawer(false)
            }}
            >
                <div className={` ${drawer ? "w-[240px] block " : 'w-0 hidden'} duration-200 transition-all absolute  bg-white top-0 right-0  z-[1200] h-screen *:my-4 pt-10 px-4`}>
                    <ul>
                        <FontAwesomeIcon icon={faMoon} className='ml-auto flex' />
                        {navigations.map((element, index) => (
                            <li key={index}
                                onClick={() => {
                                    scrollToSection(element.viewId);
                                }}
                                className='hover:rounded-full hover:bg-slate-200 py-1 cursor-pointer text-[16px] text-gray-700'>
                                {element.name}
                            </li>))}
                    </ul>
                    <hr />
                    <button className='text-blue-500 px-4 py-1 text-[14px] mx-[5px] block w-full'>Sign in</button>
                    <button className='block w-full gradient-btn text-white px-[10px] py-[5px] text-[14px] rounded-xl mx-[5px] text-center'>Sign up</button>
                </div>
            </div> */}

        </div>



    )
}
