import {memo} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import UserAuthorized from '../user-authorized/user-authorized';
import UserUnauthorized from '../user-unauthorized/user-unauthorized';
import {AuthorizationStatus} from '../../constants';

function UserNavigation(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <nav className="header__nav" data-testid="user-navigation">
      <ul className="header__nav-list">
        {(authorizationStatus === AuthorizationStatus.Authorized)
          ? <UserAuthorized />
          : <UserUnauthorized />}
      </ul>
    </nav>
  );
}

export default memo(UserNavigation);
