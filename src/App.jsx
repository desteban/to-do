import "./App.css";
import TodoCounter from "./Components/Todo/TodoCounter";
import TodoSearch from "./Components/Todo/TodoSearch";
import TodoList from "./Components/Todo/TodoList";
import CreateTodo from "./Components/Todo/CreateTodo";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <main className="bg-background md:max-h-svh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="sm:container mx-auto min-h-svh md:flex md:gap-2 md:justify-center lg:gap-7">
          <CreateTodo />

          <section className="h-svh overflow-hidden flex flex-col md:items-center md:justify-center md:py-5 md:px-2 md:max-w-xl">
            <div className="w-full bg-card-background md:bg-opacity-50 rounded-b-lg md:rounded-lg px-5 py-4 top-0 lg:min-w-[450px]">
              <h1 className="text-3xl font-semibold text-center">TO DO</h1>
              <TodoCounter />
              <TodoSearch />
            </div>

            <div className={"custom-scroll overflow-auto mt-3 px-1 w-full"}>
              <TodoList />
            </div>
          </section>
        </div>
      </main>
    </TodoContextProvider>
  );
}

export default App;
