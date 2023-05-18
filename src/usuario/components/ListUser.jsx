import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { listUser } from "../api/ApiUser";

export const ListUser = () => {
    const [users, setUsers] = useState([]);

    const reload = async () => {
        const result = await listUser();
        //console.log(result);
        setUsers(result);
    }

    useEffect(() => {
        reload();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Lista Usuarios</h1>
                <Link to='/crearUsuario'>
                    <button className="btn btn-success ml-50 mt-3" >
                        Agregar 
                    </button>
                </Link>
                <Link to='/crearUsuario'>
                    <button className="btn btn-warning ml-50 mt-3" >
                        Editar
                    </button>
                </Link>
                <Link to='/crearUsuario'>
                    <button className="btn btn-danger ml-50 mt-3" >
                        Eliminar
                    </button>
                </Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Password </th>
                            <th scope="col">Rol </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Walter Reyes </td>
                            <td>wreyes@kinal.edu.gt</td>
                            <td> 12345 </td>
                            <td> User </td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td> Isai Subuyuj </td>
                            <td>Isubuyuj@kinal.edu.gt</td>
                            <td> 12345 </td>
                            <td> User </td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td>Andres Coronado </td>
                            <td>mcoronado@kinal.edu.gt</td>
                            <td> 98765 </td>
                            <td> User </td>
                        </tr>
                        <tr>
                            <td>Carlos Perez </td>
                            <td>cperez@kinal.edu.gt</td>
                            <td> 64825 </td>
                            <td> User </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};