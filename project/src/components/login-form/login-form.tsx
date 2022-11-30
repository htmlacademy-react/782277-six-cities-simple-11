import {useState, FormEvent, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import {useAppDispatch} from '../../hooks/useAppDispatch';
import {loginAction} from '../../store/user-data/api-actions';

import {formatFirstLetter} from '../../utils';
import {AppRoute} from '../../enum';


const LOGIN_FIELDS = [
  'email',
  'password'
];

type FormData = {
  email: string;
  password: string;
};

function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const validateForm = (formField: FormData): boolean => {
    const emailPattern: boolean = (/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/).test(formField.email);
    const passwordPattern: boolean = (/([0-9].*[a-z])|([a-z].*[0-9])/).test(formField.password);

    if (!emailPattern) {
      toast.info('Введите корректный Email, например six-cities@gmail.com');
      return false;
    }
    if (!passwordPattern) {
      toast.info('Пароль должен состоять минимум из одной буквы и цифры');
      return false;
    }

    return true;
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validateForm(formData)) {
      dispatch(loginAction({
        login: formData.email,
        password: formData.password
      }));

      setFormData({
        email: '',
        password: ''
      });

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
