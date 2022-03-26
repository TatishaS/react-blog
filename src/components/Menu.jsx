import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="menu menu--close" onClick={e => setMenuOpen(!menuOpen)}>
      <div className="menu__content">
        <div className="menu__profile">
          <p className="menu__name">Вася Пупкин</p>
          <p className="menu__date">
            Дата регистрации: 12 августа 2019 в 08:06
          </p>
        </div>
        <ul className="menu__list">
          <li className="menu__list-item">
            <Link className={pathname === '/' ? 'active' : undefined} to="/">
              Главная
            </Link>
          </li>
          <li className="menu__list-item">
            <Link
              className={pathname === '/profile' ? 'active' : undefined}
              to="/profile"
            >
              Мой профиль
            </Link>
          </li>
          <li className="menu__list-item">
            <Link
              className={pathname === '/post-editor' ? 'active' : undefined}
              to="/post-editor"
            >
              Создать запись
            </Link>
          </li>
          <li className="menu__list-item">
            <Link to="/logout">Выйти</Link>
          </li>
        </ul>

        <div className="menu__footer"></div>
      </div>
      <button className="menu__btn">
        <div className="menu__btn-burger"></div>
        <span>Меню</span>
      </button>
    </nav>
  );
};
