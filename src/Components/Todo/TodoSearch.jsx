import React, { useState } from "react";
import { SearchIcon } from "../Icons/SearchIcon";

/**
 * 
 * @param {object} props
 * @param {string} props.searchTitle
 * @param {(value) => void} props.setSearchTitle
 * @param {() => void} props.FindTodos
 * @returns 
 */
export default function TodoSearch({searchTitle, setSearchTitle, FindTodos = () => {}}) {

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
        />
      </div>

      <button className="pl-1 pr-3 bg-blue-700 flex items-center justify-center text-white" onClick={(e) => {
        e.preventDefault()
        FindTodos()
      }} >
        <SearchIcon height={25} width={25} />
      </button>
    </form>
  );
}
