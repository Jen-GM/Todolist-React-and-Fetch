import React, { useState } from "react";
import "../../styles/Administrartareas.css";

function AdministrarTareas({ tipoTarea, borrarFuncion, indice }) {
  const [style, setStyle] = useState("notdisplayed");

  return (
    <div className="container-tarea">
      <div
        className="contenedor-tarea d-flex justify-content-between pb-1"
        onMouseEnter={(e) => {
          setStyle("btn-close btn-close-dark");
        }}
        onMouseLeave={(e) => {
          setStyle("notdisplayed");
        }}
      >
        <span className="text-dark">{tipoTarea}</span>
        <div
          type="button"
          className={style}
          aria-label="Close"
          onClick={() => {
            borrarFuncion(indice);
          }}
        ></div>
      </div>
    </div>
  );
}

export default AdministrarTareas;
