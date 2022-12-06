import {Offer} from '../../types/offer';

type OfferGalleryProps = {
  offer: Offer;
};

const MAX_IMAGES = 6;

function OfferGallery({offer}: OfferGalleryProps): JSX.Element {
  const images = offer.images.slice(0, MAX_IMAGES);

  return (
    <div className="property__gallery-container container" data-testid="offer-gallery">
      <div className="property__gallery">
        {images.map((source) => (
          <div className="property__image-wrapper" key={source}>
            <img
              className="property__image"
              src={source}
              alt={offer.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
