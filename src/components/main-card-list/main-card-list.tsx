import { Pack } from '../../types/pack';
import MainCardItem from '../main-card-item/main-card-item';


type MainCardListProps = {
  packs: Pack[];
}

function MainCardList({ packs }: MainCardListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      {
        packs.map((pack) => (
          <MainCardItem pack={pack} key={pack._id}/>
        ))
      }
    </div>
  );
}

export default MainCardList;
