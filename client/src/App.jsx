import { useEffect, useState } from 'react'
import { useAuth } from './AuthContext.jsx'
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';
import AuthLayout from './components/layout/AuthLayout.jsx';
import AuthForm from './components/forms/AuthForm.jsx';
import NewTaskForm from './components/forms/NewTaskForm.jsx';
import TaskList from './components/layout/TaskList.jsx';
import Button from './components/ui/Button.jsx';

function App() {
  const { isAuthenticated, token, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchTasks();
    }
  }, [isAuthenticated, token]);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTask = async (title) => {
    try {
      const res = await createTask({ title });
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Error al crear la tarea. Intenta de nuevo.');
    }
  };

  const handleToggleTask = async (id, completed) => {
    try {
      const res = await updateTask(id, { completed: !completed });
      setTasks(tasks.map((t) => t._id === id ? res.data : t));
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Error al actualizar la tarea. Intenta de nuevo.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Error al eliminar la tarea. Intenta de nuevo.');
    }
  };

  const handleLogout = () => {
    logout();
    setTasks([]);
  };

  // Si no está autenticado, mostrar pantalla de autenticación
  if (!isAuthenticated) {
    return (
      <AuthLayout>
        <AuthForm />
      </AuthLayout>
    );
  }

  // Si está autenticado, mostrar la aplicación principal
  return (
    <div className="main-container">
      <div className="main-content">
        {/* Header */}
        <header className="app-header">
          <div className="header-content">
            <div className="header-info">
              <h1>To-Do List</h1>
              <p>Gestiona tus tareas de manera eficiente</p>
            </div>
            <Button
              variant="danger"
              size="md"
              onClick={handleLogout}
              className="btn btn-danger"
            >
              Cerrar Sesión
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* New Task Form */}
          <div className="content-section">
            <h2 className="section-title">Nueva Tarea</h2>
            <NewTaskForm onSubmit={handleCreateTask} disabled={isLoading} />
          </div>

          {/* Tasks List */}
          <div className="content-section">
            <div className="task-list-header">
              <h2 className="section-title">Mis Tareas</h2>
              <span className="task-count">
                {tasks.length} tarea{tasks.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {isLoading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p className="loading-text">Cargando tareas...</p>
              </div>
            ) : (
              <TaskList
                tasks={tasks}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
