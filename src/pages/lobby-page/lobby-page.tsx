import { Socket } from 'socket.io-client';
import Header from '../../components/header/header';
import './lobby-page.scss';
import MainCardList from '../../components/main-card-list/main-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { getPacks } from '../../store/packs/packs.selectors';
import { getPacksAction } from '../../store/api-action';
import { getUserData } from '../../store/auth/auth.selectors';

type LobbyPageProps = {
  socket: Socket;
}


type UserRecieve = {
  socketId: string;
  userId: string;
}

function LobbyPage({ socket }: LobbyPageProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [onlineUsers, setOnlineUsers] = useState<UserRecieve[]>([]);

  const packs = useAppSelector(getPacks);
  const userData = useAppSelector(getUserData);

  useEffect(() => {
    socket.on('recieve_onlineUsers', (data: UserRecieve[]) => {
      console.log(data);
      setOnlineUsers(data);
    })

    return () => {
      socket.off('recieve_onlineUsers');
    }
  })

  useEffect(() => {
    dispatch(getPacksAction());
  }, [])

  useEffect(() => {
    socket.emit('identity', userData.userName);
  }, [userData])

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <div className='page-content'>
          <section className='catalog'>
            <div className='container'>
              <h1 className="title title--h2">Каталог</h1>
              <div className="page-content__columns">
                <div>
                  <button onClick={() => socket.emit('create_room', (packs[2]))}>Создать комнату 3</button>
                  <button onClick={() => socket.emit('get_onlineUsers')}>Загрузить пользователей в сети которые</button>
                  {
                    onlineUsers.map((user, i) => (
                      <p key={i}>{user.userId}</p>
                    ))
                  }
                </div>
                <div className="catalog__content">
                  <MainCardList packs={packs} socket={socket} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LobbyPage;
