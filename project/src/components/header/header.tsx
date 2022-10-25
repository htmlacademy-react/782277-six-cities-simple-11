import {PropsWithChildren} from 'react';

type HeaderProps = PropsWithChildren;

export default function Header({children}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" width="81" height="41" alt="6 cities logo" />
            </a>
          </div>

          {children}
        </div>
      </div>
    </header>
  );
}
