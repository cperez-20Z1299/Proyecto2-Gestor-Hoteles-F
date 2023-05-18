import React from "react";
import { Modal } from "react-bootstrap";
import { FormHotel } from "./FormHotel";
export const UpdateHotel = ({ isOpen, onClose, userEdit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {userEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormHotel
              userProp={userEdit}
              titleButton="Actualizar"
              option={2}
            ></FormHotel>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};
