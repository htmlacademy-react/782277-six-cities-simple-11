import {memo, useState} from 'react';
import cn from 'classnames';

import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeSort} from '../../store/app-process/app-process';

import {SORTS} from '../../const';


type SortProps = {
  sortType: string;
}

function Sort({sortType}: SortProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [toggleList, setToggleList] = useState<boolean>(false);

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
            }}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default memo(Sort);
