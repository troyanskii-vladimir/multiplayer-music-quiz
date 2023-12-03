import { Link } from 'react-router-dom';
import { AppRoute } from '../../config';
import './header.scss'

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <Link
          className="header__logo"
          to={AppRoute.Main}
          aria-label="Переход на главную"
        >
          Главная страница
        </Link>
        {/* <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.Main}>
                Каталог
              </Link>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">
                Гарантии
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">
                Доставка
              </a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">
                О компании
              </a>
            </li>
          </ul>
        </nav> */}
        <Link className="header__basket-link" to={AppRoute.Main}>
          Профиль
        </Link>
      </div>
    </header>
  );
}

export default Header;
