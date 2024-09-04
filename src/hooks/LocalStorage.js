import { useEffect, useState } from "react";

/**
 * Almacena y recupera datos en el almacenamiento local del navegador.
 *
 * Este hook personalizado gestiona la persistencia de datos en el local storage de forma sencilla y eficiente.
 *
 * @param {string} key La clave única para identificar el dato en el local storage.
 * @param {*} initial El valor inicial del dato, si no existe en el local storage.
 * @returns {{ item: *, setItem: (newItem: *) => void, loading: boolean, error: null }}
 */
export default function useLocalStorage(key, initial = null) {
  const [item, setItem] = useState(initial);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        setItem(JSON.parse(data));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError(error);
    }
  }, []);

  const SaveItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    setItem,
    loading,
    error,
  };
}
