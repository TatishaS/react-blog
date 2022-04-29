import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logoSvg from '../assets/img/logo.svg';
import { ReactComponent as SearchIcon } from '../assets/img/icon-search.svg';
import { ReactComponent as WriteIcon } from '../assets/img/icon-write.svg';
import { ReactComponent as LogoutIcon } from '../assets/img/icon-logout.svg';
import { ReactComponent as ProfileIcon } from '../assets/img/icon-profile.svg';

import { logoutSuccess } from '../redux/actions/user';

export const Header = ({ handleChangeInput, searchValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(({ user }) => user.isAuth);
  const [searchVisible, setSearchVisible] = React.useState(false);

  const handleClickLogout = () => {
    if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logoutSuccess());
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleClickWrite = () => {
    if (isAuth) {
      navigate('/create-post');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/">
          <img className="header__logo" src={logoSvg} alt="logo" />
        </Link>

        {searchVisible ? (
          <div className="header__search-box">
            <input
              type="text"
              className="header__search-input"
              aria-label="search"
              placeholder="Поиск статьи по заголовку или тексту..."
              value={searchValue}
              onChange={handleChangeInput}
            />
            <button
              className="header__search-close"
              onClick={() => setSearchVisible(false)}
            ></button>
          </div>
        ) : null}

        <div className="header__icons">
          <button
            className="header__icon-link header__icon-link--search"
            onClick={() => setSearchVisible(true)}
          >
            <SearchIcon
              className="header__icon header__icon--search"
              width="18"
              height="18"
            />
          </button>

          {isAuth ? (
            <div>
              <Link
                to="/create-post"
                className="header__icon-link"
                onClick={handleClickWrite}
              >
                <WriteIcon
                  className="header__icon header__icon--write"
                  width="19"
                  height="19"
                />
              </Link>
              <Link
                to="/"
                className="header__icon-link"
                onClick={handleClickLogout}
              >
                <LogoutIcon
                  className="header__icon header__icon--logout"
                  width="23"
                  height="20"
                />
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="header__icon-link"
              onClick={handleClickLogout}
            >
              <ProfileIcon
                className="header__icon header__icon--profile"
                width="18"
                height="18"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
