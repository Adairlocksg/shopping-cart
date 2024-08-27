import { useState } from "react";
import { Label } from "./ui/label";
import { TrashIcon } from "lucide-react";
import { useItems } from "./items-provider";
import { Button } from "./ui/button";
import CheckboxBase from "./ui/base/checkbox-base";
import ConfirmDialogBase from "./ui/base/confirm-dialog-base";

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
      <ConfirmDialogBase
        title="Você tem certeza que deseja excluir esse item?"
        description=" O item será excluido permanentemente."
        trigger={
          <Button variant="destructive">
            <TrashIcon />
          </Button>
        }
        onConfirm={() => removeItem(index)}
      />
    </div>
  );
};

export default ItemList;
