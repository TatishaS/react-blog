import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: '',
    password: '',
  });

  const onSubmit = async event => {
    event.preventDefault();
    const user = {
      email: fields.email,
      password: fields.password,
    };

    console.log(user);

    try {
      const resp = await axios.post('http://localhost:5656/auth/login', user);
      console.log(resp);

      if (resp.data) {
        /*После авторизации сохраняем токен и переходим в профиль */
        const { token } = resp.data;
        localStorage.setItem('token', token);
       
        alert('Поздравляем! Вы авторизованы.');
        navigate('/profile');
      }
    } catch (err) {
      console.log(err);
      alert('Неверный логин или пароль');
    }

    setFields({
      email: '',
      password: '',
    });
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
