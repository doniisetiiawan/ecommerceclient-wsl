import React from 'react';

const Filters = ({ limit }) => (
  <>
    {(client) => (
      <>
        <label htmlFor="limit">Number of products: </label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => {
            client.writeData({
              data: { limit: e.target.value },
            });
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </>
    )}
  </>
);

export default Filters;
