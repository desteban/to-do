import "./App.css";
import { useEffect, useState } from "react";
import { Todo } from "./Components/Todo/Todo";
import TodoCounter from "./Components/Todo/TodoCounter";
import TodoSearch from "./Components/Todo/TodoSearch";
import TodoList from "./Components/Todo/TodoList";
import TodoItem from "./Components/Todo/TodoItem";
import useLocalStorage from "./hooks/LocalStorage";
import CreateTodo from "./Components/Todo/CreateTodo";

function App() {
  const { item: todos, setItem: setTodos } = useLocalStorage("todos", []);
  const [searchTitle, setSearchTitle] = useState("");
  const [titleTodo, setTitleTodo] = useState("");
  let todosComplete = todos.filter((todo) => todo.complete).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const AddTodo = (e) => {
    e.preventDefault();
    if (titleTodo.length === 0) {
      alert("Debe poner un titulo a la tarea");
      return;
    }

    let auxTodo = [...todos];
    auxTodo.push({ complete: false, title: titleTodo });
    setTodos(auxTodo);
    setTitleTodo("");
  };

  /**
   *
   * @param {number} index indice a eliminar del arreglo de TODOS
   */
  const DeleteTodo = (index) => {
    let auxTodos = [...todos];
    auxTodos.splice(index, 1);
    setTodos(auxTodos);
  };

  const CheckTodo = (index) => {
    let auxTodos = [...todos];
    auxTodos[index].complete = true;
    setTodos(auxTodos);
  };

  const SearchedTodos = todos.filter((todo) =>
    todo.title.toLocaleUpperCase().includes(searchTitle.toLocaleUpperCase())
  );

  return (
    <main className="bg-background md:max-h-svh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="sm:container mx-auto min-h-svh md:flex md:gap-2 md:justify-center lg:gap-7">
        <CreateTodo
          onSubmit={AddTodo}
          setTitleTodo={setTitleTodo}
          titleTodo={titleTodo}
          counterTodos={todos.length}
        />

        <section className="h-svh overflow-hidden flex flex-col md:items-center md:justify-center md:py-5 md:px-2">
          <div className="w-full bg-card-background md:bg-opacity-50 rounded-b-lg md:rounded-lg px-5 py-4 top-0 lg:min-w-[450px]">
            <h1 className="text-3xl font-semibold text-center">TO DO</h1>
            <TodoCounter complete={todosComplete} total={todos.length} />
            <TodoSearch
              searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
              FindTodos={SearchedTodos}
            />
          </div>

          <div className={"custom-scroll overflow-auto mt-3 px-1 w-full"}>
            <TodoList todos={SearchedTodos} CheckTodo={CheckTodo} DeleteTodo={DeleteTodo} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
