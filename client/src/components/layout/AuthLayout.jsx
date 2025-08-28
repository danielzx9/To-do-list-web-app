import React from 'react';

const AuthLayout = ({ children, title = "To-Do List App" }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 animate-fade-in">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
