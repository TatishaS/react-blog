import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../config/date';
import { useSelector } from 'react-redux';

export const PostItem = ({ obj, onRemove, isActive, onEdit }) => {
  const isAuth = useSelector(({ user }) => user.isAuth);

  return (
    <li className={isActive ? 'post post--active' : 'post'} key={obj._id}>
      <div className="post__content">
        <Link to={`/post/${obj._id}`} className="post__title-link">
          <h6 className="post__title">{obj.title}</h6>
        </Link>
        <p className="post__text">{obj.description.substring(0, 100)}...</p>
        <div className="post__footer">
          <span className="post__date">{formatDate(obj.createdAt)}</span>
          <span className="post__views">{obj.views}</span>
        </div>
        {isAuth ? (
          <div className="post__edit">
            <Link
              to={`/post/${obj._id}/edit`}
              className="post__edit-btn"
              onClick={() => onEdit(obj._id)}
            >
              Edit
            </Link>
            <button
              className="post__remove-btn"
              onClick={() => onRemove(obj._id)}
            >
              Remove
            </button>
          </div>
        ) : null}
      </div>
      <img
        className="post__img"
        src={`http://localhost:5656${obj.photoUrl}`}
        alt="Post-1"
        width="165"
        height="165"
      />
    </li>
  );
};
