import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

/**
 *
 * @param {object} props Props para el funcionamiento del componente
 * @param {[]} props.todos Listado de tareas
 * @param {() => void} props.DeleteTodo
 * @param {() => void} props.CheckTodo
 */
export default function TodoList({ todos, CheckTodo, DeleteTodo }) {
  useEffect(() => {}, []);

  return (
    <section
      id="Listado de TODOs"
      aria-label="Listado de TODOS"
      className="flex flex-col gap-3 rounded-md px-1"
    >
      {todos.length === 0 ? (
        <div className="p-10">
          <figure className="w-full text-center flex items-center justify-center">
            <img
              src="/Illustrations/undraw_taken_re_yn20.svg"
              alt=""
              className="w-4/5 h-auto object-cover"
            />
          </figure>
        </div>
      ) : null}

      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          DeleteTodo={DeleteTodo}
          CheckTodo={CheckTodo}
        />
      ))}
    </section>
  );
}
