import React from 'react';
import Button from '../ui/Button.jsx';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📝</div>
        <h3>No tienes tareas aún</h3>
        <p>¡Crea tu primera tarea arriba para comenzar a organizarte!</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li 
          key={task._id} 
          className={`task-item ${task.completed ? 'completed' : ''} animate-fade-in`}
        >
          <div className="task-content">
            <span
              onClick={() => onToggle(task._id, task.completed)}
              className="task-title"
            >
              {task.title}
            </span>
            <div className="task-actions">
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(task._id)}
                className="btn btn-danger"
              >
                ×
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
