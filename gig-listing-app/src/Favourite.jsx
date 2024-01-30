import React, { useState } from "react";

function Favourite(props) {
  const { isFavourite, onToggle } = props;

  return (
    <div>
      <button
        className={isFavourite ? "favourited" : "favourite"}
        onClick={onToggle}
      >
        {isFavourite ? "favourited" : "favourite"}
      </button>
    </div>
  );
}

export default Favourite;
