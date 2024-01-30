import React from 'react';

function Product(props) {
  return (
    <>
    <p>{props.name}</p>
    <p>{props.description}</p>
    <p>£{props.price}</p>
    </>
  )
}

export default Product;