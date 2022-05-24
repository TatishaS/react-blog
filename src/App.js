import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { FullPost } from './pages/FullPost';
import { CreatePost } from './pages/CreatePost';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import { checkAuth, fetchUser } from './redux/actions/user';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector(({ user }) => user.userData);
  const isAuth = useSelector(({ user }) => user.isAuth);

  const { token } = JSON.parse(window.localStorage.getItem('profile')) || [];
  React.useEffect(() => {
    if (token) {
      dispatch(checkAuth());
    }
  }, []);

  React.useEffect(() => {
    if (isAuth) {
      dispatch(fetchUser(userData._id));
    }
  }, [isAuth]);

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post/:id" element={<FullPost />} />
            <Route path="post/:id/edit" element={<CreatePost />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path="profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
