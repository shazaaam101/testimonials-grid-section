import React from "react";

const Card = ({ imgSrc, description, title, name }) => {
  return (
    <div className="Card">
      <div className="profile">
        <img src={imgSrc} alt="profile" />
        <div className="text">
          <div className="name">{name}</div>
          <div className="verified">Verified Graduate</div>
        </div>
      </div>
      <p className="title">{title}</p>
      <p className="description">"{description}"</p>
    </div>
  );
};

export default Card;
