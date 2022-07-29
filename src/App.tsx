import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

interface PropsList {
  id: string;
  task: string;
  conclude: boolean;
}

export function App() {
  const [tasksList, setTasksList] = useState<PropsList[]>([]);
  const [newTask, setNewTask] = useState("");
  const [taskCreateCount, setTaskCreateCount] = useState("");
  const [taskConcludeCount, setTaskConcludeCount] = useState("");

  function addNewTasks(event: FormEvent) {
    event.preventDefault();

    const newTaskItemAdd = {
      id: uuidv4(),
      task: newTask,
      conclude: false,
    };

    setTasksList([...tasksList, newTaskItemAdd]);

    setNewTask("");
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleDeleteTask(taskDelete: string) {
    const taskWithoutDeletedOne = tasksList.filter((task) => {
      return task.id != taskDelete;
    });

    setTasksList(taskWithoutDeletedOne);
  }

  function handleCompleteTask(taskCompleted: string) {
    let completedItemList = tasksList.map((item) => {
      if (taskCompleted == item.id) {
        if (item.conclude == false) {
          return { ...item, conclude: true };
        } else {
          return { ...item, conclude: false };
        }
      }
      return item;
    });

    setTasksList(completedItemList);
  }

  useEffect(() => {
    const value = tasksList.length.toString();
    setTaskCreateCount(value);

    let taskConcludeCount = tasksList.reduce((sum, task) => {
      if (task.conclude == true) {
        return (sum = sum + 1);
      }

      return sum;
    }, 0);

    let text = `${taskConcludeCount} de ${value}`;

    setTaskConcludeCount(text);
  }, [tasksList]);

  console.log(taskConcludeCount);

  return (
    <div>
      <Header />

      <form className={styles.content} onSubmit={addNewTasks}>
        <div>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="newTask"
            value={newTask}
            onChange={handleNewTask}
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
      </form>

      {tasksList.length == 0 ? (
        <TaskList
          textCreate={"Tarefas criadas"}
          textCreateCount={taskCreateCount}
          textConclude={"Concluídas"}
          textConcludeCount={taskConcludeCount}
          data={[]}
        />
      ) : (
        <TaskList
          textCreate={"Tarefas criadas"}
          textCreateCount={taskCreateCount}
          textConclude={"Concluídas"}
          textConcludeCount={taskConcludeCount}
          data={tasksList}
          deleteTask={handleDeleteTask}
          concludeTask={handleCompleteTask}
        />
      )}
    </div>
  );
}

export default App;
