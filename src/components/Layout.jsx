import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Menu } from './Menu';
import { PostsList } from './PostsList';

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <Menu />
        <div className="container">
          <div className="container__inner">
            <Header />
            <PostsList />
          </div>
          <main className="page page--main">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
