import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks/useAppSelector';

import cn from 'classnames';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const DEFAULT_COORDINATE = {
  latitude: 48.856663,
  longitude: 2.351556,
  zoom: 5
};

type MapProps = {
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

export default function Map({isMainMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_COORDINATE);

  const offers = useAppSelector((state) => state.offers);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);

  useEffect(() => {
    if (map) {
      const location = offers.length
        ? offers[0].location
        : DEFAULT_COORDINATE;

      map.setView(
        {
          lat: location.latitude,
          lng: location.longitude
        },
        location.zoom
      );
    }
  }, [map, offers]);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);

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
  }, [map, isMainMap, offers, selectedOfferId]);

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
