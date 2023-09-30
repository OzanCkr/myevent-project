import React from "react";

function EventItem({ image, name, price, description }) {
  return (
    <div className="eventItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h2> {name} </h2>
      <p>{description}</p>
      <p> {price} </p>
    </div>
  );
}

export default EventItem;
