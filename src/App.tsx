import "./App.css";
import ShoppingList from "./components/shopping-list";
import { ItemsContextProvider } from "./components/items-provider";
import AddItem from "./components/add-item";
import Footer from "./components/footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ItemsContextProvider>
      <Toaster richColors position="top-center" />
      <div className="flex flex-col min-h-screen p-10 gap-5 max-h-[100vh]">
        <div>
          <AddItem />
        </div>
        <div className="flex-1 overflow-hidden flex flex-col">
          <ShoppingList />
        </div>
        <Footer />
      </div>
    </ItemsContextProvider>
  );
}

export default App;
