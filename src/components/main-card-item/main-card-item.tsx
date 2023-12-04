import React from 'react';
import { Pack } from '../../types/pack';
import './main-cart-item.scss';
import { Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../config';


type MainCardItemProps = {
  pack: Pack;
  socket: Socket;
}

function MainCardItem({ pack, socket }: MainCardItemProps): JSX.Element {
  const navigate = useNavigate();

  const handlePlayButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();

    socket.emit('join_room', (pack._id));
    navigate(AppRoute.Game);
  };

  return (
    <div className='product-card'>
      <div className="product-card__img">
        <picture>
          <img
            src={pack.packImageUrl}
            width={400}
            height={400}
            alt={pack.packName}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <p className="product-card__title">
          {pack.packName}
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn product-card__btn"
          type="button"
          onClick={handlePlayButtonClick}
        >
          Играть
        </button>
      </div>
    </div>
  );
}

export default MainCardItem;
