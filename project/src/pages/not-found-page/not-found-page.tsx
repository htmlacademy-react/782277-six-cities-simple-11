import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import {AppRoute} from '../../const';


function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>Six cities: page not found</title>
      </Helmet>

      <Header />

      <main className="page__main">
        <div className="container">
          <section>
            <h1>404. Page not found</h1>

            <Link to={AppRoute.Main}>Вернуться на главную</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
