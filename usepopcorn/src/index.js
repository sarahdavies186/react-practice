import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <h1>Movie Review</h1>
      
      <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} defaultRating={3} onSetRating={setMovieRating} />

      <StarRating maxRating={5} onSetRating={setMovieRating} />

      <p>This movie was rated {movieRating} stars</p>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <Test/>
  </React.StrictMode>
);

