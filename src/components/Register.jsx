import React from 'react';

export const Register = () => {
  return (
    <>
      <div className="modal-overlay modal-overlay--show"></div>
      <section className="signup-modal modal modal--show">
        <h2 className="modal__title">Регистрация</h2>
        <form className="modal__form">
          <p className="modal__form-field">
            <label className="modal__form-label" htmlFor="name">
              Имя и фамилия
            </label>
            <input
              className="modal__form-input"
              type="text"
              placeholder="Иван Иванов"
              name="name"
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
              placeholder="hudson@gmail.com"
              name="email"
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
