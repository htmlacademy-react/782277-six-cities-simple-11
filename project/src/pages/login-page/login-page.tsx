import {useState, FormEvent, ChangeEvent} from 'react';
import {Helmet} from 'react-helmet-async';

import {loginAction} from '../../store/api-action';
import {useAppDispatch} from '../../hooks/useAppDispatch';

import Header from '../../components/header/header';

import {LOGIN_FIELDS} from '../../const';
import { formatFirstLetter } from '../../utils';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (formData.email && formData.password) {
      dispatch(loginAction({
        login: formData.email,
        password: formData.password
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Six cities: sign in</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <form className="login__form form" action="#" method="post"onSubmit={handleFormSubmit}>
              {LOGIN_FIELDS.map((field) => (
                <div key={field} className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">{formatFirstLetter(field)}</label>
                  <input
                    className="login__input form__input"
                    type={field}
                    name={field}
                    placeholder={formatFirstLetter(field)}
                    onChange={handleFieldChange}
                    required
                  />
                </div>
              ))}

              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>

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
