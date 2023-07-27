import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react';

import './global.css'
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
          />

          <button type='submit'>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.todoWrapper}>
          <div className={styles.todoStatus}>
            <div>
              <p>Tarefas criadas</p>
              <strong>0</strong>
            </div>

            <div>
              <p>Concluidas</p>
              <strong>0</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}