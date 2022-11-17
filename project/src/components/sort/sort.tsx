import {useRef} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {sortOffers} from '../../store/actions';

import cn from 'classnames';

import {SORTS} from '../../const';

export default function Sort(): JSX.Element {
  const sortList = useRef<HTMLUListElement>(null);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => {
          sortList.current?.classList.toggle('places__options--opened');
        }}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul ref={sortList} className="places__options places__options--custom">
        {SORTS && SORTS.map((sort) => (
          <li
            key={sort}
            className={cn('places__option', {
              'places__option--active': sort === sortType
            })}
            tabIndex={0}
            onClick={() => {
              dispatch(sortOffers(sort));
              sortList.current?.classList.toggle('places__options--opened');
            }}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}
