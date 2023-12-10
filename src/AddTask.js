import React, { useState } from 'react';

const AddTask = ({ handleTaskAddition }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      handleTaskAddition(taskName);
      setTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={taskName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </div>
  );
};

export default AddTask;
