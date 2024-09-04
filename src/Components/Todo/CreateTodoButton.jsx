import React from "react";
import { PlusIcon } from "../Icons/PlusIcon";

/**
 *
 * @param {object} props
 * @param {() => void} props.click
 * @param {boolean} props.empty Determinar si se cuenta con tareas para mostrar o no una animación en el botón
 * @returns
 */
export default function CreateTodoButton({ click, empty }) {
  return (
    <button
      className="p-2 rounded-full shadow-lg bg-primary max-w-min fixed bottom-4 right-5 active:bg-opacity-70 transition duration-500 z-10 md:hidden"
      onClick={click}
    >
      <div className="relative flex items-center justify-center">
        {empty ? (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        ) : null}

        <PlusIcon width="2em" height="2em" />
      </div>
    </button>
  );
}
