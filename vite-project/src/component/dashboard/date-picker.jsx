import React from 'react'
import { FaCalendar } from 'react-icons/fa6'

export default function DatePicker() {
    return (
        <div className='flex h-10 bg-gray-50 px-4 py-2 gap-2 items-center border border-gray-300 rounded-lg'>
            <FaCalendar/>
            <input placeholder='Form date' className='w-20 h-10 bg-transparent outline-none' />
        </div>
    )
}
