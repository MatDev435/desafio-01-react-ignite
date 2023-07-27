import { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from './components/Header'
import { Task, TaskType } from './components/Task';
import { PlusCircle } from 'phosphor-react';

import './global.css'
import styles from './App.module.css';


export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState<string>('');

  function handleTaskNameChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const id = Math.random();

    setTasks([...tasks, {
      id,
      content: taskName,
      finished: false
    }])
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
            onChange={handleTaskNameChange}
            value={taskName}
            required
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

        <div className={styles.taskList}>
          {tasks.map(task => {
            return <Task key={task.id} task={task} />
          })}
        </div>
      </div>
    </div>
  )
}