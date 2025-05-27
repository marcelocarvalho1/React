import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";

export const App = () => {
  return (
    <div>
      <h1> Gerenciador de Taferas</h1>
      <AddTask />
      <Task />
    </div>
  );
};
