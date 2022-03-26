import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: '',
    password: '',
  });

  //https://mentor.archakov.im/api/mock/login?email=test@test.ru&password=123456
  //http://localhost:5656/auth/login?email=${fields.email}&password=${fields.password}
  //http://localhost:5656/auth/login?email=${fields.email}&password=${fields.password}

  const onSubmit = async event => {
    event.preventDefault();
    const resp = await fetch(
      `/auth/login?email=${fields.email}&password=${fields.password}`
    );

    if (resp.ok) {
      /* Сохраняем ответ от бэкэнда - token- в localStorage */
      const { token } = await resp.json();
      window.localStorage.setItem('token', token);

      /*После авторизации переходим в профиль */
      navigate('/profile');
      alert('Авторизация прошла успешно');
    } else alert('Неверный логин или пароль');
  };

  const handleChangeInput = event => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="modal-overlay modal-overlay--show"></div>
      <section className="login-modal modal modal--show">
        <h2 className="modal__title">Вход в аккаунт</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          <p className="modal__form-field">
            <label className="modal__form-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="modal__form-input"
              type="email"
              placeholder="hudson@gmail.com"
              name="email"
              value={fields.email}
              onChange={handleChangeInput}
              required
            />
          </p>
          <p className="modal__form-field">
            <label className="modal__form-label" htmlFor="password">
              Password
            </label>
            <input
              className="modal__form-input"
              type="password"
              placeholder="*******"
              name="password"
              value={fields.password}
              onChange={handleChangeInput}
              required
            />
          </p>
          <button className="modal__form-btn btn" type="submit">
            Войти
          </button>
        </form>
        <p>Еще не зарегистрированы?</p>
        <Link to="/register" className="btn">
          Зарегистрироваться
        </Link>
      </section>
    </>
  );
};
