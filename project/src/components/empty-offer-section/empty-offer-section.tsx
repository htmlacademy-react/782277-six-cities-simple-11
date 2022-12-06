import {useAppSelector} from '../../hooks/use-app-selector';
import {getLocation} from '../../store/offers-data/selectors';

function EmptyOfferSection(): JSX.Element {
  const location = useAppSelector(getLocation);

  return (
    <section className="cities__no-places" data-testid="empty-offer-section">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {location}</p>
      </div>
    </section>
  );
}

export default EmptyOfferSection;
