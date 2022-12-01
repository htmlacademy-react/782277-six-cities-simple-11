import {memo} from 'react';
import LocationItem from '../location-item/location-item';
import {Location} from '../../const';

export const LOCATIONS: Location[] = Object.values(Location);

function LocationList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((location) => (
            <LocationItem
              key={location}
              location={location}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(LocationList);
