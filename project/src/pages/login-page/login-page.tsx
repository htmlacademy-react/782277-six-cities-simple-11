import {Helmet} from 'react-helmet-async';
import {Link, Navigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {changeLocation} from '../../store/offers-data/offers-data';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import {getRandomPositiveInteger} from '../../utils';
import {LOCATIONS} from '../../components/location-list/location-list';
import {AppRoute, AuthorizationStatus} from '../../const';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Authorized) {
    return <Navigate to={AppRoute.Main} />;
  }

  const getRandomLocation = LOCATIONS[getRandomPositiveInteger(0, LOCATIONS.length - 1)];

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Six cities: sign in</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => dispatch(changeLocation(getRandomLocation))}
              >
                <span>{getRandomLocation}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
