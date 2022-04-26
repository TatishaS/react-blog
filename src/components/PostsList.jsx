import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchPosts,
  removePost,
  fetchPost,
  saveCurrentId,
} from '../redux/actions/posts';

import { Pagination } from '../components/Pagination';
import { PostItem } from '../components/PostItem';

export const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(({ posts }) => posts.items.items);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);

  let params = useParams();
  const postId = params.id;

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleClickRemove = id => {
    if (window.confirm('Вы хотите удалить пост?')) {
      dispatch(removePost(id));
    }
  };

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
          {isLoaded &&
            posts.map(obj => (
              <PostItem
                obj={obj}
                id={obj._id}
                key={obj._id}
                onRemove={handleClickRemove}
                isActive={obj._id === postId}
                onEdit={handleClickEdit}
              />
            ))}
        </ul>
        <Pagination />
      </article>
    </>
  );
};
