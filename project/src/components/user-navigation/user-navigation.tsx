import {useAppSelector} from '../../hooks/useAppSelector';

import UserAuthorized from '../user-authorized/user-authorized';
import UserUnauthorized from '../user-unauthorized/user-unauthorized';

import {AuthorizationStatus} from '../../const';

export default function UserNavigation(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {(authorizationStatus === AuthorizationStatus.Authorized)
          ? <UserAuthorized />
          : <UserUnauthorized />}
      </ul>
    </nav>
  );
}
