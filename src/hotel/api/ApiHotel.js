import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:3000/api/";

export const listHotel = async () => {
  try {
    const {
      data: { hotel },
    } = await axios.get(`${URL}read-hotel`);
    console.log(hotel);
    return hotel;
  } catch ({ response: { data } }) {
    return data.message;
  }
};

export const CreateHotel = async (nombre, direccion, precioHabitacion, habitacionesDispo) => {
  try {
    const userSave = await axios.post(
      `${URL}create-hotel`,
      {
        nombre: nombre,
        direccion: direccion,
        precioHabitacion, precioHabitacion,
        habitacionesDispo, habitacionesDispo
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

export const UpdateHotel = async (nombre, direccion, precioHabitacion, habitacionesDispo) => {
  try {
    const { data } = await axios.put(
      `${URL}update-hotel/${id}`,
      {
        nombre,
        direccion,
        precioHabitacion,
        habitacionesDispo
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

export const DeleteHotel = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}delete-hotel/${id}`, {
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


