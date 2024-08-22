import ItemList from "./item-list";
import { useItems } from "./items-provider";

const ShoppingList = () => {
  const { items } = useItems();
  return (
    <div className="flex flex-col w-full max-h-full overflow-auto">
      {items.map((item, index) => (
        <ItemList key={index} index={index} label={item.label} />
      ))}
    </div>
  );
};

export default ShoppingList;
