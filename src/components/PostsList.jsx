import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, saveCurrentId } from '../redux/actions/posts';
import { PostItem } from './PostItem';
import { ErrorBlock } from '../components/ErrorBlock';

export const PostsList = ({
  posts,
  pageCount,
  page,
  onPrevPage,
  onNextPage,
  onRemove,
}) => {
  const dispatch = useDispatch();

  let params = useParams();
  const postId = params.id;

  if (!posts.length) return <ErrorBlock />;

  const handleClickEdit = id => {
    if (window.confirm('Вы хотите внести изменения в пост?')) {
      dispatch(saveCurrentId(id));
      dispatch(fetchPost(id));
    }
  };

  return (
    <>
      <article className="posts">
        <ul className="posts__list">
          {posts?.map(obj => (
            <PostItem
              obj={obj}
              id={obj._id}
              key={obj._id}
              onRemove={() => onRemove(obj._id)}
              isActive={obj._id === postId}
              onEdit={handleClickEdit}
            />
          ))}
        </ul>
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
      </article>
    </>
  );
};
