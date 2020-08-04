import React from 'react';
import { useMutation } from '@apollo/client';
import Button from '../Button/Button';
import {
  ADD_TO_CART,
  GET_CART,
  GET_CART_TOTAL,
} from '../../constants';

const AddToCartButton = ({ productId }) => {
  const [addToCart] = useMutation(ADD_TO_CART, {
    refetchQueries: [
      { query: GET_CART },
      { query: GET_CART_TOTAL },
    ],
  });

  return (
    <>
      <Button
        onClick={() => addToCart({ variables: { productId } })}
      >
        + Add to cart
      </Button>
    </>
  );
};
export default AddToCartButton;
