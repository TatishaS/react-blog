import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import logoSvg from '../assets/img/logo.svg';
import { ReactComponent as SearchIcon } from '../assets/img/icon-search.svg';
import { ReactComponent as WriteIcon } from '../assets/img/icon-write.svg';
import { ReactComponent as LogoutIcon } from '../assets/img/icon-logout.svg';
import { ReactComponent as ProfileIcon } from '../assets/img/icon-profile.svg';

export const Header = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isAuth, setIsAuth] = React.useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /* Проверяем, авторизованы мы или нет */
  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [pathname]);

  const handleClickLogout = () => {
    if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
      window.localStorage.removeItem('token');
      navigate('/');
      setIsAuth(false);
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

  const handleSearchQuery = event => {
    if (event.key === 'Enter') {
      console.log('enter press here! ');
      const query = searchValue;
      setSearchQuery(query);
      console.log(searchQuery);
    }
    setSearchValue('');
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/">
          <img className="header__logo" src={logoSvg} alt="logo" />
        </Link>

        {showSearch ? (
          <div className="header__search-box">
            <input
              type="text"
              className="header__search-input"
              aria-label="search"
              placeholder="Поиск статьи по заголовку или тексту..."
              onChange={event => setSearchValue(event.target.value)}
              onKeyPress={handleSearchQuery}
            />
            <button
              className="header__search-close"
              onClick={() => setShowSearch(false)}
            ></button>
          </div>
        ) : null}

        <div className="header__icons">
          <button
            className="header__icon-link header__icon-link--search"
            onClick={() => setShowSearch(true)}
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
