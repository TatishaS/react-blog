import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

import { Comment } from '../components/Comment';
import { EmptyComment } from '../components/Comment/EmptyComment';
import { PostItem } from '../components/PostItem';
import { EmptyPost } from '../components/PostItem/EmptyPost';

import { removePost, fetchPost, saveCurrentId } from '../redux/actions/posts';

import { formatDate } from '../config/date';

export const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(({ user }) => user.userData);
  const isAuth = useSelector(({ user }) => user.isAuth);
  const userPosts = useSelector(({ user }) => user.userData.posts.items);
  const userComments = useSelector(({ user }) => user.userData.comments.items);
  const [toggleItems, setToggleItems] = React.useState(1);

  // Check is user is authorized
  const profile = JSON.parse(window.localStorage.getItem('profile')) || [];

  if (!profile) {
    return <Navigate to="/" />;
  }

  // Handling post remove
  const handleClickRemove = id => {
    if (window.confirm('Вы хотите удалить пост?')) {
      dispatch(removePost(id));
    }
  };

  // Handling post editing
  const handleClickEdit = id => {
    if (window.confirm('Вы хотите внести изменения в пост?')) {
      dispatch(saveCurrentId(id));
      dispatch(fetchPost(id));
    }
  };

  // Toggle state of active tab
  const toggleTab = index => {
    setToggleItems(index);
  };

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
        <div className="filter__tabs">
          <button
            className={
              toggleItems === 1
                ? 'filter__tab filter__tab--active'
                : 'filter__tab'
            }
            label="Статьи"
            onClick={() => toggleTab(1)}
          >
            Статьи
          </button>
          <button
            className={
              toggleItems === 2
                ? 'filter__tab filter__tab--active'
                : 'filter__tab'
            }
            label="Комментарии"
            onClick={() => toggleTab(2)}
          >
            Комментарии
          </button>
        </div>
        <div className="profile__content-tabs">
          {toggleItems === 1 ? (
            <ul className="posts__list">
              {userData && userPosts.length ? (
                userPosts.map(obj => (
                  <PostItem
                    obj={obj}
                    id={obj._id}
                    key={obj._id}
                    onRemove={handleClickRemove}
                    onEdit={handleClickEdit}
                  />
                ))
              ) : (
                <EmptyPost />
              )}
            </ul>
          ) : (
            <ul className="comments__list">
              {userData && userComments.length ? (
                userComments.map(obj => (
                  <Comment key={obj._id} obj={obj} id={obj._id} />
                ))
              ) : (
                <EmptyComment />
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
