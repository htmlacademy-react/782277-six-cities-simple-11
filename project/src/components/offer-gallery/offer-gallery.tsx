import {Offer} from '../../types/offer';

type OfferGalleryProps = {
  offer: Offer;
};

export default function OfferGallery({offer}: OfferGalleryProps): JSX.Element {
  const {title, images} = offer;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((source) => (
          <div className="property__image-wrapper" key={source}>
            <img
              className="property__image"
              src={source}
              alt={title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
