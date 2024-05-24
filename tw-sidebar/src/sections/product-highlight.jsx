import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { highlightList } from '../constants/app_const'

export default function ProductHighlight() {
    return (
        <section id='highlight-section' className='bg-[#121212] py-20'>
            <div className='lg:max-w-container-padding mx-auto block'>
                <h5 className='text-white font-semibold text-4xl text-center my-2'>Highlights</h5>
                <p className='max-w-3xl mx-auto text-center text-gray-500 my-2'>Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail.</p>
                <div className='grid grid-cols-3 gap-5 my-10 '>
                    {highlightList.map((e) => (<div key={e.title}
                        className='block backdrop-opacity-95 backdrop-filter backdrop-blur-xl bg-opacity-[.04] bg-[#ffffff04] p-5 rounded-lg ring-1 ring-gray-800'>
                        <FontAwesomeIcon icon={e.icon} color='#FFFFFF9C'></FontAwesomeIcon>
                        <p className='text-white my-3'>{e.title}</p>
                        <p className='text-white/50'>{e.subtitle}</p>
                    </div>))}
                </div>
            </div>
        </section>
    )
}
