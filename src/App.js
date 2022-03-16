import logoSvg from './assets/img/logo.svg';
import authorImg from './assets/img/author.jpg';
import postImg from './assets/img/post-1.jpg';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <nav className="menu">
            <div className="menu__content">
              <span className="menu__name">Вася Пупкин</span>
              <span className="menu__date">
                Дата регистрации: 12 августа 2019 в 08:06
              </span>
              <ul className="menu__list">
                <li className="menu__list-item">Главная</li>
                <li className="menu__list-item">Мой профиль</li>
                <li className="menu__list-item">Создать запись</li>
                <li className="menu__list-item">Выйти</li>
              </ul>
            </div>
            <button className="menu__btn">Меню</button>
          </nav>
          <div className="page__container">
            <header className="header">
              <div className="header__inner">
                <img className="header__logo" src={logoSvg} alt="logo" />
                {/* 
                <div className="header__search-box">
                  <input
                    type="text"
                    className="header__search-input"
                    aria-label="search"
                    placeholder="Поиск статьи по заголовку или тексту..."
                  />
                  <button className="header__search-close"></button>
                </div> */}
                <div className="header__icons">
                  <a
                    class="header__icon-link header__icon-link--search"
                    href="/"
                  >
                    <svg
                      className="header__icon header__icon--search"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.7043 16.2848L14.3054 12.8958C15.402 11.4988 15.9971 9.77351 15.9948 7.99743C15.9948 6.41569 15.5258 4.86947 14.647 3.5543C13.7683 2.23913 12.5192 1.21408 11.0579 0.608771C9.59657 0.00346513 7.98855 -0.15491 6.43721 0.153672C4.88586 0.462254 3.46085 1.22393 2.34239 2.34239C1.22393 3.46085 0.462254 4.88586 0.153672 6.43721C-0.15491 7.98855 0.00346513 9.59657 0.608771 11.0579C1.21408 12.5192 2.23913 13.7683 3.5543 14.647C4.86947 15.5258 6.41569 15.9948 7.99743 15.9948C9.77351 15.9971 11.4988 15.402 12.8958 14.3054L16.2848 17.7043C16.3777 17.798 16.4883 17.8724 16.6101 17.9231C16.7319 17.9739 16.8626 18 16.9945 18C17.1265 18 17.2572 17.9739 17.379 17.9231C17.5008 17.8724 17.6114 17.798 17.7043 17.7043C17.798 17.6114 17.8724 17.5008 17.9231 17.379C17.9739 17.2572 18 17.1265 18 16.9945C18 16.8626 17.9739 16.7319 17.9231 16.6101C17.8724 16.4883 17.798 16.3777 17.7043 16.2848ZM1.99936 7.99743C1.99936 6.81112 2.35114 5.65146 3.01022 4.66508C3.66929 3.6787 4.60606 2.90991 5.70207 2.45593C6.79807 2.00196 8.00408 1.88317 9.16759 2.11461C10.3311 2.34605 11.3999 2.91731 12.2387 3.75615C13.0775 4.595 13.6488 5.66375 13.8802 6.82726C14.1117 7.99077 13.9929 9.19678 13.5389 10.2928C13.0849 11.3888 12.3162 12.3256 11.3298 12.9846C10.3434 13.6437 9.18373 13.9955 7.99743 13.9955C6.40664 13.9955 4.88101 13.3636 3.75615 12.2387C2.6313 11.1138 1.99936 9.58821 1.99936 7.99743Z"
                        fill="#DEDEDE"
                      />
                    </svg>
                  </a>

                  <a className="header__icon-link" href="/">
                    <svg
                      className="header__icon header__icon--profile"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.02295 0C8.09585 0 7.18957 0.277811 6.41871 0.798302C5.64786 1.31879 5.04705 2.05859 4.69226 2.92413C4.33748 3.78968 4.24465 4.7421 4.42552 5.66095C4.60639 6.57981 5.05283 7.42384 5.70839 8.0863C6.36395 8.74875 7.19918 9.1999 8.10846 9.38267C9.01775 9.56544 9.96025 9.47163 10.8168 9.11311C11.6733 8.75459 12.4054 8.14746 12.9205 7.36849C13.4355 6.58952 13.7104 5.6737 13.7104 4.73684C13.7104 3.48055 13.2166 2.27572 12.3375 1.38739C11.4584 0.499059 10.2662 0 9.02295 0ZM9.02295 7.57895C8.46669 7.57895 7.92292 7.41226 7.46041 7.09997C6.99789 6.78767 6.63741 6.3438 6.42454 5.82447C6.21167 5.30514 6.15597 4.73369 6.26449 4.18237C6.37301 3.63106 6.64088 3.12465 7.03421 2.72717C7.42755 2.32969 7.92869 2.05901 8.47426 1.94935C9.01983 1.83968 9.58533 1.89597 10.0992 2.11108C10.6132 2.32619 11.0524 2.69047 11.3615 3.15785C11.6705 3.62523 11.8354 4.17473 11.8354 4.73684C11.8354 5.49062 11.5391 6.21352 11.0117 6.74651C10.4842 7.27951 9.76887 7.57895 9.02295 7.57895ZM17.4604 18V17.0526C17.4604 15.2938 16.769 13.6071 15.5383 12.3634C14.3076 11.1197 12.6384 10.4211 10.8979 10.4211H7.14795C5.40747 10.4211 3.73827 11.1197 2.50756 12.3634C1.27685 13.6071 0.585449 15.2938 0.585449 17.0526V18H2.46045V17.0526C2.46045 15.7963 2.95431 14.5915 3.83339 13.7032C4.71246 12.8148 5.90475 12.3158 7.14795 12.3158H10.8979C12.1412 12.3158 13.3334 12.8148 14.2125 13.7032C15.0916 14.5915 15.5854 15.7963 15.5854 17.0526V18H17.4604Z"
                        fill="#DEDEDE"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </header>

            <main className="page page--main">
              <div className="page__inner">
                <section className="about">
                  <h1 className="about__title">Vasya Pupkin</h1>
                  <h2 className="about__subtitle">
                    Блог фронтенд-разработчика
                  </h2>
                  <img
                    className="about__img"
                    src={authorImg}
                    alt="Фото Васи"
                    width="584"
                    height="422"
                  />
                  <h3 className="about__content-title">Обо мне</h3>
                  <p className="about__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean scelerisque diam arcu risus. Imperdiet dolor,
                    porttitor pellentesque fringilla aliquet sit. Turpis arcu
                    vitae quis nunc suscipit. Mattis scelerisque leo curabitur
                    faucibus. Nec, sed porta ac enim. Mattis quam accumsan ipsum
                    commodo sed purus mi. Platea sit lectus neque, nulla sapien
                    vitae nulla. Nisl viverra viverra quis mattis tincidunt
                    laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
                    phasellus malesuada non nisi.
                  </p>
                </section>
                <aside className="posts">
                  <ul className="posts__list">
                    <li className="posts__list-item post">
                      <div className="post__content">
                        <a className="post__title-link" href="/">
                          <h6 className="post__title">
                            JavaScript: Как с помощью Dadata определить город по
                            IP?
                          </h6>
                        </a>
                        <p className="post__text">
                          На работе потребовалось запилить задачу для
                          автоматического определения города при совершении
                          заказа. Было решено сделать это на фронте, ибо бек был
                          занят.
                        </p>
                        <div className="post__footer">
                          <span className="post__date">
                            12 августа 2019 в 08:06{' '}
                          </span>
                          <span className="post__views">301</span>
                        </div>
                      </div>
                      <img
                        className="post__img"
                        src={postImg}
                        alt="Post-1"
                        width="165"
                        height="165"
                      />
                    </li>
                    <li className="posts__list-item post">
                      <div className="post__content">
                        <a className="post__title-link" href="/">
                          <h6 className="post__title">
                            JavaScript: Как с помощью Dadata определить город по
                            IP?
                          </h6>
                        </a>
                        <p className="post__text">
                          На работе потребовалось запилить задачу для
                          автоматического определения города при совершении
                          заказа. Было решено сделать это на фронте, ибо бек был
                          занят.
                        </p>
                        <div className="post__footer">
                          <span className="post__date">
                            12 августа 2019 в 08:06
                          </span>
                          <span className="post__views">301</span>
                        </div>
                      </div>
                      <img
                        className="post__img"
                        src={''}
                        alt=""
                        width=""
                        height=""
                      />
                    </li>
                    <li className="posts__list-item post">
                      <div className="post__content">
                        <a className="post__title-link" href="/">
                          <h6 className="post__title">
                            JavaScript: Как с помощью Dadata определить город по
                            IP?
                          </h6>
                        </a>
                        <p className="post__text">
                          На работе потребовалось запилить задачу для
                          автоматического определения города при совершении
                          заказа. Было решено сделать это на фронте, ибо бек был
                          занят.
                        </p>
                        <div className="post__footer">
                          <span className="post__date">
                            12 августа 2019 в 08:06{' '}
                          </span>
                          <span className="post__views">301</span>
                        </div>
                      </div>
                      <img
                        className="post__img"
                        src={postImg}
                        alt="Post-1"
                        width="165"
                        height="165"
                      />
                    </li>
                    <li className="posts__list-item post">
                      <div className="post__content">
                        <a className="post__title-link" href="/">
                          <h6 className="post__title">
                            JavaScript: Как с помощью Dadata определить город по
                            IP?
                          </h6>
                        </a>
                        <p className="post__text">
                          На работе потребовалось запилить задачу для
                          автоматического определения города при совершении
                          заказа. Было решено сделать это на фронте, ибо бек был
                          занят.
                        </p>
                        <div className="post__footer">
                          <span className="post__date">
                            12 августа 2019 в 08:06{' '}
                          </span>
                          <span className="post__views">301</span>
                        </div>
                      </div>
                      <img
                        className="post__img"
                        src={''}
                        alt=""
                        width=""
                        height=""
                      />
                    </li>
                  </ul>
                </aside>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="modal-overlay"></div>
      <section className="login-modal modal">
        <h2 className="modal__title">Вход в аккаунт</h2>
        <form className="modal__form">
          <p className="modal__form-field">
            <label className="modal__form-label" for="email">
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
            <label className="modal__form-label" for="password">
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
      <section className="signup-modal modal">
        <h2 className="modal__title">Регистрация</h2>
        <form className="modal__form">
          <p className="modal__form-field">
            <label className="modal__form-label" for="name">
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
            <label className="modal__form-label" for="email">
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
            <label className="modal__form-label" for="password">
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
    </div>
  );
}

export default App;
