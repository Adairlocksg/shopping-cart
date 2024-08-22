import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { XIcon } from "lucide-react";
import { useItems } from "./items-provider";

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
      <Checkbox
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
      <XIcon className="cursor-pointer" onClick={() => removeItem(index)} />
    </div>
  );
};

export default ItemList;
