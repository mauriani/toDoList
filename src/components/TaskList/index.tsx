import styles from "./TaskList.module.css";

import { Trash, ClipboardText } from "phosphor-react";

interface PropsList {
  id: string;
  task: string;
  conclude: boolean;
}
interface Props {
  textCreate: string;
  textCreateCount: string;
  textConclude: string;
  textConcludeCount: string;
  data: PropsList[] | null;
  deleteTask?: (id: string) => void;
  concludeTask?: (id: string) => void;
}

export function TaskList({
  textCreate,
  textCreateCount,
  textConclude,
  textConcludeCount,
  data,
  deleteTask,
  concludeTask,
}: Props) {
  function handleDeleteTask(id: string) {
    if (deleteTask) deleteTask(id);
  }

  function handleConcludeTask(id: string) {
    if (concludeTask) concludeTask(id);
  }

  return (
    <main className={styles.tasksListContainer}>
      <div className={styles.tasksListContent}>
        <header>
          <div>
            <p>
              {textCreate}
              <span>{textCreateCount}</span>
            </p>

            <p>
              {textConclude} <span>{textConcludeCount}</span>
            </p>
          </div>
        </header>

        {data!.length > 0 ? (
          <aside>
            {data?.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type="radio"
                    onClick={() => handleConcludeTask(item.id)}
                  />
                  <p>{item.task}</p>

                  <button onClick={() => handleDeleteTask(item.id)}>
                    <Trash size={24} />
                  </button>
                </div>
              );
            })}
          </aside>
        ) : (
          <>
            <aside>
              <ClipboardText size={56} />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </aside>
          </>
        )}
      </div>
    </main>
  );
}
