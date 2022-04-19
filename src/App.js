import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { FullPost } from './pages/FullPost';
import { CreatePost } from './pages/CreatePost';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';

import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="post/:id" element={<FullPost />} />
          <Route path="post/:id/edit" element={<CreatePost />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
