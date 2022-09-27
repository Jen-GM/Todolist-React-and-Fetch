import React, { useEffect, useState } from "react";
import AdministrarTareas from "./AdministrarTareas";

//create your first component
const Home = () => {
  let url = "https://assets.breatheco.de/apis/fake/todos/user/Jen-GM";
  const [addTarea, setAddTarea] = useState([]);
  const tareas = {
    label: "",
    done: false,
  };

  //Métodos HTTP: GET, POST, PUT, DELETE.
  const getTareas = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddTarea(data))
      .catch((error) => console.error("Error", error));
  };

  //PUT: Actualizar la lista según se agregue/elimine una tarea
  const putTareas = (toDos) => {
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toDos),
    })
      .then((res) => res.json())
      .then((data) => getTareas());
  };

  useEffect(() => {
    getTareas();
  }, []);

  //Funciones de listar y eliminar tareas.
  function listaTareas(e) {
    if (e.key === "Enter") {
      putTareas([...addTarea, {label:e.target.value, done:false}]);
      e.target.value = "";
    }
  }

  function eliminarTarea(i) {
    console.log(i);
    let newArray = addTarea.filter((element, indice) => indice !== i);
    putTareas(newArray);
  }

  return (
    <div className="contenedor-total">
      <h1 className="text-center mt-5">To Do List</h1>
      <div className="contenedor-tareas">
        <div className="input-group mb-3">
          <ul className="w-100">
            <input
              type="type"
              className="form-control ml-1"
              placeholder="Añadir Tarea"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onKeyDown={listaTareas}
            />
            <div className="nuevaTarea">
              {addTarea.map((element, i) => {
                return (
                  <AdministrarTareas
                    tipoTarea={element}
                    borrarFuncion={eliminarTarea}
                    key={i}
                    indice={i}
                  />
                );
              })}
            </div>
          </ul>
          <div className="footer-container">
            <p className="card-text">
              <small className="text-muted">{`${
                addTarea.length
                  ? addTarea.length + " items left"
                  : "No hay tareas. Añadir una."
              }`}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
