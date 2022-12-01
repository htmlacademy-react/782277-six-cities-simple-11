import {useAppSelector} from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';

import {Reviews} from '../../types/review';
import {OfferId} from '../../types/offer';

import {AuthorizationStatus} from '../../const';


type ReviewListProps = {
  reviews: Reviews | null;
  offerId: OfferId;
};

function ReviewList({reviews, offerId}: ReviewListProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const shouldDisplayReviews = authorizationStatus === AuthorizationStatus.Authorized;

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

      {shouldDisplayReviews && <ReviewForm offerId={offerId} />}
    </section>
  );
}

export default ReviewList;
