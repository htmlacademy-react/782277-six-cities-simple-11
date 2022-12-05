import cn from 'classnames';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getLocation} from '../../store/offers-data/selectors';
import {changeLocation} from '../../store/offers-data/offers-data';
import {Location} from '../../const';

type LocationItemProps = {
  location: Location;
};

function LocationItem({location}: LocationItemProps): JSX.Element {
  const currentLocation = useAppSelector(getLocation);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item" data-testid="locations-item">
      <a
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': location === currentLocation
        })}
        href="#todo"
        onClick={(event) => {
          event.preventDefault();

          dispatch(changeLocation(location));
        }}
      >
        <span>{location}</span>
      </a>
    </li>
  );
}

export default LocationItem;
