import React from 'react';

export const Login = () => {
  return (
    <>
      <div className="modal-overlay modal-overlay--show"></div>
      <section className="login-modal modal modal--show">
        <h2 className="modal__title">Вход в аккаунт</h2>
        <form className="modal__form">
          <p className="modal__form-field">
            <label className="modal__form-label" htmlFor="email">
              E-mail
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
            Войти
          </button>
        </form>
      </section>
    </>
  );
};
