import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:3000/api/";

export const listFactura = async () => {
    try {
        const {
            data: { factura },
        } = await axios.get(`${URL}read-factura`);
        console.log(factura);
        return factura;
    } catch ({ response: { data } }) {
        return data.message;
    }
};

export const CreateFactura = async (usuario, reservacion, total, fecha) => {
    try {
        const userSave = await axios.post(
            `${URL}create-factura`,
            {
                usuario: usuario,
                reservacion: reservacion,
                total: total,
                fecha: fecha,
            },
            { headers: { "x-token": token } }
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        if (message === "el token ha expirado") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                } else {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }
};

export const UpdateFactura = async (id,) => {
    try {
        const { data } = await axios.put(
            `${URL}update-factura/${id, usuario, reservacion, total, fecha}`,
            {
                usuario,
                reservacion,
                total,
                fecha,
            },
            { headers: { "x-token": token } }
        );
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        console.log(message.password.msg);
        if (message === "el token ha expirado") {
            localStorage.removeItem("token");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/login";
                } else if (result.isDenied) {
                    window.location.href = "/login";
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message.password.msg ? message.password.msg : message,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }
};

export const DeleteFactura = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}delete-factura/${id}`, {
            headers: { "x-token": token },
        });
        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        if (message === "el token ha expirado") {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        if (message) {
            return message;
        }
    }
};
