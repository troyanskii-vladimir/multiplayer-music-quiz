import { Socket } from 'socket.io-client';

type LobbyPageProps = {
  socket: Socket;
}


function LobbyPage({ socket }: LobbyPageProps): JSX.Element {

  return (
    <>
    <div className='wrapper'>
      <div className='main_page__content'>
        <p className='main_page__title'>Musical Quiz</p>
        <p className='main_page__subtitle'>Играй с друзьями</p>
        <p className='main_page__describe'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis maxime optio nisi minima repudiandae repellendus praesentium aperiam ratione. Neque eum voluptatibus nihil praesentium cumque dolor, tempore vel consequatur omnis?</p>
        <button className='btn btn-start__game'>Начать играть</button>
      </div>
    </div>
    {/* {
        isAuthVisible &&
        <ModalMainAuth socket={socket} onCloseButtonClick={handleCloseButtonClick} />
    } */}
  </>
  );
}

export default LobbyPage;
