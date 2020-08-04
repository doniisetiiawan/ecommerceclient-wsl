import React from 'react';
import Button from '../Button/Button';

const CartButton = ({ onClick }) => (
  <>
    {({ data, loading, error }) => (
      <Button onClick={onClick}>
        {`Cart (${
          loading || error ? 0 : data && data.cart.total
        })`}
      </Button>
    )}
  </>
);

export default CartButton;
