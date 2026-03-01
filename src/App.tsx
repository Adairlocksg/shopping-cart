import "./App.css";
import ShoppingList from "./components/shopping-list";
import { ItemsContextProvider } from "./components/items-provider";
import AddItem from "./components/add-item";
import Footer from "./components/footer";
import { Toaster } from "./components/ui/sonner";
import { ShoppingCartIcon } from "lucide-react";

function App() {
  return (
    <ItemsContextProvider>
      <Toaster richColors position="top-center" />
      <div className="h-dvh flex items-start justify-center bg-background p-4 sm:p-8 overflow-hidden">
        <div className="w-full max-w-lg flex flex-col gap-4 h-full">
          {/* Header */}
          <div className="flex items-center gap-3 pt-2 shrink-0">
            <ShoppingCartIcon className="h-7 w-7 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">Lista de Compras</h1>
          </div>

          {/* Add item */}
          <div className="shrink-0">
            <AddItem />
          </div>

          {/* Shopping list */}
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">
            <ShoppingList />
          </div>

          {/* Footer */}
          <div className="shrink-0">
            <Footer />
          </div>
        </div>
      </div>
    </ItemsContextProvider>
  );
}

export default App;
