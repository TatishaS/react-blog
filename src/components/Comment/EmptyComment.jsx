import React from 'react';

export const EmptyComment = () => {
  return (
    <div className="comment">
      <p className="comment__text">
        Комментариев к посту еще нет. Оставьте первый комментарий!
      </p>
    </div>
  );
};
