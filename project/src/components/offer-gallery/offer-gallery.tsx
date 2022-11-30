import {Offer} from '../../types/offer';
import {getRandomNumberOfElements} from '../../utils';


type OfferGalleryProps = {
  offer: Offer;
};

function OfferGallery({offer}: OfferGalleryProps): JSX.Element {
  const images = getRandomNumberOfElements(offer.images);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images && images.map((source) => (
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
