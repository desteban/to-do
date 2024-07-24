import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import estilos from "./Scroll.module.css";

export default function TodoSearch() {
  return (
    <section id="Buscar_Todo" aria-label="Búsqueda de TODO" className="flex overflow-hidden rounded-2xl bg-gray-100 group mt-3">
      <div className="w-full" >
        <input type="text" id="tareaBuscar" placeholder="Busca una tarea" className="text-lg rounded-l-2xl px-2 py-1 bg-inherit appearance-none outline-blue-700 w-full" />
      </div>

      <button className="pl-1 pr-3 bg-blue-700 flex items-center justify-center text-white">
        <SearchIcon height={25} width={25} />
      </button>
    </section>
  );
}
