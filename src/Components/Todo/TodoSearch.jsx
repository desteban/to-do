import React from "react";

export default function TodoSearch() {
  return (
    <section id="Buscar_Todo" aria-label="Buscador de TODO">
      <label>
        Busca una tarea
        <input type="text" id="tareaBuscar" placeholder="Busca una tarea" />
      </label>

      <button>Buscar</button>
    </section>
  );
}
