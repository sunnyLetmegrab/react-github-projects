import React, { useState } from 'react'

export default function StatiticsTabs() {
    const [tab, selectedTab] = useState(0);
    var array = [1, 2, 3, 4, 5, 6, 78, 9, 1, 2, 34]


    return (
        <>
            <div className='relative'>
                <div className=' top-0 left-0 right-0 bg-white sticky z-20  p-4'>
                    <h2 className='text-xl font-bold'  >
                        Statistics this month
                    </h2>
                    <ul className='flex bg-gray-50 border-b-[1px] border-b-gray-200 rounded-tl-xl rounded-tr-xl'>
                        <li className="w-full">
                            <button className={`inline-block w-full p-4 text-center text-sm ${tab == 0 ? 'text-blue-500' : 'text-gray-500'}`} type='none'
                                onClick={() => {
                                    selectedTab(0);
                                }}
                            >
                                Top Products</button>
                        </li>
                        <li> <div className='w-[1px] bg-gray-200'></div></li>
                        <li className='w-full'>
                            <button className={`inline-block w-full p-4 text-center text-sm ${tab == 1 ? 'text-blue-500' : 'text-gray-500'}`} type='none'
                                onClick={() => {
                                    selectedTab(1);
                                }}
                            >
                                Top customers</button>
                        </li>
                    </ul>

                </div>
                <ul>
                    {array.map((e, index) => (
                        <li key={index}>
                            <div className='px-4 flex w-full items-center gap-x-4 py-4 border-b-[1px] border-b-gray-200'>
                                <img className='size-10' src='https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png' />
                                <div className='block'>
                                    <p className='text-base font-semibold'>iPhone 14 Pro</p>
                                    <span>2.5%</span>
                                    <span>vs last month</span>

                                </div>
                                <div className='block ml-auto font-semibold'>$445,467</div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}
