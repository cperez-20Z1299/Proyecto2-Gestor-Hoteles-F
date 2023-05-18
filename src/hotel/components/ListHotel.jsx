import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteHotel, UpdateHotel, listHotel } from "../api/ApiHotel";
import { hotel } from "../models/ModelHotel";
// import { UpdateUser } from "./UpdateUser";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";

export const ListHotel = () => {
    const [hotels, setHotels] = useState([]);
    const [hotel, setHotel] = useState(Hotel);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const reload = async () => {
        const result = await listHotel();
        setHotels(result);
    };

    const handleOpenModal = (u) => {
        setShowModal(true);
        setHotel(u);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const profile = (hotel) => {
        navigate("/profile", { state: { hotel } });
    };

    useEffect(() => {
        reload();
    }, [showModal]);

    const eliminar = async (id) => {
        let result = await DeleteHotel(id);
        if (result) {
            setHotels(hotels.filter((u) => u._id !== id));
            Swal.fire({
                icon: "success",
                title: "Genial!",
                text: "Se eliminó el hotel correctamente!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo eliminar el hotel!",
            });
        }
    };

    return (
        <>
            <h1>Lista de Hoteles</h1>
            <div>
                <table className="table table-hover rounded table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Nombre de Hotel</th>
                            <th>Tipo de Hotel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((u) => {
                            return (
                                <tr key={u._id}>
                                    <td>{u._id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.estrellas}</td>
                                    <td>{u.lugar}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => handleOpenModal(u)}
                                        >
                                            <EditIcon></EditIcon>
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                eliminar(u._id);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </button>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => {
                                                profile(u);
                                            }}
                                        >
                                            <VisibilityIcon></VisibilityIcon>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <UpdateHotel
                    userEdit={hotel}
                    isOpen={showModal}
                    onClose={() => handleCloseModal()}
                ></UpdateHotel>
            </div>
        </>
    );
};
