import "./App.css";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  return (
    <div className="relative bg-slate-100 dark:bg-gray-900">
      <Header />
      <Players />
    </div>
  );
}

export default App;
