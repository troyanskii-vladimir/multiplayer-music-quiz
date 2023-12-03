import { useRef, useState } from 'react';
import './modal-main-auth.scss';
import { Socket } from 'socket.io-client';
import { useAppDispatch } from '../../hooks';
import { useForm } from 'react-hook-form';
import { loginAction, registerAction } from '../../store/api-action';
import { toast } from 'react-toastify';


type ModalMainAuthProps = {
  socket: Socket;
  onCloseButtonClick: () => void;
}

function ModalMainAuth({ socket, onCloseButtonClick }: ModalMainAuthProps): JSX.Element {
  const dispatch = useAppDispatch();

  const loginText = useRef(null);
  const loginForm = useRef(null);
  const signupLink = useRef(null);

  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const [registerData, setRegisterData] = useState({
    userName: '',
    password: '',
    
  })

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


  // const handleLoginSubmit = () => {
  //   socket.emit('identity', userName)
  //   onCloseButtonClick();
  // };


  // const handleRegisterSubmit = () => {

  // };

  const { register, handleSubmit, formState: {errors, isValid} } = useForm({
    defaultValues: {
      userName: 'Test@test',
    },
    mode: 'onChange',
  });

  const onLoginSubmit = () => {
    dispatch(loginAction({
      login: userName,
      password: userPassword,
    }));
  }

  const onRegisterSubmit = () => {
    dispatch(registerAction({
      login: userName,
      password: userPassword,
    }));
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
                    <form action="#" className="login" ref={loginForm} onSubmit={handleSubmit(onLoginSubmit)}>
                    <div className="field">
                        <input type="text" placeholder="Логин" required value={userName} onChange={(evt) => setUserName(evt.target.value)} />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Пароль" required />
                    </div>
                    <div className="field btn">
                        <div className="btn-layer" />
                        <input type="submit" defaultValue="Login" />
                    </div>
                    <div className="signup-link">
                        Для начала игры необходимо зарегестрироваться
                    </div>
                    </form>
                    <form action="#" className="signup" ref={signupLink} onSubmit={handleSubmit(onRegisterSubmit)}>
                    <div className="field">
                        <input type="text" placeholder="Логин" required />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Пароль" required />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Подтвердите пароль" required />
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
