import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../config/date';

export const Comment = ({ obj, onRemove }) => {
  const isAuth = useSelector(({ user }) => user.isAuth);
  const profile = JSON.parse(window.localStorage.getItem('profile')) || [];

  const { user, createdAt, text } = obj;
  console.log(obj);
  const userId = profile._id;
  const authorId = user._id;

  return (
    <li className="comments__item comment">
      <div className="comment__header">
        <span className="comment__name">{user.fullName}</span>
        <span className="comment__date">{formatDate(createdAt)}</span>
      </div>
      <p className="comment__text">{text}</p>
      {isAuth && userId === authorId ? (
        <div className="comment__edit">
          <button
            className="comment__remove-btn"
            onClick={() => onRemove(obj._id)}
          >
            Remove
          </button>
        </div>
      ) : null}
    </li>
  );
};
