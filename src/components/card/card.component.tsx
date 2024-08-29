import "./card.styles.css";
import { Mounster } from "../../App";

type cardProps = {
  mounsters: Mounster;
};

const Card = ({ mounsters }: cardProps) => {
  const { name, id, email } = mounsters;
  return (
    <div>
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
