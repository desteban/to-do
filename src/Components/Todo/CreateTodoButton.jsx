import React from "react";
import { PlusIcon } from "../Icons/PlusIcon";

/**
 * 
 * @param {object} props
 * @param {() => void} props.click
 * @returns 
 */
export default function CreateTodoButton({
  click
}) {
  return (
    <button className="p-2 rounded-full shadow-lg bg-primary max-w-min fixed bottom-4 right-5 active:bg-opacity-70 transition duration-500 z-10 md:hidden" onClick={click}>
      <PlusIcon width="2em" height="2em" />
    </button>
  );
}
