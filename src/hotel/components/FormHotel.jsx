import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../helpers/FormHotelHelper";
import { Link } from "react-router-dom";

export const FormHotel = ({ userProp, titleButton, option }) => {
  const [hotel, setHotel] = useState(userProp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    setHotel({ ...hotel, type: "" });
  }, []);

  const crud = async () => {
    await sendData(hotel, option);
  };
  return (
    <>

      <div className="container createHotel">
        <div className="row">

          <form onSubmit={handleSubmit(crud)}>
            <div className="form-group">
              <label className="text-black">Nombre de hotel</label>
              <input
                {...register("hotelname")}
                type="text"
                className="form-control"
                value={hotel.hotelname}
                onChange={({ target: { value } }) =>
                  setHotel(() => ({ ...hotel, hotelname: value }))
                }
              />
              {errors.hotelname && (
                <span className="text-danger">{errors.hotelname.message}</span>
              )}
            </div>
            {/* <div className="form-group">
              <label className="text-black">Nombre de Hotel</label>
              <input
                {...register("type")}
                type="text"
                className="form-control"
                value={hotel.type}
                onChange={({ target: { value } }) =>
                  setHotel(() => ({ ...hotel, type: value }))
                }
              />
              {errors.type && (
                <span className="text-danger">{errors.type.message}</span>
              )}
            </div> */}
            <div className="form-group">
              <label className="text-black">Direccion de Hotel</label>
              <input
                {...register("type")}
                type="text"
                className="form-control"
                value={hotel.type}
                onChange={({ target: { value } }) =>
                  setHotel(() => ({ ...hotel, type: value }))
                }
              />
              {errors.type && (
                <span className="text-danger">{errors.type.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="text-black">Precio de habitacion</label>
              <input
                {...register("type")}
                type="text"
                className="form-control"
                value={hotel.type}
                onChange={({ target: { value } }) =>
                  setHotel(() => ({ ...hotel, type: value }))
                }
              />
              {errors.type && (
                <span className="text-danger">{errors.type.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="text-black">Habitaciones disponibles</label>
              <input
                {...register("type")}
                type="text"
                className="form-control"
                value={hotel.type}
                onChange={({ target: { value } }) =>
                  setHotel(() => ({ ...hotel, type: value }))
                }
              />
              {errors.type && (
                <span className="text-danger">{errors.type.message}</span>
              )}
            </div>
            <button type="submit" className="btn btn-success">
              {titleButton}
            </button>
            <Link to='/mostrarHotel'><button type="submit" className="btn btn-success">
              Regresar
            </button></Link>
          </form>

        </div>
      </div>
    </>

  );
};
