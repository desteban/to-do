import CreateTodoButton from "./CreateTodoButton";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import estilos from "./Scroll.module.css";
import { useState } from "react";

/**
 *
 * @param {Object} props
 * @param {Todo[]} props.todos
 * @param {string} props.searchTitle
 * @param {(value) => void} props.setSearchTitle
 */
export default function Todos({ todos, searchTitle, setSearchTitle }) {

  const [ todosVisibles, setTodosVisibles ] = useState(
    todos ?? []
  );
  let todosComplete = todos.filter((todo) => todo.complete).length;

  const FindTodos = () => {
    const resutados = todos.filter((todo) =>
      todo.title.toLocaleUpperCase().includes(searchTitle.toLocaleUpperCase())
    );

    setTodosVisibles(resutados)
  };

  return (
    <section className="h-svh overflow-hidden flex flex-col md:items-center md:justify-center md:py-5">
      <div className="w-full bg-card-background md:bg-opacity-50 rounded-b-lg md:rounded-lg px-5 py-4 top-0 md:min-w-[450px]">
        <h1 className="text-3xl font-semibold text-center">TO DO</h1>
        <TodoCounter complete={todosComplete} total={todos.length} />
        <TodoSearch
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          FindTodos={FindTodos}
        />
      </div>

      <div className={`${estilos.listado} ${estilos["custom-scroll"]}`}>
        <div className="overflow-hidden">
          <TodoList>
            {todosVisibles.map((todo, index) => (
              <TodoItem key={index} todo={todo} />
            ))}
          </TodoList>
        </div>

        {/* <CreateTodoButton /> */}
      </div>
    </section>
  );
}
