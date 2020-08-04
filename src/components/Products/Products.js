import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import SubHeader from '../Header/SubHeader';
import ProductItem from './ProductItem';
import { GET_PRODUCTS } from '../../constants';
import Filters from './Filters';

const ProductItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Products = ({ history }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { limit: 5 },
  });

  return (
    <>
      {history && (
        <SubHeader
          title="Available products"
          goToCart={() => history.push('/cart')}
        />
      )}

      <Filters limit={5} />
      {loading || error ? (
        <Alert>
          {loading ? 'Loading...' : error.message}
        </Alert>
      ) : (
        <ProductItemsWrapper>
          {data.products
            && data.products.map((product) => (
              <ProductItem
                key={product.id}
                data={product}
              />
            ))}
        </ProductItemsWrapper>
      )}
    </>
  );
};

export default Products;
