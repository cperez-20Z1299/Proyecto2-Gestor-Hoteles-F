import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Link } from 'react-router-dom'

export const ListFactura = () => {


  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Lista de Facturas</h1>
        <Link to='/facturas'>
          <button className="btn btn-success ml-50 mt-3" >
            Agregar
          </button>
        </Link>
        <Link to='/facturas'>
          <button className="btn btn-warning ml-50 mt-3" >
            Editar
          </button>
        </Link>
        <Link to='/facturas'>
          <button className="btn btn-danger ml-50 mt-3" >
            Eliminar
          </button>
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">Reservacion</th>
              <th scope="col">Total </th>
              <th scope="col">Fecha </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Walter Reyes </td>
              <td> Conquistador Hotel y Conference Center</td>
              <td> Q600 </td>
              <td> 18/05/2023 </td>
              <td>  </td>
            </tr>
            <tr>
              <td> Isai Subuyuj </td>
              <td> Hostal Villa Toscana</td>
              <td> Q500 </td>
              <td> 15/05/2023 </td>
              <td>  </td>
            </tr>
            <tr>
              <td>Andres Coronado </td>
              <td>Holiday Inn Guatemala</td>
              <td> Q600 </td>
              <td> 10/05/2023 </td>
            </tr>
            <tr>
              <td>Carlos Perez </td>
              <td>Hotel Clarion Suites</td>
              <td> Q400 </td>
              <td> 12/05/2023 </td>
            </tr>
          </tbody>
        </table>

      </div>

    </>
  );
};