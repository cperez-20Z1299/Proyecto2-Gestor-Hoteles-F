import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../helpers/FormFacturaHelper";

export const FormFactura = ({ facturaProp, titleButton, option }) => {
  const [factura, setUser] = useState(userProp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    setFactura({ ...factura, type: "" });
  }, []);

  const crud = async () => {
    await sendData(factura, option);
  };
  return (
    <form onSubmit={handleSubmit(crud)}>
      <div className="form-group">
        <label className="text-black">Nombre de factura</label>
        <input
          {...register("facturaname")}
          type="text"
          className="form-control"
          value={factura.facturaname}
          onChange={({ target: { value } }) =>
            setFactura(() => ({ ...factura, facturaname: value }))
          }
        />
        {errors.eventname && (
          <span className="text-danger">{errors.eventname.message}</span>
        )}
      </div>
      <div className="form-group">
        <label className="text-black">Tipo de Factura</label>
        <input
          {...register("type")}
          type="text"
          className="form-control"
          value={factura.type}
          onChange={({ target: { value } }) =>
            setFactura(() => ({ ...factura, type: value }))
          }
        />
        {errors.type && (
          <span className="text-danger">{errors.type.message}</span>
        )}
      </div>
      <button type="submit" className="btn btn-success">
        {titleButton}
      </button>
    </form>
  );
};