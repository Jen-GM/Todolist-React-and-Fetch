import React, { useState } from "react";
import "../../styles/Administrartareas.css";

function AdministrarTareas({ tipoTarea, borrarFuncion, indice }) {
  const [cerrar, setCerrar] = useState("");

  return (
    <div className="container-tarea">
      <div className="contenedor-tarea d-flex justify-content-between pb-1">
        <span className="text-dark">{tipoTarea}</span>
        <div className={cerrar === "container-boton-hide" ? "container-boton-show" : "container-boton-hide"}
        onMouseOver={() => {setCerrar("container-boton-show")}}
        >
          <button
            type="button"
            className="btn-close btn-close-dark"
            aria-label="Close"
            onClick={() => {
              borrarFuncion(indice);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default AdministrarTareas;
