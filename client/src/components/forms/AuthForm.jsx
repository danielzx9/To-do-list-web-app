import React, { useState } from 'react';
import Button from '../ui/Button.jsx';
import Login from '../../pages/Login.jsx';
import Register from '../../pages/Register.jsx';

const AuthForm = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="w-full">
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button 
          className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
            showLogin 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setShowLogin(true)}
        >
          Iniciar Sesión
        </button>
        <button 
          className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
            !showLogin 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setShowLogin(false)}
        >
          Registrarse
        </button>
      </div>
      
      {showLogin ? <Login /> : <Register />}
    </div>
  );
};

export default AuthForm;
