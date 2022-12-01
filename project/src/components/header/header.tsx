import {memo} from 'react';
import {Link} from 'react-router-dom';
import UserNavigation from '../user-navigation/user-navigation';
import {AppRoute} from '../../const';

type HeaderProps = {
  withNavigation?: boolean;
}

function Header({withNavigation}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" width="81" height="41" alt="Six cities logo." />
            </Link>
          </div>

          {withNavigation && <UserNavigation />}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
