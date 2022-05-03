import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { PostsList } from '../components/PostsList';
import { fetchPosts } from '../redux/actions/posts';
import { formatDate } from '../config/date';

export const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(({ user }) => user.userData);
  const isAuth = useSelector(({ user }) => user.isAuth);
  const posts = useSelector(({ posts }) => posts.items.items);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);
  console.log(posts);
  console.log(isLoaded);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
        <PostsList posts={isLoaded && posts} />
      </div>
    </>
  );
};
