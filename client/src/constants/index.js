// API Configuration
export const API_BASE_URL = 'http://localhost:5000/api';

// App Configuration
export const APP_NAME = 'To-Do List App';
export const APP_DESCRIPTION = 'Gestiona tus tareas de manera eficiente';

// Task Status
export const TASK_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed'
};

// UI Configuration
export const UI_CONFIG = {
  ANIMATION_DURATION: 200,
  MAX_TASK_LENGTH: 100,
  DEBOUNCE_DELAY: 300
};

// Error Messages
export const ERROR_MESSAGES = {
  TASK_CREATE: 'Error al crear la tarea. Intenta de nuevo.',
  TASK_UPDATE: 'Error al actualizar la tarea. Intenta de nuevo.',
  TASK_DELETE: 'Error al eliminar la tarea. Intenta de nuevo.',
  TASK_FETCH: 'Error al cargar las tareas. Intenta de nuevo.',
  LOGIN_FAILED: 'Error en el login. Verifica tus credenciales.',
  REGISTER_FAILED: 'Error en el registro. El usuario ya existe o hay un problema.',
  NETWORK_ERROR: 'Error de conexión. Verifica tu internet.',
  UNAUTHORIZED: 'Sesión expirada. Inicia sesión nuevamente.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  TASK_CREATED: 'Tarea creada exitosamente',
  TASK_UPDATED: 'Tarea actualizada exitosamente',
  TASK_DELETED: 'Tarea eliminada exitosamente',
  USER_REGISTERED: 'Registro exitoso! Ahora puedes iniciar sesión.',
  USER_LOGGED_IN: 'Sesión iniciada exitosamente'
};
