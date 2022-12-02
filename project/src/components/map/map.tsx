import {useRef, useEffect} from 'react';
import cn from 'classnames';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {Offers, Offer} from '../../types/offer';

type MapProps = {
  offers: Offers;
  selectedOffer: Offer | null;
  isMainMap?: boolean;
}

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

function Map({offers, selectedOffer, isMainMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const mapLocation = offers.length ? offers[0].city.location : DEFAULT_COORDINATE;
  const map = useMap(mapRef, mapLocation);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);

      map.flyTo({
        lat: mapLocation.latitude,
        lng: mapLocation.longitude
      },
      mapLocation.zoom
      );

      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude
            },
            {
              icon: (selectedOffer !== null && offer.id === selectedOffer.id)
                ? activeMarkerIcon
                : defaultMarkerIcon
            }
          )
          .addTo(markerGroup);
      });

      if (!isMainMap && selectedOffer) {
        leaflet.marker(
          {
            lat: selectedOffer.location.latitude,
            lng: selectedOffer.location.longitude
          },
          {icon: activeMarkerIcon}
        ).addTo(markerGroup);
      }

      return () => {
        markerGroup.clearLayers();
      };
    }
  }, [map, mapLocation, isMainMap, offers, selectedOffer]);

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
