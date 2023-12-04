import { useState } from 'react';
import { Question } from '../../types/question';
import './game-round-screen.scss';
import { Socket } from 'socket.io-client';

type GameRoundScreenProps = {
  roundData: Question;
  socket: Socket;
}

function GameRoundScreen({ roundData, socket }: GameRoundScreenProps): JSX.Element {

  const [artistVariants, setArtistVariants] = useState<string[]>(roundData.artists);

  const [checkedVariant, setCheckedVariant] = useState<string>('');
  const [rightVariant, setRightVariant] = useState<string>('');
  const [wrongVariant, setWrongVariant] = useState<string>('');


  if (!roundData.artists) {
    return (
      <p>Не, пусто вск</p>
    )
  }

  return (
    <div>
      <h3>Какая песня играет?</h3>
      <div className='variants-screen'>
        {
          roundData.artists.map((artist) => (
            <button
              key={artist}
              className={`btn btn-round${checkedVariant === artist ? ' btn-checked' : ''}${rightVariant === artist ? ' btn-right' : ''}${wrongVariant === artist ? ' btn-wrong' : ''}`}
              onClick={() => {
                setCheckedVariant(artist);
                socket.emit('send_my_answer', (artist));
              }}
              disabled={checkedVariant !== ''}
            >
              {artist}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default GameRoundScreen;
