import { Redirect, Route } from 'react-router-dom';
import userStore from 'stores/userStore';

export default function AuthRoute({ component: Component, ...rest }) {
  const { current } = userStore();
  const localData = JSON.parse(localStorage.getItem('user-storage'));
  return (
    <Route
      {...rest}
      render={(props) =>
        current || localData?.state?.current ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
