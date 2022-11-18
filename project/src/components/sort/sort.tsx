import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeSort, updateOffers} from '../../store/actions';

import cn from 'classnames';

import {SORTS} from '../../const';

export default function Sort(): JSX.Element {
  const [toggleList, setToggleList] = useState<boolean>(false);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => {
          setToggleList(!toggleList);
        }}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          'places__options--opened': toggleList
        })}
      >
        {SORTS && SORTS.map((sort) => (
          <li
            key={sort}
            className={cn('places__option', {
              'places__option--active': sort === sortType
            })}
            tabIndex={0}
            onClick={() => {
              setToggleList(false);
              dispatch(changeSort(sort));
              dispatch(updateOffers());
            }}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}
