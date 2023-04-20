import './card-list.styles.css';
import Card from '../card/card.component';

function CardList({ mounsters }) {
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
