import { useState } from "react";

import "./global.css";

import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";

interface PropsList {
  id: number;
  task: string;
  conclude: boolean;
}

export function App() {
  const [tasksList, setTasksList] = useState<PropsList[]>([]);
  return (
    <div>
      <Header />

      <section className={styles.content}>
        <div>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
      </section>

      <div>{tasksList.length == 0 ? <p>teste</p> : <p>array</p>}</div>
    </div>
  );
}

export default App;
