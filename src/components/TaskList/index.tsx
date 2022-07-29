import styles from "./TaskList.module.css";

import { Trash } from "phosphor-react";

export function TaskList() {
  return (
    <main className={styles.tasksListContainer}>
      <div className={styles.tasksListContent}>
        <header>
          <div>
            <p>
              Tarefas criadas
              <span>5</span>
            </p>

            <p>
              Concluídas <span>2 de 5</span>
            </p>
          </div>
        </header>

        <aside>
          <div>
            <input type="radio" />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>

            <Trash size={24} />
          </div>

          <div>
            <input type="radio" />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>

            <Trash size={24} />
          </div>
        </aside>
      </div>
    </main>
  );
}
