import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { Comment } from '../components/Comment';
import { PostLoadingBlock } from '../components/PostLoadingBlock';
import { fetchPost } from '../redux/actions/posts';
import { addComment, fetchPostComments } from '../redux/actions/comments';
import { formatDate } from '../config/date';
import { EmptyComment } from '../components/Comment/EmptyComment';

export const FullPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(({ user }) => user.isAuth);
  const post = useSelector(({ posts }) => posts.postData);
  const postLoaded = useSelector(({ posts }) => posts.postLoaded);

  const commentsArr = useSelector(({ comments }) => comments.comments);
  const id = useSelector(({ comments }) => comments.commentedPostId);
  const commentsLoaded = useSelector(({ comments }) => comments.commentsLoaded);

  const [comments, setComments] = React.useState(commentsArr);
  const [comment, setComment] = React.useState('');

  let params = useParams();
  const postId = params.id;

  /* Watch the post id in the browser */
  React.useEffect(() => {
    dispatch(fetchPost(postId));
  }, [postId]);

  /*  React.useEffect(() => {
    dispatch(fetchPostComments(id));
  }, []);
 */
  React.useEffect(() => {
    dispatch(fetchPostComments(postId));
    setComments(commentsArr);
  }, [postId, id]);

  const onAddComment = async comment => {
    const newComment = await dispatch(addComment(comment));
    setComments(comments => [...comments, newComment]);
  };

  const handleSubmitComment = event => {
    event.preventDefault();

    if (!isAuth) {
      alert('Вы не авторизованы. Авторизуйтесь и оставьте свое мнение');
      navigate('/login');
    }

    if (comment.trim()) {
      // Create new comment object
      const newComment = {
        text: comment,
        postId: params.id,
      };

      // Add new comment to database
      onAddComment(newComment);

      // Clear comment textarea
      setComment('');
    } else {
      alert('Вы не заполнили поле комментария.');
    }
  };

  return (
    <>
      {postLoaded ? (
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
              <p className="fullpost__descr">{post.description}</p>
            </div>
          </div>
          <div className="fullpost__content">
            <div className="fullpost__text">
              {post.text && parse(post.text)}
            </div>
            <div className="fullpost__comments comments">
              <h2 className="comments__title">
                Комментарии {`(${comments.length})`}
              </h2>
              <ul className="comments__list">
                {commentsLoaded && comments.length ? (
                  comments.map(obj => (
                    <Comment key={obj._id} obj={obj} id={obj._id} />
                  ))
                ) : (
                  <EmptyComment />
                )}
              </ul>
              <form className="comments__form" onSubmit={handleSubmitComment}>
                <h3 className="comments__form-title">Добавить комментарий</h3>
                <textarea
                  className="comments__form-textarea"
                  rows="5"
                  value={comment}
                  onChange={event => setComment(event.target.value)}
                ></textarea>
                <button className="comments__form-btn" type="submit">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <PostLoadingBlock />
      )}
    </>
  );
};
