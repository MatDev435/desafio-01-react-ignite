import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskType {
    id: number;
    content: string;
    finished: boolean;
}

interface TaskProps {
    task: TaskType;
    onFinishTask: (task: TaskType) => void;
    onDeleteTask: (task: TaskType) => void;
}

export function Task({ task, onFinishTask, onDeleteTask }: TaskProps) {
    function handleFinishChange() {
        onFinishTask(task);
    }

    function handleDeleteTask() {
        onDeleteTask(task);
    }

    return (
        <div className={styles.task}>
            <Checkbox.Root className={styles.checkbox} onClick={handleFinishChange} checked={task.finished}>
                <Checkbox.Indicator className={styles.checkboxIndicator}>
                    <Check size={16} />
                </Checkbox.Indicator>
            </Checkbox.Root>

            <p className={task.finished ? styles.finished : ''}>
                {task.content}
            </p>

            <button onClick={handleDeleteTask} className={styles.delete}>
                <Trash size={24} />
            </button>
        </div>
    );
}