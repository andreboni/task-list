import React from 'react';
import { getTasks } from '../model/getTasks';
import PriorityTag from './PriorityTag';
import EditableText from './EditableText';

const TasksList = (props) => {
  if (!props.tasks.length) {
    return <p>Nenhuma tarefa adicionada ainda.</p>
  }

  const filteredTasks = getTasks(props.tasks, props.filter);

  return (
    <div>
      {!!filteredTasks.length && <ul className="task-list layout-grow">
        {filteredTasks.map(task => (
          <li className={task.done ? 'is-completed' : ''} key={task.id}>
            <input readOnly onClick={() => props.handleCheckTask(task.id)} checked={task.done} type="checkbox" />
            <PriorityTag priority={task.priority} /> 
            <EditableText callback={(text) => props.handleEditText(task.id, text)} text={task.label} />
          </li>
        ))}
      </ul>}
      {filteredTasks.length === 0 && props.tasks.length > 0 &&
        <p>Não há tarefas que combine com os critérios especificados.</p>
      }
    </div>
  )
}

export default TasksList;