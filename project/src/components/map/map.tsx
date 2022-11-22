import {useRef, useEffect} from 'react';
import cn from 'classnames';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getOffersByLocation} from '../../utils';

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
  isMainMap?: boolean;
}

export default function Map({isMainMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_COORDINATE);

  const location = useAppSelector((state) => state.location);
  const offers = useAppSelector((state) => getOffersByLocation(state.offers, location));
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);

  useEffect(() => {
    if (map) {
      const mapCenter = offers.length
        ? offers[0].city.location
        : DEFAULT_COORDINATE;

      map.setView(
        {
          lat: mapCenter.latitude,
          lng: mapCenter.longitude
        },
        mapCenter.zoom
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
