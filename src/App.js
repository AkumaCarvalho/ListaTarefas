import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAddition = (taskName) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName, completed: false }]);
  };

  const handleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const handleTaskRemoval = (taskId) => {
    const taskToRemove = tasks.find(task => task.id === taskId);

    // Remova apenas tarefas concluídas
    if (taskToRemove && taskToRemove.completed) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <TaskList
        tasks={tasks}
        handleTaskCompletion={handleTaskCompletion}
        handleTaskRemoval={handleTaskRemoval}
      />
    </div>
  );
};

export default App;
