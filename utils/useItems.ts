import { useState } from "react";
import { useFetch } from "./useFetch";
export const useItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { loading, error, items } = useFetch("api/items");

  const addItem = (newItem) => {
    const isSelected = selectedItems.find((item) => item.id === newItem.id);
    if (!!isSelected) {
      const newSelectedItems = selectedItems.map((item) => {
        if (newItem.id === item.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems([...selectedItems, { ...newItem, amount: 1 }]);
    }
  };

  const totalItems = selectedItems.reduce(
    (acc, currentItem) => acc + (currentItem.amount ?? 0),
    0
  );

  return { totalItems, addItem, selectedItems, loading, items, error };
};
