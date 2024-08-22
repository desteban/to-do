import { useEffect, useState } from "react";
import "./App.css";
import { PlusIcon } from "./Components/Icons/PlusIcon";
import CreateTodoButton from "./Components/Todo/CreateTodoButton";
import { Todo } from "./Components/Todo/Todo";
import Button from "./Components/ui/Button";
import TodoCounter from "./Components/Todo/TodoCounter";
import TodoSearch from "./Components/Todo/TodoSearch";
import TodoList from "./Components/Todo/TodoList";
import TodoItem from "./Components/Todo/TodoItem";
import useLocalStorage from "./hooks/LocalStorage";

function App() {
  /**
   * @type {Todo[]}
   */
  const [todos, setTodos] = useLocalStorage("todos", []);
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
      <div className="container mx-auto min-h-svh md:flex md:gap-7 md:justify-center">
        <div className="hidden py-4 md:h-svh md:flex md:items-center md:justify-center">
          <form
            className="bg-white px-5 py-4 rounded-xl min-w-[400px]"
            onSubmit={AddTodo}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Agregar tareas
            </h2>
            <label className="flex flex-col mb-2">
              Titulo de la tarea
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Tarea"
                className="px-2 py-2 border-2 rounded-lg"
                value={titleTodo}
                onChange={(e) => setTitleTodo(e.target.value)}
              />
            </label>

            <Button className="w-full flex items-center justify-center">
              <p className="w-full flex items-center justify-center cursor-pointer">
                Agregar
                <span className="mx-2">
                  <PlusIcon />
                </span>
              </p>
            </Button>
          </form>
        </div>

        <section className="h-svh overflow-hidden flex flex-col md:items-center md:justify-center md:py-5">
          <div className="w-full bg-card-background md:bg-opacity-50 rounded-b-lg md:rounded-lg px-5 py-4 top-0 md:min-w-[450px]">
            <h1 className="text-3xl font-semibold text-center">TO DO</h1>
            <TodoCounter complete={todosComplete} total={todos.length} />
            <TodoSearch
              searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
              FindTodos={SearchedTodos}
            />
          </div>

          <div className={"custom-scroll p-1 w-full"}>
            <div className="overflow-hidden p-1">
              <TodoList>
                {SearchedTodos.map((todo, index) => (
                  <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    DeleteTodo={DeleteTodo}
                    CheckTodo={CheckTodo}
                  />
                ))}
              </TodoList>
            </div>

            {/* <CreateTodoButton /> */}
          </div>
        </section>
        <CreateTodoButton />
      </div>
    </main>
  );
}

export default App;
