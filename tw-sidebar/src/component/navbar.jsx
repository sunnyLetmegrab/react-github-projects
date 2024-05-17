import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <div className='relative'>
            <div className='flex py-8 px-3'>
                <FontAwesomeIcon icon={faBars} size='xl' onClick={() => setOpen(true)} />
            </div>
            <div className={`${open ? "left-0" : "-left-full"}  top-0  h-screen w-full bg-black/10 duration-300 transition-all`} onClick={() => {
                setOpen(false)
            }} />
            <div className={`${open ? "left-0" : "-left-full"} top-0  px-8 py-10 h-screen bg-white duration-300 transition-all`}>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>products</li>
                    <li>contact us</li>
                </ul>
            </div>

        </div>

    )
}
