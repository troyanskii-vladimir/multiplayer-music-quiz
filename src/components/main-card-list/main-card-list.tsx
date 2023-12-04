import { Socket } from 'socket.io-client';
import { Pack } from '../../types/pack';
import MainCardItem from '../main-card-item/main-card-item';


type MainCardListProps = {
  packs: Pack[];
  socket: Socket;
}

function MainCardList({ packs, socket }: MainCardListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      {
        packs.map((pack) => (
          <MainCardItem pack={pack} socket={socket} key={pack._id}/>
        ))
      }
    </div>
  );
}

export default MainCardList;
