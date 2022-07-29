import { useState, ChangeEvent, FormEvent } from "react";
import { PlusCircle, ClipboardText } from "phosphor-react";
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

      <div>
        {tasksList.length == 0 ? (
          <div className={styles.tasksListContainer}>
            <div className={styles.tasksListContent}>
              <header>
                <div>
                  <p>
                    Tarefas criadas
                    <span>0</span>
                  </p>

                  <p>
                    Concluídas <span>0</span>
                  </p>
                </div>
              </header>

              <aside>
                <ClipboardText size={56} />
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <br />
                  Crie tarefas e organize seus itens a fazer
                </p>
              </aside>
            </div>
          </div>
        ) : (
          <TaskList />
        )}
      </div>
    </div>
  );
}

export default App;
