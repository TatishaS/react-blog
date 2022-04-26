import React from 'react';
import { formatDate } from '../../config/date';

export const Comment = ({ obj }) => {
  const { user, createdAt, text } = obj;

  return (
    <li className="comments__item comment">
      <div className="comment__header">
        <span className="comment__name">{user.fullName}</span>
        <span className="comment__date">{formatDate(createdAt)}</span>
      </div>
      <p className="comment__text">{text}</p>
    </li>
  );
};
