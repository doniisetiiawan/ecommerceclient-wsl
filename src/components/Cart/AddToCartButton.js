import React from 'react';
import Button from '../Button/Button';

const AddToCartButton = ({ productId }) => (
  <>
    {(addToCart) => (
      <Button
        onClick={() => addToCart({ variables: { productId } })}
      >+ Add to cart
      </Button>
    )}
  </>
);

export default AddToCartButton;
