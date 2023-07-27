import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Header } from './components/Header'
import { Task, TaskType } from './components/Task';
import { PlusCircle } from 'phosphor-react';

import './global.css'
import styles from './App.module.css';
import { EmptyList } from './components/EmptyList';


export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [taskCount, setTaskCount] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<number>(0);

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

    setTaskName('');
  }

  function handleFinishTask(taskToUpdate: TaskType) {
    const updatedTasks = tasks.filter(task => {
      if(task.id === taskToUpdate.id) {
        task.finished = !taskToUpdate.finished;
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function handleDeleteTask(taskToDelete: TaskType) {
    const updatedTasks = tasks.filter(task => task.id !== taskToDelete.id)

    setTasks(updatedTasks);
  }

  useEffect(() => {
    setTaskCount(tasks.length);

    const finishedTasks = tasks.filter(task => task.finished === true);

    setCompletedTasks(finishedTasks.length);
  }, [tasks])

  const isTaskNameEmpty = taskName.length === 0;

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

          <button type='submit' disabled={isTaskNameEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.todoWrapper}>
          <div className={styles.todoStatus}>
            <div>
              <p>Tarefas criadas</p>
              <strong>{taskCount}</strong>
            </div>

            <div>
              <p>Concluidas</p>
              <strong>
                {taskCount > 0 ?
                  (`${completedTasks} de ${taskCount}`)
                :
                  0
                }
              </strong>
            </div>
          </div>
        </div>

        <div className={styles.taskList}>
          {tasks.length > 0 ?
            tasks.map(task => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onFinishTask={handleFinishTask}
                  onDeleteTask={handleDeleteTask}
                />
              )
            })
          :
          <EmptyList />
        }
        </div>
      </div>
    </div>
  )
}