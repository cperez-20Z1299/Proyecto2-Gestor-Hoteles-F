 import React from "react";
 import { FormHotel } from "../components/FormHotel";
 import { Hotel } from "../models/ModelHotel";
import { Navbar } from "../../components/Navbar";

  export const CreateHotel = () => {
    return (
     <>
        <Navbar/>
        <FormHotel 
        userProp={Hotel}
        titleButton="Crear Hotel"
        option={1}
        />
        
      
     </>
    );
  };
