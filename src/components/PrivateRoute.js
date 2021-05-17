import {
  Route,
  Redirect
} from "react-router-dom";
import useToken from "./useToken";

function PrivateRoute({ children, ...rest }) {
  const [token] = useToken();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
