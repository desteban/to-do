import React from "react";

export default function TodoList(props) {
  return (
    <section id="Listado de TODOs" aria-label="Listado de TODOS" className="flex flex-col gap-3 rounded-md py-4">
      {props.children}
    </section>
  );
}
