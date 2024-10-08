import { useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useItems } from "./items-provider";

const AddItem = () => {
  const [item, setItem] = useState("");
  const { addItem } = useItems();

  const handleAddItem = () => {
    if (!item) return;
    addItem({ label: item, checked: false });
    setItem("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <Input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="flex-1"
        placeholder="Item"
      />
      <Button className="w-full sm:w-auto gap-2" onClick={handleAddItem}>
        Adicionar
        <PlusIcon size={20} />
      </Button>
    </div>
  );
};

export default AddItem;
