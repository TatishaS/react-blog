import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = ({ page, pageCount, onNextPage, onPrevPage }) => {
  return (
    <div className="pagination">
      <div className="pagination__inner">
        <div className="pagination__arrows">
          <button
            className={
              page === 1
                ? 'pagination__arrow pagination__arrow--left pagination__arrow--disabled'
                : 'pagination__arrow pagination__arrow--left'
            }
            aria-label="Previous"
            onClick={onPrevPage}
            disabled={page === 1}
          ></button>
          <button
            className={
              page === pageCount
                ? 'pagination__arrow pagination__arrow--right pagination__arrow--disabled'
                : 'pagination__arrow pagination__arrow--right'
            }
            aria-label="Next"
            onClick={onNextPage}
            disabled={page === pageCount}
          ></button>
        </div>
        <span className="pagination__numbers">
          Страница {page} из {pageCount}
        </span>
      </div>
    </div>
  );
};
