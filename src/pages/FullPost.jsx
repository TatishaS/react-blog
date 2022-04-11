import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { Comment } from '../components/Comment';
import { fetchPost } from '../redux/actions/posts';
import { formatDate} from '../config/date';
//import postImg from '../assets/img/post-1.jpg';

export const FullPost = () => {
  const  post = useSelector( ({posts}) => posts.postData);
  console.log(post);
  //const isLoaded = useSelector(({ posts }) => posts.isLoaded);
  const dispatch = useDispatch();
  let params = useParams();
  console.log(params);

  //const post = posts.find(obj => Number(obj._id) === Number(params.id));
  const postId = params.id;

  console.log(postId);
  console.log(post.text);

  React.useEffect(() => {
    dispatch(fetchPost(postId));
  }, [postId]);
 
 
  return (
    <>
      <section className="fullpost">
        <div
          className="fullpost__header" 
          style={{
            backgroundImage: `url("http://localhost:5656${post.photoUrl}")`,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundSize: 'cover',
          }}
        >
          <div className="fullpost__header-inner">
          <div className="fullpost__data">
            <span className="post__date">{formatDate(post.createdAt)}</span>
            <span className="post__views">{post.views}</span>
          </div>
          <h1 className="fullpost__title">{post.title}</h1>
          <p className="fullpost__descr">
            {post.description}
          </p>
          </div>
        </div>
        <div className="fullpost__content">
          <div className="fullpost__text">{post.text && parse(post.text)}</div>
          <div className="fullpost__comments comments">
            <h2 className="comments__title">Комментарии (3)</h2>
            <ul className="comments__list">
              <Comment />
              <Comment />
              <Comment />
            </ul>
            <form className="comments__form">
              <h3 className="comments__form-title">Добавить комментарий</h3>
              <textarea className="comments__form-textarea" rows="5"></textarea>
              <button className="comments__form-btn">Отправить</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
