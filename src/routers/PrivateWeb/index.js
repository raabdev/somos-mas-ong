import React from "react";
import {privateWebArray} from "./privateWebArray";
import {Route, Switch} from "react-router-dom";
import Home from "components/public/home";
import {EditUsersPage} from "pages/backoffice/users";
import {useSelector} from "react-redux";

const PrivateWeb = () => {
  //Alkemy API specifies roles 1 and 0
  const {isLoggedIn, role, id} = useSelector(state => state.auth);
  const isAdmin = isLoggedIn && role
  const user_id = id

  //Mock isAdmin, isLoggedIn = true for development
  // const isAdmin = true;
  // const isLoggedIn = false;
  // const user_id = 2;

  const mapRoutes = routes => {
    return routes.map(route => {
      return (
        <Route key={route.id} exact path={route.path}>
         <div className='global_transitions'>
          {route.component}
          </div>
        </Route>
      );
    });
  };
  
  if (isAdmin) {
    return <Switch>{mapRoutes(privateWebArray)}</Switch>;
  } else if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path={"/backoffice/users/" + user_id}>
          <EditUsersPage />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    );
  }
};

export default PrivateWeb;
