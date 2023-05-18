import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { Usuarios } from '../Usuarios'
// import '../App.css'
import Imagenes from '../components/Imagenes'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        //console.log('vamonos al login');
        navigate('/login');
    }

    const handleFactura = () => {
        //console.log('vamonos a facturas');
        navigate('/facturas');
    }

    const handleUsuario = () => {
        //console.log('vamonos a usuario');
        navigate('/usuario');
    }

    const handleList = () => {
        //console.log('vamonos a home');
        navigate('/listaUsuarios');
    }

    const handleCreateUser = () => {
        //console.log('vamonos a home');
        navigate('/reservacion');
    }

    const handleHome = () => {
        //console.log('vamonos a home');
        navigate('/');
    }

    const handleReservacion = () => {
        //console.log('vamonos a home');
        navigate('/reservacion');
    }

    const handleCreateHotel = () => {
        //console.log('vamonos a home');
        navigate('/CreateHotel');
    }

    const handleUpdateHotel = () => {
        //console.log('vamonos a home');
        navigate('/EditHotel');
    }

    const handleDeleteHotel = () => {
        //console.log('vamonos a home');
        navigate('/CreateHotel');
    }
    const handleHotel = () => {
        //console.log('vamonos a home');
        navigate('/mostrarHotel');
    }

    return (
        <>
            <NavContainer >

                <div>
                    <nav className="navbar bg-dark bg-body-tertiary fixed-top " data-bs-theme="dark">
                        <div className="container-fluid" >
                            <form className="d-flex mt-0" role="search">
                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <a className="titulo" href="">Royale Hoteles</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body" >
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-2">
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={handleLogin} >Log In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={handleFactura} >Facturas</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link dropdown-toggle" onClick={handleList} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Usuario</a>
                                            <ul className="dropdown-menu">
                                                {/* <li><a className="dropdown-item" onClick={handleList} >Lista usuarios</a></li>
                                                <li><a className="dropdown-item" onClick={handleCreateUser} >Create</a></li>
                                                <li><a className="dropdown-item" onClick={handleReservacion} >Reservaciones</a></li>
                                                <li><a className="dropdown-item" onClick={handleCreateHotel} >Agregar Hotel</a></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={handleHome}>Home</a>
                                        </li>
                                        <li className="nav-item dropdown" >
                                            <a className="nav-link dropdown-toggle" onClick={handleHotel} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Hoteles
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" onClick={handleReservacion} >Habitaciones</a></li>
                                                <li><a className="dropdown-item" onClick={handleReservacion} >Tipo de Evento</a></li>
                                                <li><a className="dropdown-item" onClick={handleReservacion} >Reservaciones</a></li>
                                                <li><a className="dropdown-item" onClick={handleCreateHotel} >Agregar Hotel</a></li>
                                                <li><a className="dropdown-item" onClick={handleUpdateHotel} >Editar Hotel</a></li>
                                                <li><a className="dropdown-item" onClick={handleDeleteHotel} >Eliminar Hotel</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={handleLogin}>Cerrar Sesión</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </NavContainer>
        </>
    )
}

const NavContainer = styled.nav`
h2 {
    color: white;
    font-weight: 400;
  }
  
  
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
`