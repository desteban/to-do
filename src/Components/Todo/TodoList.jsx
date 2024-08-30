import React, { useEffect } from "react";

export default function TodoList(props) {

  useEffect(() => {},[])

  return (
    <section id="Listado de TODOs" aria-label="Listado de TODOS" className="flex flex-col gap-3 rounded-md py-4">
      {props.children}
    </section>
  );
}
