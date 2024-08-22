import React from "react";

/**
 *
 * @param {object} props
 * @param {number} props.total Total de tareas del usuario
 * @param {number} props.complete Cantidad de tareas completadas por el usuario
 * @returns
 */
export default function TodoCounter({ total, complete }) {
  if (total === 0) {
    return (
      <div className="text-center my-4">
        <h2>Actualmente no tienes tareas</h2>
        <p>Parece que no tienes tareas, puedes agregar una tarea nueva</p>
      </div>
    );
  }

  if (total === complete) {
    return(
    <div className="text-center my-4">
      <p>Parece que puedes irte a casa temprano </p>
      <p>Has <b>terminado todas tus tareas</b></p>
      </div>
    )
  }

  return (
    <div className="text-center my-4">
      <h2>
        Has completado <b>{complete}</b> de {total} tareas.
      </h2>
    </div>
  );
}
