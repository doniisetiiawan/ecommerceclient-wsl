import React from 'react';
import Button from '../Button/Button';

const LoginButton = ({ isLoggedIn }) => (
  <>
    {(client) => (
      <Button
        onClick={() => client.writeData({ data: { isLoggedIn: !isLoggedIn } })}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    )}
  </>
);

export default LoginButton;
