import React from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

export const ReservacionVista = () => {



    return (
        <>
        <Navbar/>
          <div className="container " >
              <ul className="list-group list-group-flush">
              <h1 className="title">Reservaciones:</h1>
                  <li className="list-group-item">
                    Usuario:              
                    <input className="factura" type="text" />
                    </li>
                    <li className="list-group-item">
                    Hotel :
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
                    <Link to='/verFacturas'><button className="boton-factura">Agregar</button></Link>
                    
              </ul>
              <br />
          </div>       
        </>
    )
}

