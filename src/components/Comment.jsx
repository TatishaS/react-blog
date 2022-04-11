import React from 'react';

export const Comment = () => {
  return (
    <li className="comments__item comment">
      <div className="comment__header">
        <span className="comment__name">Igor Nikolaev</span>
        <span className="comment__date">12 августа 2019 в 08:06</span>
      </div>
      <p className="comment__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
        adipiscing leo id sed neque, diam nibh.
      </p>
    </li>
  );
};
