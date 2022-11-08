import {formatFirstLetter} from '../../utils';

type LocationItemProps = {
  location: string;
};

export default function LocationItem({location}: LocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#todo">
        <span>{formatFirstLetter(location)}</span>
      </a>
    </li>
  );
}

// TODO класс выбранного города tabs__item--active, удалить у него href
