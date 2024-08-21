import React from "react";
import { Todo } from "./Todo";
import { TrashIcon } from "../Icons/TrashIcon";
import { CheckItem } from "../Icons/CheckItem";
import { DoubleCheckIcon } from "../Icons/DoubleCheckIcon";

const stylesDefaultIcon =
  "size-7 p-1 rounded-full transition duration-200 hover:bg-neutral-300";

/**
 *
 * @param {Object} props
 * @param {number} props.index
 * @param {Todo} props.todo
 * @param {() => void} props.DeleteTodo
 * @param {(index) => void} props.CheckTodo
 * @returns
 */
export default function TodoItem({
  todo = new Todo("Nombre de la tarea", false),
  index,
  DeleteTodo,
  CheckTodo = (index) => {},
}) {
  const IsCompleted = () => {
    if (!todo.complete) {
      return null;
    }

    return (
      <div>
        <DoubleCheckIcon
          className={`${stylesDefaultIcon} text-blue-500 hover:bg-inherit`}
        />
      </div>
    );
  };

  const Checked = () => {
    if (todo.complete) {
      return null;
    }

    return (
      <div>
        <CheckItem className={`${stylesDefaultIcon}`} />
      </div>
    );
  };

  return (
    <div
      className={`transition duration-300 px-4 py-5 rounded-md mx-2 md:ml-0 md:mr-3 relative flex gap-2 ${
        todo.complete
          ? "bg-neutral-100 bg-opacity-50"
          : "hover:bg-neutral-100 hover:bg-opacity-90 hover:shadow-md bg-card-background bg-opacity-50"
      }`}
    >
      <IsCompleted />
      <div className="relative min-w-[70%]">
        <h3
          className={`text-inherit font-semibold text-lg ${
            todo.complete
              ? "text-gray-400 before:h-[2px] before:w-full before:bg-gray-400 before:absolute before:top-1/2 before:bottom-1/2 before:left-0"
              : ""
          }`}
        >
          {todo.title}
        </h3>
      </div>
      <div className={`flex gap-2`}>
        <button
          onClick={() => {
            DeleteTodo(index);
          }}
        >
          <TrashIcon className={`${stylesDefaultIcon} text-red-600`} />
        </button>
        <button
          onClick={() => {
            CheckTodo(index);
          }}
        >
          <Checked />
        </button>
      </div>
    </div>
  );
}
