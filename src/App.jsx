import "./App.css";
import { PlusIcon } from "./Components/Icons/PlusIcon";
// import { Todo } from "./Components/Todo/Todo";
import Todos from "./Components/Todo/Todos";
import Button from "./Components/ui/Button";

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
  { complete: true, title: "Verificar el SO" },
  { complete: true, title: "Beber agua" },
  { complete: false, title: "Caminar" },
  { complete: false, title: "Terminar cursos" },
  { complete: false, title: "Verificar el SO" },
  { complete: true, title: "Beber agua" },
];

function App() {
  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const AddTodo = (e) => {
    e.preventDefault();

    alert("agregando");
  };

  return (
    <main className="bg-background md:max-h-svh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto min-h-svh md:flex md:gap-7 md:justify-center">
        <div className="hidden py-4 md:h-svh md:flex md:items-center md:justify-center">
          <form className="bg-white px-5 py-4 rounded-xl min-w-[400px]" onSubmit={AddTodo}>
            <h2 className="text-2xl font-semibold mb-4 text-center">Agregar tareas</h2>
            <label className="flex flex-col mb-2">
              Titulo de la tarea
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Tarea"
                className="px-2 py-2 border-2 rounded-lg"
              />
            </label>

            <Button className="w-full flex items-center justify-center">
              <p className="w-full flex items-center justify-center cursor-pointer">
                Agregar{" "}
                <span className="mx-2">
                  <PlusIcon />
                </span>
              </p>
            </Button>

            {/* <figure className="mt-5 mb-3">
              <img
                src="/Illustrations/undraw_add_tasks_re_s5yj.svg"
                alt="Dos personas agregando tareas en la pantalla de un computador"
                className="object-cover"
              />
            </figure> */}
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
