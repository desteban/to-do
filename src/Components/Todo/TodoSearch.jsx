import React, { useContext } from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import { TodoContext } from "../../contexts/TodoContext";


export default function TodoSearch() {
 const { searchTitle, setSearchTitle, SearchTodos } = useContext(TodoContext)
  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const changeTitle = (event) => {
    let value = event.target.value;
    setSearchTitle(value);
  };

  return (
    <form
      id="Buscar_Todo"
      aria-label="Búsqueda de TODO"
      className="flex overflow-hidden rounded-2xl bg-gray-100 group mt-3"
    >
      <div className="w-full">
        <input
          type="text"
          id="tareaBuscar"
          placeholder="Busca una tarea"
          className="text-lg rounded-l-2xl px-2 py-1 bg-inherit appearance-none outline-blue-700 w-full"
          value={searchTitle}
          onChange={changeTitle}
          autoComplete="OFF"
        />
      </div>

      <button className="pl-1 pr-3 bg-blue-700 flex items-center justify-center text-white" onClick={(e) => {
        e.preventDefault()
        SearchTodos()
      }} >
        <SearchIcon height={25} width={25} />
      </button>
    </form>
  );
}
