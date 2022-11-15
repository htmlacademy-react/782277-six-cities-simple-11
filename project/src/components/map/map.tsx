import {useRef, useEffect} from 'react';

import cn from 'classnames';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks/useAppSelector';
import {Offers, Location} from '../../types/offer';

type MapProps = {
  city: Location;
  offers: Offers;
  isMainMap?: boolean;
}

const defaultMarkerIcon = leaflet.icon({
  iconUrl: './img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

export default function Map({city, offers, isMainMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude
            },
            {
              icon: (selectedOfferId !== null && offer.id === selectedOfferId)
                ? activeMarkerIcon
                : defaultMarkerIcon
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOfferId]);

  return (
    <section
      className={cn('map', {
        'cities__map': isMainMap,
        'property__map': !isMainMap
      })}
      ref={mapRef}
      style={{minHeight: '100%'}}
    >
    </section>
  );
}
