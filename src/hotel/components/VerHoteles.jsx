import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'

export const VerHoteles = () => {
    return (
        <>
            <Navbar/>
            <div className='Container'>

            <div className="container">
                <h1 className='aling'>Hoteles </h1>
                <Link to='/CreateHotel'>
                    <button className="btn btn-success ml-50 mt-3" >
                        Agregar 
                    </button>
                </Link>
                <Link to='/CreateHotel'>
                    <button className="btn btn-warning ml-50 mt-3" >
                        Editar
                    </button>
                </Link>
                <Link to='/CreateHotel'>
                    <button className="btn btn-danger ml-50 mt-3" >
                        Eliminar
                    </button>
                </Link>
                <br />
                <table className="table ">
                    <thead className='table'>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Precio Habitación</th>
                            <th scope="col">Disponbilidad Habitaciones</th>
                            <th scope='col'></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Conquistador Hotel y Conference Center</td>
                            <td>Via 5 4-68, Cdad. de Guatemala 01004</td>
                            <td>Q800.00</td>
                            <td>15</td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td>Hostal Villa Toscana</td>
                            <td>16 Calle 8-20 zona 13 Colonia Aurora 1, 
                                Guatemala Ciudad., 8 Av 15-96</td>
                            <td>Q900.00</td>
                            <td>9</td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td>Holiday Inn Guatemala</td>
                            <td>1 Avenida 13-22, Cdad. de Guatemala</td>
                            <td>Q1,000.00</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Hotel Clarion Suites</td>
                            <td>14 Calle 3-08, Cdad. de Guatemala</td>
                            <td>Q900.00</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
        </>
    )
}