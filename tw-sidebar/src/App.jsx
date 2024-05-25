import { useState } from 'react'

import './App.css'
import NavBar from './component/navbar'

import './constants/app_const'
import { featureArray, testimonials, highlightList, priceList, navigations } from './constants/app_const'
import TopSection from './sections/top-sections'
import CompanyList from './sections/company-list'
import ProductFeatures from './sections/product-feature'
import Testimonials from './sections/testimonial'
import ProductHighlight from './sections/product-highlight'
import PriceSection from './sections/price-section'
import Faqs from './sections/faqs'
import Footer from './sections/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'


function App() {
  const [drawer, setDrawer] = useState(false);

  function scrollToSection(id) {
    var section = document.getElementById(id)

    section.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }




  return (
    <div>
      <div className={` absolute  block bg-black/30 z-[1000] h-screen ${drawer ? "w-full" : 'w-0'} right-0 duration-200 transition-all ease-in`}
        onClick={() => {
          setDrawer(false)
        }}
      >
        <div className={` ${drawer ? "block" : 'hidden'} max-w-[240px] w-full absolute px-5 py-10  bg-white top-0 right-0  z-[1200] h-screen *:my-4`}>
          <ul>
            <FontAwesomeIcon icon={faMoon} className='ml-auto flex' />
            {navigations.map((element, index) => (
              <li key={index}
                onClick={() => {
                  scrollToSection(element.viewId);
                }}
                className='hover:rounded-full hover:bg-slate-200 py-1 cursor-pointer text-[16px] text-gray-700'>
                {element.name}
              </li>))}
          </ul>
          <hr />
          <button className='text-blue-500 px-4 py-1 text-[14px] mx-[5px] block w-full'>Sign in</button>
          <button className='block w-full gradient-btn text-white px-[10px] py-[5px] text-[14px] rounded-xl mx-[5px] text-center'>Sign up</button>

        </div>
      </div>


      <div className='block bg-my-gradient bg-bg-size bg-no-repeat'>
        <NavBar drawer={drawer} onDrawerClick={(setOpen) => {
          setDrawer(setOpen)
        }} />

        <div className='block max-w-container-padding w-full mx-auto'>

          <TopSection />
          <section className='my-14 lg:max-w-container-padding mx-auto block px-5'>
            <img src='https://mui.com/static/images/templates/templates-images/hero-light.png' alt='image'
              className='bg-white/50 shadow-lg ring-1 ring-blue-50 aspect-[40/30]' />
          </section>

          <CompanyList />
          <ProductFeatures />

        </div>
        <hr />
        <Testimonials />
        <ProductHighlight />
        <PriceSection />
        <hr />
        <Faqs />
        <hr />
        <Footer />
      </div >

    </div>

  )
}

export default App
