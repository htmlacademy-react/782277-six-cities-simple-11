import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';

import {useAppSelector} from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';

import {AppRoute, AuthorizationStatus} from '../../const';


function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Authorized) {
    navigate(AppRoute.Main);
  }

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
              <a className="locations__item-link" href="#todo">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
