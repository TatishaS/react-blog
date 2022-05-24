import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../redux/actions/user';

export const Register = ({ handleShowRegister, handleShowModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChangeInput = event => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async event => {
    event.preventDefault();

    // Create new user
    const newUser = {
      fullName: fields.fullName,
      email: fields.email,
      password: fields.password,
    };

    // Attempt to register
    try {
      dispatch(registerUser(newUser));
      // After successful registration show login modal
      handleShowRegister(false);
      handleShowModal(true);
    } catch (error) {
      alert(error.message);
      handleShowRegister(true);
    }

    // Clear inputs
    setFields({
      fullName: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div
        className="modal-overlay modal-overlay--show"
        onClick={() => handleShowRegister(false)}
      ></div>
      <section className="signup-modal modal modal--show">
        <button
          className="modal__close-btn"
          onClick={() => handleShowRegister(false)}
        ></button>
        <h2 className="modal__title">Регистрация</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          <p className="modal__form-field">
            <label className="modal__form-label" htmlFor="name">
              Имя и фамилия
            </label>
            <input
              className="modal__form-input"
              type="text"
              name="fullName"
              value={fields.fullName}
              onChange={handleChangeInput}
              required
            />
          </p>
          <p className="modal__form-field">
            <label className="modal__form-label" htmlFor="email">
              Email
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
            Зарегистрироваться
          </button>
        </form>
      </section>
    </>
  );
};
