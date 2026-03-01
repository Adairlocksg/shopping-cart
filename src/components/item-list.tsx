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
    <div
      className={`flex gap-3 items-center w-full bg-card rounded-xl px-4 py-3 shadow-sm transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 ${
        checked ? "opacity-60" : ""
      }`}
    >
      <CheckboxBase
        id={`${label}_${index}`}
        checked={checked}
        onClick={handleCheckItem}
      />
      <Label
        className={`text-base flex-1 transition-all duration-200 ${
          checked ? "line-through text-muted-foreground" : ""
        }`}
        htmlFor={`${label}_${index}`}
      >
        {label}
      </Label>
      <ConfirmDialogBase
        title="Você tem certeza que deseja excluir esse item?"
        description=" O item será excluido permanentemente."
        trigger={
          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10">
            <TrashIcon className="h-4 w-4" />
          </Button>
        }
        onConfirm={() => removeItem(index)}
      />
    </div>
  );
};

export default ItemList;
