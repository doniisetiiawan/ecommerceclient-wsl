import React from 'react';
import { useQuery } from '@apollo/client';
import Button from '../Button/Button';
import { GET_CART_TOTAL } from '../../constants';

const CartButton = ({ onClick }) => {
  const { loading, error, data } = useQuery(GET_CART_TOTAL);

  return (
    <>
      <Button onClick={onClick}>
        {`Cart (${
          loading || error ? 0 : data && data.cart.total
        })`}
      </Button>
    </>
  );
};
export default CartButton;
