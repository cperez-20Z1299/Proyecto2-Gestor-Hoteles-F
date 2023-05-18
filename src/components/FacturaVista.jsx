import Imagenes from './Imagenes'
import { Navbar } from './Navbar'

export const FacturaVista = () => {
    return (
        <>
        <Navbar/>
          <div className="container" >
              <ul className="list-group list-group-flush">
              <h1 className="title">Factura</h1>
                  <li className="list-group-item">
                    NO de factura:
                    <input className="factura"/>
                    </li>
                  <li className="list-group-item">
                    Usuario:              
                    <input className="factura" type="text" />
                    </li>
                  <li className="list-group-item">
                    Reservacion:
                    <input className="factura" type="text" />
                    </li>
                    <li className="list-group-item">
                    Total:
                    <input className="factura" type="text" />
                    </li>
                   <li className="list-group-item">
                    Fecha :
                    <input className="factura" type="text" />
                    </li> 
                    <br />
                    <button className="boton-factura">Agregar</button>
              </ul>
              <br />
          </div>       
        </>
    )
}
