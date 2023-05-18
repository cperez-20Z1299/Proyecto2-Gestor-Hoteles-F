import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { Navbar } from '../../components/Navbar';
import { apiLogin } from '../api/ApiLogin';

export const Login = () => {

    //manejo de inputs
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleHome = async (event) => {
        event.preventDefault();
        const resultado = await apiLogin(correo, password);
        if (resultado === false) return null;
        navigate('/');
    }
    const handleUser = async (event) => {
        event.preventDefault();
        navigate('/usuario');
    }

    return (
        <>

            <Navbar />
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <br />
                        <br />
                        <input type="email" placeholder="Email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <br />
                        <br />
                        <button onClick={handleHome} >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">

                        <div className="overlay-panel overlay-right">
                            <h1>¡Bienvenido!</h1>
                            <p>Aca puedes registrar tu usuario</p>
                            <button className="ghost" id="signUp" onClick={handleUser}  >Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
