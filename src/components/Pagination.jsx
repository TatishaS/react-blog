import React from 'react';

export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__inner">
        <div className="pagination__arrows">
          <a
            className="pagination__arrow pagination__arrow--left pagination__arrow--disabled"
            href="/"
            aria-label="Previous"
          ></a>
          <a
            className="pagination__arrow pagination__arrow--right"
            href="/"
            aria-label="Next"
          ></a>
        </div>
        <span className="pagination__numbers">Страница 1 из 10</span>
      </div>
    </div>
  );
};
