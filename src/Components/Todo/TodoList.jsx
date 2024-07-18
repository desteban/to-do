import React from "react";

export default function TodoList(props){
    return(
        <section id="Listado de TODOs" aria-label="Listado de TODOS" >
            <ul>
                {props.children}
            </ul>
        </section>
    )
}