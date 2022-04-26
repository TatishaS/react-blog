import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from '../redux/actions/user';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: '',
    password: '',
  });

  /* Send filled in form */
  const onSubmit = async event => {
    event.preventDefault();
    // Create user object
    const user = {
      email: fields.email,
      password: fields.password,
    };

    // Attempt to login for user
    dispatch(loginUser(user));
    navigate('/');

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
