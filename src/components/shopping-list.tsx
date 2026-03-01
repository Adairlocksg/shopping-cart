import { ShoppingCartIcon } from "lucide-react";
import ItemList from "./item-list";
import { useItems } from "./items-provider";

const ShoppingList = () => {
  const { items } = useItems();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
        <ShoppingCartIcon className="h-16 w-16 opacity-40" />
        <p className="text-lg font-medium">Sua lista está vazia</p>
        <p className="text-sm">Adicione itens usando o campo acima</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-h-full overflow-y-auto overscroll-contain gap-3 pr-1">
      {items.map((item, index) => (
        <ItemList
          key={index}
          index={index}
          label={item.label}
          checked={item.checked}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
