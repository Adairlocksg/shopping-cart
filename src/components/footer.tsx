import { CircleHelpIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import ConfirmDialogBase from "./ui/base/confirm-dialog-base";
import { useItems } from "./items-provider";
import DialogBase from "./ui/base/dialog-base";
import Question from "./question";

const Footer = () => {
  const { removeAllItems } = useItems();
  return (
    <div className="flex justify-end gap-2">
      <ConfirmDialogBase
        title="Tem certeza que deseja excluir todos os itens da lista?"
        description="Essa ação será irreversível"
        trigger={
          <Button className="gap-2" variant="destructive">
            Excluir todos <Trash2Icon />
          </Button>
        }
        onConfirm={removeAllItems}
      />
      <DialogBase
        title="Qual o melhor dia do mês?"
        description=""
        trigger={
          <Button variant="secondary">
            <CircleHelpIcon />
          </Button>
        }
      >
        <Question />
      </DialogBase>
    </div>
  );
};

export default Footer;
