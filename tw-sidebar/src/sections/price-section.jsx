import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { priceList } from '../constants/app_const'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function PriceSection() {
    return (
        <section id='price-section' className='py-20 lg:max-w-container-padding max-w-xl mx-auto block'>
            <div className='block mx-auto'>
                <p className='text-center font-semibold text-4xl'>Pricing</p>
            </div>
            <div className='grid lg:grid-cols-3 my-20 gap-x-10 gap-y-5  max-lg:max-w-sm mx-auto'>
                {priceList.map((e, index) => (
                    <div key={index} className={`border block border-gray-300 gradient-bg rounded-xl bg-gray-50 px-8 pt-4 pb-8 ${index !== 1 && 'lg:my-10'}`}>
                        <p className='my-4 text-xl font-semibold'>{e.planName}</p>
                        <span className='text-4xl font-semibold my-3'>{e.price}</span>
                        <span className='font-semibold'> per month</span>
                        <hr className='mt-5 ' />
                        <div className='block my-10'>
                            {e.features.map((item, j) => (
                                <div key={j} className='flex gap-x-5 items-center my-5'>
                                    <FontAwesomeIcon icon={faCheckCircle} color={`${index == 1 && "#FFFFFF"}`} />
                                    <p className={`${index == 1 ? "text-white/90 " : "text-black"} font-semibold text-[16px]`}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            className={`${index == 1 ? "gradient-btn border-none text-white" : "bg-blue-50 border-blue-400 text-blue-500"}   w-full p-2 rounded-lg border `}>{e.buttonTxt}</button>
                    </div>
                ))}


            </div>
        </section>
    )
}
