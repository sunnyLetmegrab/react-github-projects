import './App.css'
import NavBar from './component/navbar'
import SideBar from './component/sidebar'
import DashboardPage from './pages/dashboard'

function App() {

  return (
    <div className='block'>
      <NavBar />
      <div className="flex pt-16 overflow-hidden bg-gray-100 z-20">
        <SideBar />
        <DashboardPage />
      </div>
    </div>
  )
}

export default App
