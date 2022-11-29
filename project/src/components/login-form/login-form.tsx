import {useState, FormEvent, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';

import {useAppDispatch} from '../../hooks/useAppDispatch';
import {loginAction} from '../../store/user-data/api-actions';

import {formatFirstLetter} from '../../utils';
import {AppRoute, LOGIN_FIELDS} from '../../const';


function LoginForm(): JSX.Element {
  const navigate = useNavigate();
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

      navigate(AppRoute.Main);
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>

      <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
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
  );
}

export default LoginForm;
