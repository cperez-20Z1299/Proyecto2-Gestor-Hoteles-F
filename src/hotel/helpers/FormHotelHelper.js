import { CreateHotel, UpdateHotel } from "../api/ApiHotel";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string().required("El nombre de hotel es requerido"),
  email: Yup.string()
    .required("El correo electrónico es requerido")
    .email("Debe ser un correo electrónico válido"),

  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (hotel, option) => {
  let resultado;
  switch (option) {
    case 1:
      console.log("hola");
      resultado = await CreateHotel(
        hotel.name,
        hotel.estrellas,
        hotel.lugar
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Hotel creado correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      console.log(hotel._id);
      resultado = await UpdateHotel(
        hotel._id,
        hotel.name,
        hotel.estrellas,
        hotel.lugar,
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Hotel actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
          } else {
          }
        });
      }
      break;
  }
};
