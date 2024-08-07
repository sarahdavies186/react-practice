import React, { useState } from "react";
import "./Gig.css";
import Favourite from "./Favourite";

function Gig(props) {
  function handleFavouriteToggle() {
    props.toggleFavourite(props.name);
  }

  return (
    <>
      <h3 className="artist-name">{props.name}</h3>
      <img className="artist-image" src={props.image} />
      <p className="artist-text">{props.description}</p>
      <p className="artist-text">{props.date}</p>
      <p className="artist-text">{props.location}</p>
      <Favourite
        isFavourite={props.isFavourite}
        onToggle={handleFavouriteToggle}
      />
    </>
  );
}

export default Gig;
