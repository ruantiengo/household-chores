import { useEffect, useState } from "react";
import Adicionar from "./components/Adicionar/adicionar";
import Header from "./components/Header/header";
import Info from "./components/Info/info";
import Work from "./components/Work/work";

function App() {
  const [currentView, setCurrentView] = useState(1);
  const [names, setNames] = useState<any>([]);

  useEffect(() => {
    setNames(["Ruan", "Thiago", "João"]);
  }, []);

  return (
    <div>
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === 1 ? <Info /> : ""}
      {currentView === 2 ? <Work names={names} /> : ""}
      {currentView === 3 ? <Adicionar /> : ""}
    </div>
  );
}

export default App;
