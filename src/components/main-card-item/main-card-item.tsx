import { Pack } from '../../types/pack';
import './main-cart-item.scss';


type MainCardItemProps = {
  pack: Pack;
}

function MainCardItem({ pack }: MainCardItemProps): JSX.Element {
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
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
          }}
        >
          Играть
        </button>
      </div>
    </div>
  );
}

export default MainCardItem;
