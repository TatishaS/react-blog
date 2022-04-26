import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { PostsList } from '../components/PostsList';
import { formatDate } from '../config/date';

export const Profile = () => {
  const userData = useSelector(({ user }) => user.userData);
  const isAuth = useSelector(({ user }) => user.isAuth);

  /* Проверяем, авторизован ли пользователь */
  const profile = JSON.parse(window.localStorage.getItem('profile')) || [];
  if (!profile) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <Menu />
      <div className="profile__inner">
        <section className="section profile">
          <h1 className="profile__title">
            {userData ? userData.fullName : null}
          </h1>
          <p className="profile__date">
            Дата регистрации:{' '}
            <span>{userData ? formatDate(userData.createdAt) : null}</span>
          </p>
        </section>
        <PostsList />
      </div>
    </>
  );
};
