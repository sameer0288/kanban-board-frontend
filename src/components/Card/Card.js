import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <>
      <div className="card-item">
        {card.image && (
          <img
            className="card-cover"
            src={card.image}
            alt="pic"
            onMouseDown={(event) => event.preventDefault()}
          />
        )}
        {card.title}
      </div>
    </>
  );
};

export default Card;
