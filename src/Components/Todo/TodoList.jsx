import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../contexts/TodoContext";


export default function TodoList() {
    const { todos, searchTitle, CheckTodo, DeleteTodo } = useContext(TodoContext)

    const SearchedTodos = todos.filter((todo) =>
      todo.title.toLocaleUpperCase().includes(searchTitle.toLocaleUpperCase())
    );

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

      {
        SearchedTodos.map((todo, index) => <TodoItem key={index} todo={todo} index={index} CheckTodo={CheckTodo} DeleteTodo={DeleteTodo} />)
      }

      {/* {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          DeleteTodo={DeleteTodo}
          CheckTodo={CheckTodo}
        />
      ))} */}
    </section>
  );
}
