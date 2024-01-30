import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React, { useState } from "react";
import "./App.css";
import Gig from "./Gig";
import Die from "./Die";

function App() {
  const [favouriteGigs, setFavouriteGigs] = useState([]);

  const toggleFavourite = (gigName) => {
    setFavouriteGigs(prevGigs => {
      if (prevGigs.includes(gigName)) {
        const updatedGigs = prevGigs.filter(gig => gig !== gigName);
        return updatedGigs;
      } else {
        const updatedGigs = [...prevGigs, gigName];
        console.log('New state:', updatedGigs);
        return updatedGigs;
      }
    });
  };
  

  return (
    <>
      <Gig
        name="Cleo Sol"
        image="https://i0.wp.com/pipermintblog.com/wp-content/uploads/2020/10/cleo-sol-3.jpg?resize=1038%2C576&ssl=1"
        description="Your girl Clee, live at the Royal Albert Hall for one night only"
        date="Sunday 18th February 2024 20:00"
        location="LONDON"
        isFavourite={favouriteGigs.includes("Cleo Sol")}
        toggleFavourite={toggleFavourite}
      />
      <Gig
        name="Tems"
        image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSj_MKZ0gP3UBZg4blr2GO5XDIy5NrCddlbc_AYdw2Ki_58WF2q"
        description="Tems me&u, live at the Royal Albert Hall for one night only"
        date="Saturday 17th February 2024 20:00"
        location="LONDON"
        isFavourite={favouriteGigs.includes("Tems")}
        toggleFavourite={toggleFavourite}
      />
      <Die />
    </>
  );
}

export default App;
