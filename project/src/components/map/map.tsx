import {useRef, useEffect} from 'react';
import cn from 'classnames';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getSelectedOfferId} from '../../store/app-process/selectors';
import {Offers} from '../../types/offer';


const DEFAULT_COORDINATE = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 11
};

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

type MapProps = {
  offers: Offers;
  isMainMap?: boolean;
}

function Map({offers, isMainMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const mapLocation = offers.length ? offers[0].city.location : DEFAULT_COORDINATE;
  const map = useMap(mapRef, mapLocation);
  const selectedOfferId = useAppSelector(getSelectedOfferId);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);

      map.setView({
        lat: mapLocation.latitude,
        lng: mapLocation.longitude
      });

      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude
            },
            {
              icon: (isMainMap && selectedOfferId !== null && offer.id === selectedOfferId)
                ? activeMarkerIcon
                : defaultMarkerIcon
            }
          )
          .addTo(markerGroup);
      });

      return () => {
        markerGroup.clearLayers();
      };
    }
  }, [map, isMainMap, mapLocation, offers, selectedOfferId]);

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

export default Map;
