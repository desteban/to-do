import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

export default function TodoCounter() {

  const { todos } = useContext(TodoContext)
  const total = todos.length
  const complete = todos.filter(todo => todo.complete).length

  if (total === 0) {
    return (
      <div className="text-center my-4">
        <h2 className="font-bold" >Actualmente no tienes tareas</h2>
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
