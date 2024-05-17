import React from 'react'
import { FaChevronDown } from 'react-icons/fa';

export default function SideBar() {

    var items = [
        { id: 1, title: 'Dashboard', children: [] },
        { id: 2, title: 'Layout', children: [{ title: 'stacked', id: 1 }, { title: 'stacked', id: 2 }] },
        { id: 3, title: 'CRUD', children: [{ title: 'title', id: 2 }] },
        { id: 4, title: 'Settings', children: [{ title: 'title', id: 2 }] },
        { id: 5, title: 'Pages', children: [{ title: 'title', id: 2 }] },
        { id: 6, title: 'Authenticted', children: [{ title: 'title', id: 2 }] },
        { id: 7, title: 'title', children: [{ title: 'title', id: 2 }] },
    ];

    return (

        <div className='pt-16 fixed top-0 left-0 z-20 w-60 border-[1px] border-gray-200 h-full bg-white overflow-auto'>
            {items.map((e) => (
                <div key={e.id} className='block px-4 py-6'>
                    <div className='flex items-center justify-between'>
                        <p className='block'>{e.title}</p>
                        {(e.children.length>0) && <FaChevronDown className='block ml-auto' />}
                    </div>

                </div>))}
        </div>

    )
}
