import React from "react";
import { PlusIcon } from "../Icons/PlusIcon";

export default function CreateTodoButton() {
  return (
    <button className="p-2 rounded-full shadow-lg bg-primary max-w-min fixed bottom-4 right-5 active:bg-opacity-70 transition duration-500 md:hidden">
      <PlusIcon width="2em" height="2em" />
    </button>
  );
}
