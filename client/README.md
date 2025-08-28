# To-Do List App - Frontend

Una aplicación moderna de gestión de tareas construida con React, Vite y Tailwind CSS.

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI básicos (Button, Input, etc.)
│   ├── layout/         # Componentes de layout (AuthLayout, TaskList, etc.)
│   └── forms/          # Componentes de formularios (AuthForm, NewTaskForm, etc.)
├── pages/              # Páginas principales (Login, Register, Home)
├── hooks/              # Hooks personalizados (useTasks, etc.)
├── services/           # Servicios de API (taskService, etc.)
├── utils/              # Utilidades y helpers (axiosInstance, etc.)
├── styles/             # Estilos globales y CSS personalizado
├── constants/          # Constantes de la aplicación
├── context/            # Contextos de React (AuthContext)
└── assets/             # Recursos estáticos
```

## 🚀 Características

- **Autenticación JWT** - Sistema completo de login/registro
- **Gestión de Tareas** - Crear, editar, completar y eliminar tareas
- **UI Responsiva** - Diseño adaptativo para todos los dispositivos
- **Componentes Reutilizables** - Arquitectura modular y mantenible
- **Manejo de Estados** - Hooks personalizados para lógica de negocio
- **Estilos Consistentes** - Sistema de diseño unificado con Tailwind CSS

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **Vite** - Herramienta de construcción
- **Tailwind CSS** - Framework de CSS utilitario
- **Axios** - Cliente HTTP
- **JWT Decode** - Manejo de tokens JWT

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:5000/api
```

### Configuración de Tailwind

El proyecto incluye una configuración personalizada de Tailwind CSS con:
- Variables CSS personalizadas
- Componentes predefinidos
- Animaciones y transiciones
- Scrollbar personalizado

## 🎨 Componentes Principales

### UI Components
- **Button** - Botones con variantes y tamaños
- **Input** - Campos de entrada estilizados
- **Card** - Contenedores con sombras y bordes

### Layout Components
- **AuthLayout** - Layout para pantallas de autenticación
- **TaskList** - Lista de tareas con funcionalidades
- **Header** - Encabezado de la aplicación

### Form Components
- **AuthForm** - Formulario con tabs para login/registro
- **NewTaskForm** - Formulario para crear nuevas tareas

## 🪝 Hooks Personalizados

### useTasks
Maneja toda la lógica relacionada con las tareas:
- Cargar tareas
- Crear tareas
- Actualizar tareas
- Eliminar tareas
- Manejo de errores y loading

## 🎯 Funcionalidades

### Autenticación
- Registro de usuarios
- Inicio de sesión
- Manejo de tokens JWT
- Protección de rutas

### Gestión de Tareas
- Crear nuevas tareas
- Marcar tareas como completadas
- Editar tareas existentes
- Eliminar tareas
- Filtrado y búsqueda (futuro)

## 🔒 Seguridad

- Tokens JWT para autenticación
- Interceptores de Axios para headers automáticos
- Validación de formularios
- Manejo seguro de errores

## 📱 Responsividad

La aplicación está diseñada para funcionar en:
- Dispositivos móviles (320px+)
- Tablets (768px+)
- Escritorio (1024px+)

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Servidor de Producción
```bash
npm run preview
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema
