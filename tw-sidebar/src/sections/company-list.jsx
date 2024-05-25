import React from 'react'

export default function CompanyList() {
  var imagesCompany = [
    { img: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg', alt: 'img1', },
    { img: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg', alt: 'img2', },
    { img: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg', alt: 'img3', },
    { img: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg', alt: 'img4', },
    { img: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg', alt: 'img5', },
    { img: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg', alt: 'img6', },
  ]
  return (
    <>
      <section className='block max-w-3xl mx-auto mt-24  '>
        <p className='text-center'>Trusted by the best companies</p>
      </section>
      <div className='grid  md:grid-cols-6 sm:grid-cols-3 grid-cols-2  justify-center gap-10 sm:mx-20 mb-24'>
        {imagesCompany.map((e, index) => (
          <img className=' sm:min-h-16 opacity-[.5] size-24 self-center mx-auto'
            src={e.img} alt={e.alt} key={e.alt} />
        ))}
      </div>
    </>
  )
}
