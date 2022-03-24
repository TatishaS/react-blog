import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Menu } from './Menu';
import { PostsList } from './PostsList';

export const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
      <main className="page page--main">
        <div className="page__inner">
          <Outlet />
          <PostsList />
        </div>
      </main>
    </>
  );
};