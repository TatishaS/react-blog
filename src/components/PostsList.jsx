import React from 'react';
import { Link } from 'react-router-dom';
import postImg from '../assets/img/post-1.jpg';

export const posts = [
  {
    _id: '1',
    title: 'Заголовок 1',
    text: 'На работе потребовалось запилить задачу для автоматического определения города при совершении заказа. Было решено сделать это на фронте, ибо бек был занят.',
    views: 0,
    user: {
      _id: '61c773aa09ab4d6ab0083a8a',
      fullName: 'Vasya Pupkin',
      email: 'test@test.ru',
      password: '$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m',
      createdAt: '2021-12-25T19:40:26.074Z',
      updatedAt: '2021-12-25T19:40:26.074Z',
      __v: 0,
    },
    createdAt: '2021-12-27T19:03:44.876Z',
    updatedAt: '2021-12-27T19:31:59.093Z',
    __v: 0,
  },
  {
    _id: '2',
    title: 'Заголовок 2',
    text: 'Текст статьи 2',
    views: 0,
    user: {
      _id: '61c773aa09ab4d6ab0083a8a',
      fullName: 'Vasya Pupkin',
      email: 'test@test.ru',
      password: '$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m',
      createdAt: '2021-12-26T19:40:26.074Z',
      updatedAt: '2021-12-26T19:40:26.074Z',
      __v: 0,
    },
    createdAt: '2021-12-28T19:03:44.876Z',
    updatedAt: '2021-12-28T19:31:59.093Z',
    __v: 0,
  },
  {
    _id: '3',
    title: 'Заголовок 3',
    text: 'Текст статьи 3',
    views: 0,
    user: {
      _id: '61c773aa09ab4d6ab0083a8a',
      fullName: 'Vasya Pupkin',
      email: 'test@test.ru',
      password: '$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m',
      createdAt: '2021-12-27T19:40:26.074Z',
      updatedAt: '2021-12-27T19:40:26.074Z',
      __v: 0,
    },
    createdAt: '2021-12-29T19:03:44.876Z',
    updatedAt: '2021-12-29T19:31:59.093Z',
    __v: 0,
  },
  {
    _id: '4',
    title: 'Заголовок 4',
    text: 'Текст статьи 4',
    views: 0,
    user: {
      _id: '61c773aa09ab4d6ab0083a8a',
      fullName: 'Vasya Pupkin',
      email: 'test@test.ru',
      password: '$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m',
      createdAt: '2021-12-27T19:40:26.074Z',
      updatedAt: '2021-12-27T19:40:26.074Z',
      __v: 0,
    },
    createdAt: '2021-12-30T19:03:44.876Z',
    updatedAt: '2021-12-30T19:31:59.093Z',
    __v: 0,
  },
];
console.log(posts);

export const PostsList = () => {
  return (
    <aside className="posts">
      <ul className="posts__list">
        {posts.map(obj => (
          <li className="posts__list-item post" key={obj._id}>
            <div className="post__content">
              <Link to={`/post/${obj._id}`} className="post__title-link">
                <h6 className="post__title">{obj.title}</h6>
              </Link>
              <p className="post__text">{obj.text.substring(0, 100)}...</p>
              <div className="post__footer">
                <span className="post__date">{obj.createdAt}</span>
                <span className="post__views">{obj.views}</span>
              </div>
            </div>
            <img
              className="post__img"
              src={postImg}
              alt="Post-1"
              width="165"
              height="165"
            />
          </li>
        ))}
        {/*         <li className="posts__list-item post">
          <div className="post__content">
            <Link to="/post/" className="post__title-link">
              <h6 className="post__title">
                JavaScript: Как с помощью Dadata определить город по IP?
              </h6>
            </Link>
            <p className="post__text">
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </p>
            <div className="post__footer">
              <span className="post__date">12 августа 2019 в 08:06 </span>
              <span className="post__views">301</span>
            </div>
          </div>
          <img
            className="post__img"
            src={postImg}
            alt="Post-1"
            width="165"
            height="165"
          />
        </li>
        <li className="posts__list-item post">
          <div className="post__content">
            <Link to="/post/" className="post__title-link">
              <h6 className="post__title">
                JavaScript: Как с помощью Dadata определить город по IP?
              </h6>
            </Link>
            <p className="post__text">
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </p>
            <div className="post__footer">
              <span className="post__date">12 августа 2019 в 08:06</span>
              <span className="post__views">301</span>
            </div>
          </div>
          <img className="post__img" src={''} alt="" width="" height="" />
        </li>
        <li className="posts__list-item post">
          <div className="post__content">
            <Link to="/post/" className="post__title-link">
              <h6 className="post__title">
                JavaScript: Как с помощью Dadata определить город по IP?
              </h6>
            </Link>
            <p className="post__text">
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </p>
            <div className="post__footer">
              <span className="post__date">12 августа 2019 в 08:06 </span>
              <span className="post__views">301</span>
            </div>
          </div>
          <img
            className="post__img"
            src={postImg}
            alt="Post-1"
            width="165"
            height="165"
          />
        </li>
        <li className="posts__list-item post">
          <div className="post__content">
            <Link to="/post/" className="post__title-link">
              <h6 className="post__title">
                JavaScript: Как с помощью Dadata определить город по IP?
              </h6>
            </Link>
            <p className="post__text">
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </p>
            <div className="post__footer">
              <span className="post__date">12 августа 2019 в 08:06 </span>
              <span className="post__views">301</span>
            </div>
          </div>
          <img className="post__img" src={''} alt="" width="" height="" />
        </li> */}
      </ul>
    </aside>
  );
};
