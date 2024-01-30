import React, {useState} from 'react';

function Favourite() {
  const [favourite, setFavourite] = useState(false);

  function handleClick(e) {
   setFavourite(!favourite)
   console.log(e)
  }

  function handleChange(e) {
    console.log(e.target.value)
  }

  return (
    <div>
      <button className={favourite ? 'favourited' : ''} onClick={handleClick}>{favourite ? 'favourited' : "favourite"}</button>
      <input onChange={handleChange} />
    </div>
  )
}

export default Favourite;