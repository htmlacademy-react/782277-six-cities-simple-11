import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';

import {Reviews} from '../../types/review';
import {OfferId} from '../../types/offer';

type ReviewListProps = {
  reviews: Reviews;
  offerId: OfferId;
};


export default function ReviewList({reviews, offerId}: ReviewListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews?.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviews && reviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))}
      </ul>

      <ReviewForm offerId={offerId} />
    </section>
  );
}
