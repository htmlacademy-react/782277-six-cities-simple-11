import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import Header from '../../components/header/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
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
