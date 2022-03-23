import { useEffect, useState } from "react";
import Adicionar from "./components/Adicionar/adicionar";
import Header from "./components/Header/header";
import Info from "./components/Info/info";
import Work from "./components/Work";

function App() {
  const [currentView, setCurrentView] = useState(1);
  const [names, setNames] = useState<any>([]);
  const [tasks, setTasks] = useState<any>([]);
  const atividade = [
    ["Banheiro"],
    ["Corredor", "Sala", "Entrada"],
    ["Cozinha", "Lavanderia"],
  ];
  useEffect(() => {
    setNames(["Ruan", "Thiago", "João"]);
    setTasks(atividade);
  }, []);

  return (
    <div>
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === 1 ? <Info /> : ""}
      {currentView === 2 ? (
        <Work names={names} tasks={tasks} setTasks={setTasks} />
      ) : (
        ""
      )}
      {currentView === 3 ? <Adicionar /> : ""}
    </div>
  );
}

export default App;
