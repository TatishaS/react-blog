import React from 'react';

import authorImg from '../assets/img/author1.jpg';

export const Home = () => {
  return (
    <>
      <section className="section about">
        <h1 className="about__title">Tati Sidorova</h1>
        <h2 className="about__subtitle">My lovely development blog</h2>
        <img
          className="about__img"
          src={authorImg}
          alt="Фото Васи"
          width="584"
          height="422"
        />
        <h3 className="about__content-title">About</h3>
        <p className="about__text">
          I'm a dedicated and inspired frontend dev. In this blog I plan to post
          my experince in testing different frontend, and - who knows? - maybe
          backend instruments. Also my thoughts, moments and impressions during
          my developer journey. You are also welcome to share your opinion: you
          can make a post after authorization or leave your comment under my
          post.
        </p>
      </section>
    </>
  );
};
