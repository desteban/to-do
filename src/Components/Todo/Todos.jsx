import CreateTodoButton from "./CreateTodoButton";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

/**
 *
 * @param {Object} props
 * @param {Todo[]} props.todos
 */
export default function Todos({ todos }) {
  let todosComplete = todos.filter((todo) => todo.complete).length;

  return (
    <section className="h-svh overflow-hidden flex flex-col md:items-center md:justify-center md:py-5">
      <div className="w-full bg-card-background md:bg-opacity-50 rounded-b-lg md:rounded-lg px-5 py-4 top-0 md:min-w-[450px]">
        <h1 className="text-3xl font-semibold text-center">TO DO</h1>
        <TodoCounter complete={todosComplete} total={todos.length} />
        <TodoSearch />
      </div>

      <div className="overflow-x-auto w-full md:mt-5 pb-16 md:pb-0 snap-y scroll-m-0 transition-all duration-300">
        <div className="overflow-hidden">
          <TodoList>
            {todos.map((todo, index) => (
              <TodoItem key={index} todo={todo} />
            ))}
          </TodoList>
        </div>

        <CreateTodoButton />
      </div>
    </section>
  );
}
