import React, { useState } from "react";

/**
 *
 * @param {string} key Key a buscar en el localstorage
 * @param {any} [initial=null] Valor que tendrá la key si no se encuentra
 */
export default function useLocalStorage(key, initial = null) {
  const data = localStorage.getItem(key);
  let parsedData;

  if (!data || data.length === 0) {
    parsedData = initial;
  }

  parsedData = JSON.parse(data);
  const [item, setItem] = React.useState(parsedData);

  const SaveItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, SaveItem];
}
