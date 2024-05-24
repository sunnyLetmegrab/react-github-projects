import { useState } from 'react'

import './App.css'
import NavBar from './component/navbar'

import './constants/app_const'
import { featureArray, testimonials, highlightList, priceList } from './constants/app_const'
import TopSection from './sections/top-sections'
import CompanyList from './sections/company-list'
import ProductFeatures from './sections/product-feature'
import Testimonials from './sections/testimonial'
import ProductHighlight from './sections/product-highlight'
import PriceSection from './sections/price-section'
import Faqs from './sections/faqs'
import Footer from './sections/footer'


function App() {





  return (
    <div className='block bg-my-gradient bg-bg-size bg-no-repeat'>
      {/* <NavBar /> */}

      <div className='block max-w-container-padding w-full mx-auto'>

        <TopSection />
        <section className='my-14 lg:max-w-container-padding mx-auto block px-5'>
          <img src='https://mui.com/static/images/templates/templates-images/hero-light.png' alt='image'
            className='bg-white/50 shadow-lg ring-1 ring-blue-50 aspect-[40/30]' />
        </section>

        <CompanyList />
        <ProductFeatures />

      </div>
      <hr/>
      <Testimonials />
      <ProductHighlight />
      <PriceSection />
      <hr/>
      <Faqs />
      <hr/>
      <Footer />

    </div>

  )
}

export default App
