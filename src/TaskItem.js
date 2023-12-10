import React from 'react';

const TaskItem = ({ task, handleTaskCompletion, handleTaskRemoval }) => {
  return (
    <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
      {task.completed ? <span>&#10004;</span> : null}
      {task.name}
      <div>
        <button onClick={() => handleTaskCompletion(task.id)}>
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        {task.completed && (
          <button onClick={() => handleTaskRemoval(task.id)}>Remover</button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
