import React from 'react';
import { PostsList } from '../components/PostsList';
import authorImg from '../assets/img/author.jpg';

export const Home = () => {
  return (
    <>
      <section className="section about">
        <h1 className="about__title">Vasya Pupkin</h1>
        <h2 className="about__subtitle">Блог юного фронтенд-разработчика</h2>
        <img
          className="about__img"
          src={authorImg}
          alt="Фото Васи"
          width="584"
          height="422"
        />
        <h3 className="about__content-title">Обо мне</h3>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
          fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
          scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
          quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
          nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
          laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus
          malesuada non nisi.
        </p>
      </section>
      <PostsList />
    </>
  );
};
