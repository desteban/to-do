import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/LocalStorage";

export const TodoContext = createContext({
  todos: [],
  setTodos: [],
  searchedTodos: [],
  SearchTodos: () => {},
  searchTitle: "",
  setSearchTitle: (title) => {},
});

export function TodoContextProvider({ children }) {
  const { item: todos, setItem: setTodos } = useLocalStorage("todos", []);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchedTodos, setSeachedTodos] = useState([])


  useEffect(() => {}, [])

  const SearchTodos = () => {
    let findsTodos = todos.filter((todo) =>
      todo.title.toLocaleUpperCase().includes(searchTitle.toLocaleUpperCase())
    );

    setSeachedTodos(findsTodos)    
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        searchedTodos,
        SearchTodos,
        searchTitle,
        setSearchTitle,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
