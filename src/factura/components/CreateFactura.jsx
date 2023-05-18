import React from "react";
import { FormFactura } from "./FormFactura";
import { Factura } from "../models/ModelFactura";

export const CreateFactura = () => {
  return (
    <>
      <FormFactura
        userProp={Factura}
        titleButton="Crear Factura"
        option={1}
      ></FormFactura>
    </>
  );
};