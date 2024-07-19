import CreateTodoButton from "./CreateTodoButton";
import { Todo } from "./Todo";
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
  return (
    <section
      aria-label="Tareas"
      className="md:max-h-[calc(100svh-40px)] md:overflow-x-hidden md:overflow-y-auto"
    >
      <div className="" >
        <div className="sticky top-0 md:mr-3">
          <div className="bg-card-background rounded-md px-5 py-4">
            <h1 className="text-3xl font-semibold">TO DO</h1>
            <TodoCounter complete={0} total={todos.length} />

            <TodoSearch />
          </div>
        </div>

        <div className="">
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
