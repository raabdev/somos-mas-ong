import React, {useEffect, useState} from "react";
import Loading from "components/Loading/index";
import {showError} from "../../../services/Alert/alerts";
import Home from "components/public/home/index"


const HomeCards = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        showError(
          "Problema de conexión",
          "Problema de conexión con el servidor, no se pudieron recuperar los datos"
        );
      });
  });

  return (
    <div>
            {loading ? (
        <Loading />
      ) : (
          <Home />
      )}
    </div>
  )
}

export default HomeCards
