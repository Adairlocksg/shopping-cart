import Item from "@/types/Item";
import { createContext, useState, PropsWithChildren, useContext } from "react";

type IItemsContext = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (index: number) => void;
};

const ItemsContext = createContext<IItemsContext | null>(null);

export const useItems = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItems must be used within a ItemsContextProvider");
  }

  return context;
};

export const ItemsContextProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
