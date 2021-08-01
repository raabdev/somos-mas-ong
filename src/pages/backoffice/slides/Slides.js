import React, { useState, useEffect } from "react";
import slidesMockData from "../../../utils/slidesMockData";
import slidesService from "../../../services/slidesService/slidesService";
import SlidesList from "./components/SlidesList";
import SlidesAdd from "./components/SlidesAdd";
import Swal from "sweetalert2";

export function Slides() {
  //TODO: Check if user isAdmin (pending authentication)
  const isAdminMock = true;

  // eslint-disable-next-line
  const [slides, setSlides] = useState(slidesMockData);

  const [editing, setEditing] = useState(false);

  const handleDelete = id => {
    Swal.fire({
      title: "¿Borrar Slide?",
      text:
        "¿Confirma que desea borrar esta slide? Recuerde que el borrado es irreversible",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SÍ, BORRAR",
    })
      .then(result => {
        if (result.isConfirmed) {
          console.log("Mock delete slide id: " + id);
          // fetch("APIURL" + id, {
          //   method: "DELETE",
          // })
          // .then(res => res.json())
          // .then(res => console.log(res))
          // .catch(error => console.log("Error al borrar", error));
        }
      })
      .catch(error => console.log(error));
  };

  const [slideToEdit, setSlideToEdit] = useState();

  const handleEdit = slide => {
    setEditing(true);
    setSlideToEdit(slide);
  };

  useEffect(()=> {
  slidesService
      .getAll()
      .then(res => console.log(res))
      .catch(error => console.log(error));
  },[]);

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <>
      {isAdminMock &&
        (!editing ? (
          <SlidesList
            slides={slides}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ) : (
          <SlidesAdd
            slideToEdit={slideToEdit}
            handleCancelEdit={handleCancelEdit}
          />
        ))}
    </>
  );
}

export default Slides;
