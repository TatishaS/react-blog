import React from 'react';
import { Navigate } from 'react-router-dom';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { PostsList } from '../components/PostsList';

export const Profile = () => {
  /* Проверяем, авторизован ли пользователь */
  if (!window.localStorage.getItem('token')) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Header />
      <Menu />
      <div className="profile__inner">
        <section className="section profile">
          <h1 className="profile__title">Вася Пупкин</h1>
          <p className="profile__date">
            Дата регистрации: <span>12 августа 2019 в 08:06</span>
          </p>
        </section>
        <PostsList />
      </div>
    </>
  );
};
