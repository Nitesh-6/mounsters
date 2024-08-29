import './card-list.styles.css';
import Card from '../card/card.component';
import { Mounster } from '../../App';

type cardListProps = {
  mounsters: Mounster[]
}

function CardList({ mounsters }: cardListProps) {
  return (
    <div className="card-list">
      {mounsters.map((mounster) => {
        const {id} = mounster;
        return (
          <Card key={id} mounsters={mounster} />
        );
      })}
    </div>
  );
}

export default CardList;
