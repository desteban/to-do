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
import CloseIcon from "./Components/Icons/CloseIcon";

function App() {
  /**
   * @type {Todo[]}
   */
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [searchTitle, setSearchTitle] = useState("");
  const [titleTodo, setTitleTodo] = useState("");
  let todosComplete = todos.filter((todo) => todo.complete).length;
  const [showModal, setShowMOdal] = useState(false);
  const showModalClass = "max-md:!flex max-md:absolute max-md:top-0 max-md:left-0 max-md:z-50 max-md:bg-slate-700 max-md:bg-opacity-85 max-md:w-svw"


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

  const HandleModal = () => {
    setShowMOdal(!showModal);
  }

  return (
    <main className="bg-background md:max-h-svh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="sm:container mx-auto min-h-svh md:flex md:gap-2 md:justify-center lg:gap-7">
        <div className={`hidden py-4 h-svh md:flex items-center justify-center ${showModal ? showModalClass : ''}  md:px-2`}>
          <form
            className="bg-white px-5 py-4 rounded-xl min-w-[400px] relative"
            onSubmit={AddTodo}
          >
            <button type="button" className="absolute top-2 right-4 md:hidden" onClick={HandleModal}>
              <CloseIcon />
            </button>
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

            <Button className="w-full flex items-center justify-center" type="submit">
              <p className="w-full flex items-center justify-center cursor-pointer">
                Agregar
                <span className="mx-2">
                  <PlusIcon />
                </span>
              </p>
            </Button>
          </form>
        </div>

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
        </section>
        <CreateTodoButton click={HandleModal}/>
      </div>
    </main>
  );
}

export default App;
