import Imagenes from './Imagenes'
import { Hoteles } from './Hoteles'
// import '../App.css'
import { Somos } from './Somos'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const Estructura = () => {
    return (
        <>

        <Outlet/>
            <div>
                <Navbar/>
            </div>
            <div >
                <img src={Imagenes.img11} className="card-img" />
                <div className="card-img-overlay">
                </div>

            </div>
            <div>
                <br />
                <br />
                <div>
                    <Somos />
                </div>
                <div>
                    <Hoteles />
                    {/* <Usuarios/> */}
                </div>
            </div>
        </>
    )
}
