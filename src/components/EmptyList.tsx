import { ClipboardText } from 'phosphor-react';

import styles from './EmptyList.module.css';

export function EmptyList() {
    return (
        <div className={styles.emptyList}>
            <ClipboardText size={56} />
            <p>
                Você ainda não tem tarefas cadastradas
                <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
        </div>
    );
}