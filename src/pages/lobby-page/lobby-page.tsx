import { Socket } from 'socket.io-client';
import Header from '../../components/header/header';
import './lobby-page.scss';
import MainCardList from '../../components/main-card-list/main-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getPacks } from '../../store/packs/packs.selectors';
import { getPacksAction } from '../../store/api-action';

type LobbyPageProps = {
  socket: Socket;
}


function LobbyPage({ socket }: LobbyPageProps): JSX.Element {
  const dispatch = useAppDispatch();

  const packs = useAppSelector(getPacks);

  useEffect(() => {
    dispatch(getPacksAction());
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <div className='page-content'>
          <section className='catalog'>
            <div className='container'>
              <h1 className="title title--h2">Каталог</h1>
              <div className="page-content__columns">
                <div className="catalog__content">
                  <MainCardList packs={packs} />
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
