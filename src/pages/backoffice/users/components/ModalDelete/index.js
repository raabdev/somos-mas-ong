import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ModalDelete({ isOpen, onClose, handleClickDelete }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            ¿Estás seguro que deseas eliminar el usuario?
          </ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button bg="teal.400" m={1} onClick={onClose}>
              Cancelar
            </Button>

            <Button
              bg="red.400"
              m={1}
              onClick={() => {
                handleClickDelete();
                onClose();
              }}
            >
              Eliminar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
