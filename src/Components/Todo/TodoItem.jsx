import React from "react";
import { Todo } from "./Todo";

/**
 *
 * @param {Object} props
 * @param {Todo} props.todo
 * @returns
 */
export default function TodoItem({
  todo = new Todo("Nombre de la tarea", false),
}) {
  return (
    <div className="transition duration-300 hover:bg-neutral-100 hover:bg-opacity-90 hover:shadow-md px-4 py-5 rounded-md bg-card-background mx-2 md:ml-0 md:mr-3">
      <h3 className="text-inherit font-semibold">{todo.title}</h3>
    </div>
  );
}
