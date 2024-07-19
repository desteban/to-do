import "./App.css";
import { Todo } from "./Components/Todo/Todo";
import Todos from "./Components/Todo/Todos";

/**
 * @type {Todo[]}
 */
const todoDefaults = [
  { complete: false, title: "Caminar" },
  { complete: false, title: "Terminar cursos" },
  { complete: false, title: "Verificar el SO" },
  { complete: true, title: "Beber agua" },
  { complete: false, title: "Caminar" },
  { complete: false, title: "Terminar cursos" },
  { complete: false, title: "Verificar el SO" },
  { complete: true, title: "Beber agua" },
  { complete: false, title: "Caminar" },
  { complete: false, title: "Terminar cursos" },
  { complete: false, title: "Verificar el SO" },
  { complete: true, title: "Beber agua" },
  { complete: false, title: "Caminar" },
  { complete: false, title: "Terminar cursos" },
  { complete: false, title: "Verificar el SO" },
  { complete: true, title: "Beber agua" },
  { complete: false, title: "Caminar" },
  { complete: false, title: "Terminar cursos" },
  { complete: false, title: "Verificar el SO" },
  { complete: true, title: "Ultimo" },
];

function App() {
  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const AddTodo = (e) => {
    e.preventDefault();
  };

  return (
    <main className="bg-background pb-20 md:max-h-svh">
      <div className="container mx-auto min-h-svh md:flex md:gap-7 md:justify-center">
        <div className="hidden py-4 h-svh md:flex md:items-center md:justify-center">
          <form className="bg-white px-5 py-4 rounded-xl" onSubmit={AddTodo}>
            <h2 className="text-2xl font-semibold mb-4">Agregar tareas</h2>
            <label className="flex flex-col mb-2">
              Titulo
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Tarea"
                className="px-2 py-2 border-2 rounded-lg"
              />
            </label>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary w-full"
            >
              Agregar
            </button>
          </form>
        </div>

        <div className="md:flex md:items-center md:justify-center">
        <Todos todos={todoDefaults} />
        </div>
      </div>
    </main>
  );
}

export default App;
