import React from "react";
import { Route, useNavigate } from "react-router-dom";
//import checkIfUserIsAuth from "../utils/checkIfUserIsAuth";
const PrivateRoute = ({ element: Element, ...rest }) => {
  let navigate = useNavigate();
  const checkIfUserIsAuth = true;
  return (
    <Route
      {...rest}
      element={(routerProps) =>
        checkIfUserIsAuth() ? (
          <div className="body">
            <Nav/>
            <Element {...routerProps} />
            <RightContent/>
          </div>
        ) : (
          navigate("/login")
        )
      }
    />
  );
};
export default PrivateRoute;
