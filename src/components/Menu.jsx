import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../redux/actions/user';
import { formatDate } from '../config/date';

export const Menu = ({ handleShowModal }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const userData = useSelector(({ user }) => user.userData);
  const isAuth = useSelector(({ user }) => user.isAuth);

  const handleClickLogout = () => {
    if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logoutSuccess());
      navigate('/');
    } else if (!isAuth) {
      handleShowModal(true);
    }
  };

  return (
    <nav className={menuOpen ? 'menu' : 'menu menu--close'}>
      <div className="menu__content">
        {isAuth && (
          <div className="menu__profile">
            <p className="menu__name">{userData.fullName}</p>
            <p className="menu__date">
              Дата регистрации: {formatDate(userData.createdAt)}
            </p>
          </div>
        )}
        <ul className="menu__list">
          <li className="menu__list-item">
            <Link className={pathname === '/' ? 'active' : undefined} to="/">
              Главная
            </Link>
          </li>
          {isAuth && (
            <>
              <li className="menu__list-item">
                <Link
                  className={pathname === '/profile' ? 'active' : undefined}
                  to={`/profile/${userData._id}`}
                >
                  Мой профиль
                </Link>
              </li>
              <li className="menu__list-item">
                <Link
                  className={pathname === '/create-post' ? 'active' : undefined}
                  to="/create-post"
                >
                  Создать запись
                </Link>
              </li>
            </>
          )}
          <li className="menu__list-item">
            <Link to={isAuth && '/'} onClick={handleClickLogout}>
              {isAuth ? 'Выйти' : 'Войти'}
            </Link>
          </li>
        </ul>

        <div className="menu__footer"></div>
      </div>
      <button className="menu__btn" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="menu__btn-burger"></div>
        <span>Меню</span>
      </button>
    </nav>
  );
};
