import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import userStore from 'stores/userStore';

export default function AuthRoute({ component: Component, ...rest }) {
  const { current } = userStore();
  return (
    <Route
      {...rest}
      render={(props) =>
        current ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
