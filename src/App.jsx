import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import "./index.css";

export const App = () => {
  const [tasks, seTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      descripition: "Desenvolver",
      isCompleted: false,
    },
      {
      id: 2,
      title: "Estudar Inglês",
      descripition: "Desenvolver2",
      isCompleted: false,
    },
      {
      id: 3,
      title: "Estudar React",
      descripition: "Desenvolver3",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          {" "}
          Gerenciador de Taferas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};
