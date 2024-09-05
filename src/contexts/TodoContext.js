import { createContext, useState } from "react";
import useLocalStorage from "../hooks/LocalStorage";

export const TodoContext = createContext({
  todos: [],
  setTodos: [],
  searchedTodos: [],
  SearchTodos: () => {},
  searchTitle: "",
  setSearchTitle: (title) => {},
  CheckTodo: (index) => {},
  DeleteTodo: (index) => {},
});

export function TodoContextProvider({ children }) {
  const { item: todos, SaveItem: setTodos } = useLocalStorage("todos", []);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchedTodos, setSearchedTodos] = useState([]);

  const SearchTodos = () => {
    let findsTodos = todos.filter((todo) =>
      todo.title.toLocaleUpperCase().includes(searchTitle.toLocaleUpperCase())
    );

    setSearchedTodos(findsTodos);
  };

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

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        searchedTodos,
        SearchTodos,
        searchTitle,
        setSearchTitle,
        CheckTodo,
        DeleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
