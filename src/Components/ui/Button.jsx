import React from "react";

/**
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.full
 * @param {"submit"|"button"|"reset"} props.type El tipo de botón que se va a utilizar
 * @returns
 */
export default function Button({ children, full = true, className = "", type }) {
  return (
    <button
      className={`${
        full ? "w-full" : ""
      } px-4 py-2 rounded-lg bg-primary w-full cursor-pointer`}
      type={type}
    >
      {children}
    </button>
  );
}
