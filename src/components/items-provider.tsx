import { safeJsonParse } from "@/helpers/json";
import Item from "@/types/Item";
import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";

type IItemsContext = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (index: number) => void;
  checkItem: (index: number) => void;
  removeAllItems: () => void;
};

const SHOPPING_KART_KEY = "shopping_cart_items";

const ItemsContext = createContext<IItemsContext | null>(null);

export const useItems = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItems must be used within a ItemsContextProvider");
  }

  return context;
};

export const ItemsContextProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>(
    safeJsonParse(localStorage.getItem(SHOPPING_KART_KEY)) ?? []
  );

  useEffect(() => {
    localStorage.setItem(SHOPPING_KART_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const removeAllItems = () => {
    setItems([]);
  };

  const checkItem = (index: number) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <ItemsContext.Provider
      value={{ items, addItem, removeItem, checkItem, removeAllItems }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
