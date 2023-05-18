import React from "react";
import { FormUser } from "./FormUser";
import { User } from "../models/ModelUser";
import { Navbar } from "../../components/Navbar";

export const CreateUser = () => {
    return (
        <>
        <Navbar/>
            
            <FormUser
                userProp={User}
                titleButton="Crear Usuario"
                option={1}
            />
        </>
    );
};