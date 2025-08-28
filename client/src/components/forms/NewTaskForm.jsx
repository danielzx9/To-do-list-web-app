import React, { useState } from 'react';
import Button from '../ui/Button.jsx';
import Input from '../ui/Input.jsx';

const NewTaskForm = ({ onSubmit, disabled = false }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="¿Qué necesitas hacer hoy?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={disabled}
          className="form-input flex-1"
          maxLength={100}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!title.trim() || disabled}
          size="md"
          className="btn btn-primary"
        >
          {disabled ? (
            <>
              <span className="loading-spinner mr-2"></span>
              Agregando...
            </>
          ) : (
            'Agregar'
          )}
        </Button>
      </div>
      {title.length > 80 && (
        <p className="text-sm text-gray-500 mt-2">
          {title.length}/100 caracteres
        </p>
      )}
    </form>
  );
};

export default NewTaskForm;
