import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { XIcon } from "lucide-react";
import { useItems } from "./items-provider";

type Props = {
  index: number;
  label: string;
};

const ItemList = ({ index, label }: Props) => {
  const [checked, setChecked] = useState(false);

  const { removeItem } = useItems();

  return (
    <div className="flex gap-2 items-center w-full my-5">
      <Checkbox
        id={`${label}_${index}`}
        checked={checked}
        onClick={() => setChecked(!checked)}
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
