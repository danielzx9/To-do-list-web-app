import { useState, useCallback } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService';
import { ERROR_MESSAGES } from '../constants';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError(ERROR_MESSAGES.TASK_FETCH);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addTask = useCallback(async (title) => {
    try {
      setError(null);
      const res = await createTask({ title });
      setTasks(prevTasks => [...prevTasks, res.data]);
      return { success: true, data: res.data };
    } catch (error) {
      console.error('Error creating task:', error);
      setError(ERROR_MESSAGES.TASK_CREATE);
      return { success: false, error: ERROR_MESSAGES.TASK_CREATE };
    }
  }, []);

  const toggleTask = useCallback(async (id, completed) => {
    try {
      setError(null);
      const res = await updateTask(id, { completed: !completed });
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task._id === id ? res.data : task
        )
      );
      return { success: true, data: res.data };
    } catch (error) {
      console.error('Error updating task:', error);
      setError(ERROR_MESSAGES.TASK_UPDATE);
      return { success: false, error: ERROR_MESSAGES.TASK_UPDATE };
    }
  }, []);

  const removeTask = useCallback(async (id) => {
    try {
      setError(null);
      await deleteTask(id);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
      return { success: true };
    } catch (error) {
      console.error('Error deleting task:', error);
      setError(ERROR_MESSAGES.TASK_DELETE);
      return { success: false, error: ERROR_MESSAGES.TASK_DELETE };
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    tasks,
    isLoading,
    error,
    fetchTasks,
    addTask,
    toggleTask,
    removeTask,
    clearError
  };
};
