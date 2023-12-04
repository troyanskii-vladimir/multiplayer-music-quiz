import { useRef, useState } from 'react';
import './modal-main-auth.scss';
import { Socket } from 'socket.io-client';
import { useAppDispatch } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginAction, registerAction } from '../../store/api-action';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../config';


type ModalMainAuthProps = {
  socket: Socket;
  onCloseButtonClick: () => void;
}

type InputsLogin = {
  login: string;
  password: string;
};

type InputsRegister = {
  login: string;
  password: string;
  passwordRepeat: string;
};

function ModalMainAuth({ socket, onCloseButtonClick }: ModalMainAuthProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isLoginBloced, setIsloginBlocked] = useState<string>('');

  const loginText = useRef(null);
  const loginForm = useRef(null);
  const signupLink = useRef(null);

  const handleChangeLoginClick = () => {
    loginForm.current.style.marginLeft = "0%";
    loginText.current.style.marginLeft = "0%";
  };

  const handleChangeRegisterClick = () => {
    loginForm.current.style.marginLeft = "-50%";
    loginText.current.style.marginLeft = "-50%";
  };

  const handleCloseButtonClick = () => {
    onCloseButtonClick();
  };


  const { register: login, handleSubmit: handleLoginSubmit, formState: {errors: errorsLog} } = useForm<InputsLogin>({mode: 'onChange'});

  const { register: register, handleSubmit: handleRegisterSubmit, getValues, formState: {errors: errorsReg} } = useForm<InputsRegister>({mode: 'onChange'})

  const onLoginSubmit: SubmitHandler<InputsLogin> = async (data) => {
    const result = await dispatch(loginAction({
      login: data.login,
      password: data.password,
    }));

    if (result.meta.requestStatus === 'fulfilled') {
      onCloseButtonClick();
      socket.emit('identity', data.login);
      navigate(AppRoute.Lobby);
    }
  }

  const onRegisterSubmit: SubmitHandler<InputsRegister> = async (data) => {
    const result = await dispatch(registerAction({
      login: data.login,
      password: data.password,
    }));

    if (result.meta.requestStatus === 'rejected') {
      setIsloginBlocked(data.login);
    } else {
      onCloseButtonClick();
      socket.emit('identity', data.login);
      navigate(AppRoute.Lobby);
    }
  }

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="title-text">
          <div className="title login" ref={loginText}>С возвращением!</div>
          <div className="title signup">Добро пожаловать!</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" defaultChecked />
            <input type="radio" name="slide" id="signup" />
            <label htmlFor="login" className="slide login" onClick={handleChangeLoginClick}>
              Вход
            </label>
            <label htmlFor="signup" className="slide signup" onClick={handleChangeRegisterClick}>
              Регистрация
            </label>
            <div className="slider-tab" />
          </div>
          <div className="form-inner">
            <form className="login" method="post" ref={loginForm} onSubmit={handleLoginSubmit(onLoginSubmit)}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Логин"
                  {
                    ...login(
                      'login',
                      {
                        required: 'Введите имя пользователя'
                      }
                    )
                  }
                />
                {
                  errorsLog.login?.type === 'required' &&
                  <><span style={{color: "red"}} role="alert">{errorsLog.login.message}</span></>
                }
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Пароль"
                  {
                    ...login(
                      'password',
                      {
                        required: 'Введите пароль'
                      }
                    )
                  }
                />
                {
                  errorsLog.password?.type === 'required' &&
                  <><span style={{color: "red"}} role="alert">{errorsLog.password.message}</span></>
                }
              </div>
              <div className="field btn">
                <div className="btn-layer" />
                <input type="submit" defaultValue="Login" />
              </div>
              <div className="signup-link">
                Для начала игры необходимо зарегестрироваться
              </div>
            </form>
            <form action="#" className="signup" ref={signupLink} onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Логин"
                  {
                    ...register(
                      'login',
                      {
                        required: 'Введите имя пользователя'
                      }
                    )
                  }
                />
                {
                  isLoginBloced &&
                  <><span style={{color: "red"}} role="alert">Имя <span>{isLoginBloced}</span> уже занято</span></>
                }
                {
                  errorsReg.login?.type === 'required' &&
                  <><span style={{color: "red"}} role="alert">{errorsReg.login.message}</span></>
                }
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Пароль"
                  {
                    ...register(
                      'password',
                      {
                        required: 'Введите пароль'
                      }
                    )
                  }
                />
                {
                  errorsReg.password?.type === 'required' &&
                  <><span style={{color: "red"}} role="alert">{errorsReg.password.message}</span></>
                }
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Подтвердите пароль"
                  {
                    ...register(
                      'passwordRepeat',
                      {
                        required: 'Введите пароль повторно',
                        validate: (value: string) => {
                          const { password } = getValues();
                          return password === value || 'Пароли не совпадают';
                        }
                      }
                    )
                  }
                />
                {
                  errorsReg.passwordRepeat?.type === 'required' || errorsReg.passwordRepeat?.type === 'validate' &&
                  <><span style={{color: "red"}} role="alert">{errorsReg.passwordRepeat.message}</span></>
                }
              </div>
              <div className="field btn">
                <div className="btn-layer" />
                <input type="submit" defaultValue="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMainAuth;
