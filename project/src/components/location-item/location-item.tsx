import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {changeLocation, updateOfferList} from '../../store/actions';

import cn from 'classnames';

type LocationItemProps = {
  location: string;
};

export default function LocationItem({location}: LocationItemProps): JSX.Element {
  const currentLocation = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': location === currentLocation
        })}
        href="#todo"
        onClick={(event) => {
          event.preventDefault();

          dispatch(changeLocation(location));
          dispatch(updateOfferList());
        }}
      >
        <span>{location}</span>
      </a>
    </li>
  );
}
