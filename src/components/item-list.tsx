import { useState } from "react";
import { Label } from "./ui/label";
import { TrashIcon } from "lucide-react";
import { useItems } from "./items-provider";
import { Button } from "./ui/button";
import CheckboxBase from "./ui/base/checkbox-base";

type Props = {
  index: number;
  label: string;
  checked: boolean;
};

const ItemList = ({ index, label, checked: checkedProp }: Props) => {
  const [checked, setChecked] = useState(checkedProp);

  const { removeItem, checkItem } = useItems();

  const handleCheckItem = () => {
    checkItem(index);
    setChecked(!checked);
  };

  return (
    <div className="flex gap-2 items-center w-full my-5">
      <CheckboxBase
        id={`${label}_${index}`}
        checked={checked}
        onClick={handleCheckItem}
      />
      <Label
        className={`text-lg flex-1 ${checked ? "line-through" : ""}`}
        htmlFor={`${label}_${index}`}
      >
        {label}
      </Label>
      <Button variant="destructive" onClick={() => removeItem(index)}>
        <TrashIcon /* size={20} */ />
      </Button>
    </div>
  );
};

export default ItemList;
