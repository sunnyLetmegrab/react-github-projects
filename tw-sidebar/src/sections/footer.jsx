import React from 'react'
import { footerOptions } from '../constants/app_const'
import UnderLineText from '../component/underline_text'

export default function Footer() {
    return (
        <section className='lg:max-w-container-padding mx-auto my-20 px-10'>
            <div className='grid sm:grid-cols-12 max-sm:mx-auto gap-10'>
                <div className='sm:col-span-7  mx-auto '>

                    <section className='block '>
                        <h3 className='text-xl my-[4px] text-blue-500 font-semibold'>Sitemark</h3>
                        <p className='text-black text-[1rem] my-[4px] font-semibold'>Newsletter</p>
                        <p className='text-gray-500 text-[1rem] my-[4px]'>Subscribe to our newsletter for weekly updates and promotions.</p>
                        <div className='flex lg:flex-row flex-col gap-3 my-4'>
                            <input className='input-field'
                                placeholder='Please enter your email'
                            ></input>
                            <button className='gradient-btn px-3 py-2 text-white font-semibold rounded-lg border border-[#2b2b2b] text-[13px]'>Subscribe</button>
                        </div>

                    </section>


                </div>
                <div className='sm:col-span-5 lg:ml-auto mx-auto'>
                    <div className='grid grid-cols-3 gap-x-20 '>
                        {footerOptions.map((e, index) => (
                            <div key={index}>
                                <h4 className='font-semibold text-gray-900'>{e.title}</h4>
                                <ul>
                                    {e.features.map((item, j) => (
                                        <li className='my-2'>
                                            <UnderLineText content={item} key={j} css='text-gray-500 font-semibold cursor-pointer text-[15px]' />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <hr className='my-14'></hr>
            <div className='flex my-10'>
                <div className='block'>
                    <div className='flex space-x-2'>
                        <UnderLineText content='Privacy policy' css='text-gray-700 text-md font-semibold' />

                        <div>|</div>
                        <UnderLineText content='Term of service' css='text-gray-700 text-md font-semibold' />

                    </div>
                    <span className=''>Copyright © Sitemark 2024</span>
                </div>

            </div>
        </section >
    )
}
