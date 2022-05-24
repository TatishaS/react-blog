import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from '../redux/actions/user';

export const Login = ({ handleShowModal, handleShowRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: '',
    password: '',
  });

  const handleChangeInput = event => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  // Send filled in form
  const onSubmit = async event => {
    event.preventDefault();
    // Create user object
    const user = {
      email: fields.email,
      password: fields.password,
    };

    // Attempt to login for user
    try {
      dispatch(loginUser(user));
      handleShowModal(false);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }

    setFields({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div
        className="modal-overlay modal-overlay--show"
        onClick={() => handleShowModal(false)}
      ></div>
      <section className="login-modal modal modal--show">
        <button
          className="modal__close-btn"
          onClick={() => handleShowModal(false)}
        ></button>
        <h2 className="modal__title">Вход в аккаунт</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          <p className="modal__form-field">
            <label className="modal__form-label" htmlFor="email">
              E-mail
            </label>
            <input
              className="modal__form-input"
              type="email"
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
        <button
          className="modal__reg-btn"
          onClick={() => handleShowRegister(true)}
        >
          Зарегистрироваться
        </button>
      </section>
    </>
  );
};
