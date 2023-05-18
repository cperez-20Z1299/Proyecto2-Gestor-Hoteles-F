import { useState } from 'react'
// import '../src/assets/css/App.css'
import { Navbar } from './components/Navbar'
import { Estructura } from './components/Estructura'
import { Login } from '../src/login/components/Login'
import { logout } from './logout'
import { Usuarios } from './Usuarios'
import { Outlet } from 'react-router-dom';
// import { Usuario} from './Usuario'

function App() {
  

  return (
    <>

      <Outlet/>
      {/* <div className='L1'>
        <div >
          <Navbar />
        </div>
        
        <div><Estructura /></div>
        

      </div> */}
      {/* <div className='L1'>
        
         <div><Login/> </div> 
        <Navbar />
        <div><Hotel/> </div>

      </div> */}
      {/* <div className='L1'>
        
        <div> 
          <logout/>
        </div>
        


      </div> */}
      {/* <div className='L1'>
        
        <div>
          <Usuarios/>
        </div>
        

      </div> */}
      
    </>
  )
}

export default App
