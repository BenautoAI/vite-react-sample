import { useState } from 'react';
import TaskItem from '../TaskItem';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Complete project documentation', completed: false },
    { id: '2', text: 'Review pull requests', completed: true },
    { id: '3', text: 'Update dependencies', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Task Manager</h1>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="
            flex-1
            px-4
            py-2
            border
            border-gray-300
            rounded-lg
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            text-gray-900
          "
        />
        <button
          onClick={handleAddTask}
          className="
            px-6
            py-2
            bg-blue-500
            text-white
            rounded-lg
            hover:bg-blue-600
            transition-colors
            duration-200
          "
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No tasks yet. Add one to get started!</p>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>Total tasks: {tasks.length}</p>
        <p>Completed: {tasks.filter(t => t.completed).length}</p>
        <p>Remaining: {tasks.filter(t => !t.completed).length}</p>
      </div>
    </div>
  );
}

export default TaskList;
