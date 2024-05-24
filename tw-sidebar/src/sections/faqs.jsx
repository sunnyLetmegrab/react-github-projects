import React, { useState } from 'react'
import { faqList } from '../constants/app_const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'

export default function Faqs() {
    const [selectedFaq, setfaq] = useState(null)

    function onClick(index) {
        setfaq(faqList[index]);
    }

    return (
        <section id="faq-section" className='lg:max-w-container-padding mx-auto block py-20'>
            <h2 className='font-semibold text-4xl text-center'>Frequently asked questions</h2>
            <div className='border border-gray-300 rounded-xl block my-10'>
                {faqList.map((e, index) => (
                    <>
                        <div className='flex p-3 items-center hover:bg-gray-100 rounded-xl mx-3 my-3'
                            onClick={() => {
                                onClick(index)
                            }}
                        >
                            <h3 className='text-black text-base font-semibold'>{e.question}</h3>
                            <FontAwesomeIcon icon={faChevronDown} className='ml-auto' />
                        </div>
                        <div className={`min-h-0 ${e == selectedFaq ? 'h-16' : 'h-0'} transition-[max_height] duration-300 overflow-hidden mx-3 mb-3 px-3 text-gray-700 text-sm max-w-4xl`}>
                            <p>{e.answer}</p>
                        </div>



                        <hr />
                    </>

                ))}
            </div>
        </section>
    )
}
