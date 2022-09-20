import React, { useEffect, useState } from "react";
import AdministrarTareas from "./AdministrarTareas";

//create your first component
const Home = () => {
  let url = "https://assets.breatheco.de/apis/fake/todos/user/Jen-GM";
  const [addTarea, setAddTarea] = useState([]);

  //Métodos HTTP: GET, POST, PUT, DELETE.
  const getTareas = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error", error));
  };

  const postTareas = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([]),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  };

  const putTareas = (array) => {
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        { label: "Make the bed", done: false },
        { label: "Walk the dog", done: false },
        { label: "Do the replits", done: false },
      ]),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const deleteTareas = () => {
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([
        { label: "Make the bed", done: false },
        { label: "Walk the dog", done: false },
        { label: "Do the replits", done: false },
      ]),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  /*  useEffect(() => {
    putTareas();
    getTareas();
  }, []); */

  console.log(addTarea); //***Revisar la tarea añadida***
  postTareas();

  //Funciones de listar y eliminar tareas.
  function listaTareas(e) {
    if (e.key === "Enter") {
      setAddTarea([...addTarea, e.target.value]);
      e.target.value = "";
    }
  }

  function eliminarTarea(i) {
    console.log(i);
    let newArray = addTarea.filter((element, indice) => indice !== i);
    setAddTarea(newArray);
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
            <button
              onClick={(e) => {
                setAddTarea([]), deleteTareas();
              }}
            >
              Borrar todas las tareas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
