import React from "react";

/**
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.full
 * @returns
 */
export default function Button({ children, full = true, className = '' }) {
  return (
    <button
      className={`${
        full ? "w-full" : ""
      } px-4 py-2 rounded-lg bg-primary w-full cursor-pointer`}
    >
      {children}
    </button>
  );
}
