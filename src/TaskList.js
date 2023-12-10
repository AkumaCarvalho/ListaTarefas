import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleTaskCompletion, handleTaskRemoval }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          handleTaskCompletion={handleTaskCompletion}
          handleTaskRemoval={handleTaskRemoval}
        />
      ))}
    </ul>
  );
};

export default TaskList;
