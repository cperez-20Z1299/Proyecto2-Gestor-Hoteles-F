import Swal from "sweetalert2";
import axios from "axios";
const URL = `http://localhost:8080/api/`;

export const apiLogin = async (correo, password) => {
    try {
        const response = await axios.post(`${URL}auth/login`, {
            correo,
            password,
        });
        const token = response.data.token;
        // Guardar token en el almacenamiento local
        token ? localStorage.setItem("token", token) : null;

        if (response) {
            Swal.fire({
                icon: "success",
                title: " ! Inicio de sesión completado ! ",
                text: " ¡ Correcto ! ",
                confirmButtonText: "Ok",
            });
        }

        return token;

    } catch ( { response: { data: { msg } } } ) {
        Swal.fire({
            icon: "error",
            title: "Error al iniciar sesión",
            text: `${ msg }`,
        });
        return false;
    }

};