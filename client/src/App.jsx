import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';


function App() {

  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {fetchTasks();}, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreate = async () => {
    if(!newTitle.trim()) return;
    try {
      const res = await createTask({ title: newTitle });
      setTasks([...tasks, res.data]);
      setNewTitle('');
    } catch (error) {
      console.error('Error creating task:', error); 
    }
  };

  const toggleTask = async (id, completed) => {
    const res = await updateTask(id, { completed: !completed });
    setTasks(tasks.map((t) => t._id === id ? res.data : t));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };


  return (<div className="max-w-xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
    <div className="flex mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Nueva tarea"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>
        Agregar
      </button>
    </div>
    <ul>
      {tasks.map(task => (
        <li key={task._id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
          <span
            onClick={() => toggleTask(task._id, task.completed)}
            className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
          >
            {task.title}
          </span>
          <button onClick={() => handleDelete(task._id)} className="text-red-500 font-bold">X</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;
