import "./App.css";
import CreateTodoButton from "./Components/Todo/CreateTodoButton";
import TodoCounter from "./Components/Todo/TodoCounter";
import TodoItem from "./Components/Todo/TodoItem";
import TodoList from "./Components/Todo/TodoList";
import TodoSearch from "./Components/Todo/TodoSearch";

function App() {
  return (
    <main className="App">
      <h1>TO DO</h1>
      <TodoCounter complete={0} total={0}/>

      <TodoSearch />

      <div>
        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>
      </div>

      <CreateTodoButton />
    </main>
  );
}

export default App;
