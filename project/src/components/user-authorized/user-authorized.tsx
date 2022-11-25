import './user-authorized.css';
import {Fragment, MouseEvent} from 'react';

import {logoutAction} from '../../store/api-action';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';

export default function UserAuthorized(): JSX.Element {
  const {name, email, avatarUrl} = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              className="header__avatar-image"
              src={avatarUrl ?? './img/avatar.svg'}
              width="20"
              height="20"
              alt={name ?? 'User avatar.'}
            />
          </div>
          <span className="header__user-name user__name">{email ?? name}</span>
        </div>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href="#todo"
          onClick={(event: MouseEvent) => {
            event.preventDefault();

            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </Fragment>
  );
}
