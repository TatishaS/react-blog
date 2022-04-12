import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts, removePost } from '../redux/actions/posts';

import { Pagination } from '../components/Pagination';
import { PostItem } from '../components/PostItem';

export const PostsList = () => {

  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.items.items);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);
  

  console.log(posts);
  console.log(isLoaded);

  React.useEffect(() => {
      dispatch(fetchPosts());
  }, []);

  const handleClickRemove = id => {
    if (window.confirm('Вы хотите удалить пост?')) {
      dispatch(removePost(id));
      
    }
    
  }; 



  return (
    <>
      <article className="posts">
        <ul className="posts__list">
          {isLoaded &&
            posts.map(obj => (
              <PostItem obj={obj} id={obj._id} key={obj._id} onRemove={handleClickRemove} />
            ))}
        </ul>
        <Pagination />
      </article>
    </>
  );
};
