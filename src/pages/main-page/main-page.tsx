import './main-page.scss';
import Headphones from './headphones';
import { useState } from 'react';
import ModalMainAuth from '../../components/modal-main-auth/modal-main-auth';
import { Socket } from 'socket.io-client';


type MainPageProps = {
  socket: Socket;
}

function MainPage({socket}: MainPageProps): JSX.Element {
  const [isAuthVisible, setIsAuthVisible] = useState<boolean>(false);

  const handleStartButtonClick = () => {
    document.body.classList.add('scroll-lock');
    setIsAuthVisible(true);
  };

  const handleCloseButtonClick = () => {
    document.body.classList.remove('scroll-lock');
    setIsAuthVisible(false);
  }

  return (
    <>
      <div className='main_page__container'>
        <div className='main_page__content'>
          <p className='main_page__title'>Musical Quiz</p>
          <p className='main_page__subtitle'>Играй с друзьями</p>
          <p className='main_page__describe'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis maxime optio nisi minima repudiandae repellendus praesentium aperiam ratione. Neque eum voluptatibus nihil praesentium cumque dolor, tempore vel consequatur omnis?</p>
          <button className='btn btn-start__game' onClick={handleStartButtonClick}>Начать играть</button>
        </div>

        <div
          className='main_page__decoration'
        >
          {/* <Headphones /> */}
        </div>
      </div>
      {
          isAuthVisible &&
          <ModalMainAuth socket={socket} onCloseButtonClick={handleCloseButtonClick} />
        }
    </>
  );
}

export default MainPage;
