import React from 'react'

export default function TopSection() {
    return (
        <section id='top-section' className=' max-w-3xl mx-auto text-center lg:px-0 px-5'>
            <div className='h-40'></div>
            <span className='inline lg:text-7xl text-5xl font-semibold'>Our latest </span>
            <span className='inline lg:text-7xl text-5xl font-semibold text-blue-500'>Product</span>
            <p className='block text-center text-gray-400 my-[10px]'>Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services.</p>
            <div className='flex my-8 items-center justify-center lg:flex-row flex-col gap-y-5'>
                <input className='input-field py-[10px]'></input>
                <button className=' gradient-btn text-white px-4 py-[12px] text-[14px] rounded-xl mx-2 font-semibold'>Start now</button>
            </div>
            <div className='flex mx-auto items-center justify-center'>
                <span className='text-sm text-gray-400'>By clicking "Start now" you agree to our </span>
                <span className=' relative bg-red ml-2'>
                    <a className='underline-animate'
                        href='#'>Our term & conditions
                    </a>
                </span>
            </div>



        </section>
    )
}
