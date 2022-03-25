import React from 'react';
import { Navigate } from 'react-router-dom';

export const Profile = () => {
  /* Проверяем, авторизован ли пользователь */
  if (!window.localStorage.getItem('token')) {
    return <Navigate to="/" />;
  }
  return (
    <section className="section editor">
      <h1>Закрытый профиль - Информация о профиле пользователя</h1>
    </section>
  );
};
