import { useState } from 'react'

import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import NavBar from './component/navbar'

function App() {
  const [open, setOpen] = useState(true)
  return (
    <div className='flex'>
      <NavBar />
      <div className='p-7'>home-page</div>
    </div>
  )
}

export default App
