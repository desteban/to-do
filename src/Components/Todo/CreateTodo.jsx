import { useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import { PlusIcon } from "../Icons/PlusIcon";
import Button from "../ui/Button";
import CreateTodoButton from "./CreateTodoButton";

/**
 *
 * @param {object} props
 * @param {string} props.titleTodo
 * @param {(titleTodo) => void} props.setTitleTodo
 *  @param {number} props.counterTodos
 * @param {() => void} props.onSubmit
 */
export default function CreateTodo({ titleTodo, setTitleTodo, onSubmit, counterTodos }) {
  const [showModal, setShowMOdal] = useState(false);
  const showModalClass =
    "max-md:!flex max-md:absolute max-md:top-0 max-md:left-0 max-md:z-50 max-md:bg-slate-700 max-md:bg-opacity-85 max-md:w-svw";

  const HandleModal = () => {
    setShowMOdal(!showModal);
  };

  return (
    <>
      <div
        className={`hidden py-4 h-svh md:flex items-center justify-center ${
          showModal ? showModalClass : ""
        }  md:px-2`}
      >
        <form
          className="bg-white px-5 py-4 rounded-xl min-w-[400px] relative"
          onSubmit={onSubmit}
        >
          <button
            type="button"
            className="absolute top-2 right-4 md:hidden"
            onClick={HandleModal}
          >
            <CloseIcon />
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Agregar tareas
          </h2>
          <label className="flex flex-col mb-2">
            Titulo de la tarea
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Tarea"
              className="px-2 py-2 border-2 rounded-lg"
              value={titleTodo}
              onChange={(e) => setTitleTodo(e.target.value)}
              autoComplete="OFF"
            />
          </label>

          <Button
            className="w-full flex items-center justify-center"
            type="submit"
          >
            <p className="w-full flex items-center justify-center cursor-pointer">
              Agregar
              <span className="mx-2">
                <PlusIcon />
              </span>
            </p>
          </Button>
        </form>
      </div>

      <CreateTodoButton click={HandleModal} empty={counterTodos === 0 && !showModal} />
    </>
  );
}
