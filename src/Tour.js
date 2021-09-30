import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, image, price, name, info } = tour;
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {isReadMore ? info : `${info.substr(0, 200)}...`}
          <button onClick={() => setIsReadMore(!isReadMore)}>
            {isReadMore ? "show less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
