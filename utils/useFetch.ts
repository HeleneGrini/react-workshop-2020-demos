import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (endpoint: string) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    await fetch(endpoint)
      .then((r) => r.json())
      .then((data) => setItems(data))
      .catch((e) => setError(true));
    setLoading(false);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return { items, loading, error };
};
