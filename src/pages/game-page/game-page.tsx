import { Socket } from 'socket.io-client';
import Header from '../../components/header/header';
import './game-page.scss';
import { useAppDispatch } from '../../hooks';
import { useEffect, useState } from 'react';
import GameRoundScreen from '../../components/game-round-screen/game-round-screen';
import { Question } from '../../types/question';


type GamePageProps = {
  socket: Socket;
}

function GamePage({ socket }: GamePageProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [roundData, setRoundData] = useState<Question>({} as Question);

  useEffect(() => {
    socket.on('recieve_gameData', (gameData: Question) => {
      setRoundData(gameData);
    });

    return () => {
      socket.off('recieve_gameData');
    }
  }, [socket])

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <div className='page-content'>
          <section className='catalog'>
            <div className='container'>
              <h1 className="title title--h2">Игра</h1>
              <div className="page-content__columns">
                <div>

                </div>
                <div className="catalog__content">
                  <GameRoundScreen roundData={roundData} socket={socket} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default GamePage;
