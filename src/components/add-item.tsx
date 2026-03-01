import { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useItems } from "./items-provider";

const AddItem = () => {
  const [item, setItem] = useState("");
  const { addItem } = useItems();

  const handleAddItem = () => {
    if (!item.trim()) return;
    addItem({ label: item.trim(), checked: false });
    setItem("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddItem();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full bg-card rounded-xl p-3 shadow-sm">
      <Input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 h-12 text-base"
        placeholder="Adicionar item..."
      />
      <Button
        className="w-full sm:w-auto gap-2 h-12"
        onClick={handleAddItem}
      >
        Adicionar
        <PlusIcon size={20} />
      </Button>
    </div>
  );
};

export default AddItem;
