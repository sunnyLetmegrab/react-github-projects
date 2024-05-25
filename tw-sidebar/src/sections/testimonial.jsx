import React from 'react'
import { testimonials } from '../constants/app_const'

export default function Testimonials() {
    return (
        <section id='testimonial-section' className='lg:max-w-container-padding mx-auto py-20 px-5'>
            <h2 className='text-center text-4xl font-semibold my-2'> Testimonials</h2>
            <p className='text-center max-w-3xl w-full mx-auto my-2'>See what our customers love about our products. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support.</p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 max-sm:max-w-sm gap-10 mt-10  mx-auto'>
                {testimonials.map((e, index) => (<div key={index} className='testimonial-item '>

                    <p className='row-span-2 text-slate-600 text-[14px] '>{e.content}</p>
                    <div className=' flex gap-5'>
                        <img className='rounded-full size-11' src={e.img} alt={e.img} />
                        <div className='block'>
                            <p className='text-[13px] text-gray-700'>{e.personName}</p>
                            <p className='text-[13px] text-gray-500'>{e.designation}</p>
                        </div>
                        <img className='ml-auto size-16 opacity-[.5]' src={e.componayLogo} alt={e.componayLogo} />
                    </div>
                </div>))}

            </div>
        </section>
    )
}
