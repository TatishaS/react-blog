import React from 'react';
//import axios from 'axios';
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
  /*  const [posts, setPosts] = React.useState([false]);

  const getPosts = async () => {
    const res = await axios.get('http://localhost:5656/posts');
    setPosts(res.data);
    console.log(posts);
  };

  React.useEffect(() => {
    getPosts();
  }, []); */

  const onRemove = id => {
    console.log(id);
    const updatedArr = posts.filter(obj => {
      return obj._id !== id;
    });
    console.log(updatedArr);
    return updatedArr;
  };

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
              <div className="post__edit">
                <Link to={`/post/${obj._id}/edit`} className="post__edit-btn">
                  Edit
                </Link>
                <button
                  className="post__remove-btn"
                  onClick={event => onRemove(obj._id)}
                >
                  Remove
                </button>
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
      </ul>
    </aside>
  );
};
