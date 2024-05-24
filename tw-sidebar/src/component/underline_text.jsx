import React from 'react'

export default function UnderLineText({content, css,margin}) {
    return (
        <>
            <div className='relative'>
                <span className={`underline-animate ${css}`}>{content}</span>
            </div>
        </>
    )
}
