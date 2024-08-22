import "./App.css";
import ShoppingList from "./components/shopping-list";
import { ItemsContextProvider } from "./components/items-provider";
import AddItem from "./components/add-item";

function App() {
  return (
    <ItemsContextProvider>
      <div className="flex flex-col min-h-screen p-10 gap-5 max-h-[100vh]">
        <div>
          <AddItem />
        </div>
        <div className="flex-1 overflow-hidden flex flex-col">
          <ShoppingList />
        </div>
      </div>
    </ItemsContextProvider>
  );
}

export default App;
