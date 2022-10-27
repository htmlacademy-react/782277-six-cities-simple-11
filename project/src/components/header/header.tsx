import {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type HeaderProps = PropsWithChildren;

export default function Header({children}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" width="81" height="41" alt="6 cities logo" />
            </Link>
          </div>

          {children}
        </div>
      </div>
    </header>
  );
}