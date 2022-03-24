import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../components/PostsList';

export const FullPost = () => {
  let params = useParams();
  const post = posts.find(obj => Number(obj._id) === Number(params.id));

  return (
    <section className="section fullpost">
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </section>
  );
};
